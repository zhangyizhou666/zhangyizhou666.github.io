import * as pdfjsLib from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

const root = document.querySelector("[data-review-root]");
const sides = ["left", "right"];
const state = {
  versions: [],
  versionBaseUrl: "",
  zoom: 1,
  syncPage: true,
  panels: {}
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function appendList(parent, title, items) {
  const block = document.createElement("div");
  block.className = "review-notes";
  const heading = document.createElement("strong");
  heading.textContent = title;
  block.appendChild(heading);

  if (!items || items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "review-empty";
    empty.textContent = "No notes recorded for this version.";
    block.appendChild(empty);
  } else {
    const list = document.createElement("ul");
    for (const item of items) {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    }
    block.appendChild(list);
  }
  parent.appendChild(block);
}

function renderVersionMeta(panel, version) {
  const meta = panel.root.querySelector("[data-version-meta]");
  clearElement(meta);

  const header = document.createElement("div");
  header.className = "review-version-line";
  const date = document.createElement("span");
  date.textContent = version.date || "";
  const status = document.createElement("p");
  status.textContent = version.status || "";
  header.append(date, status);
  meta.appendChild(header);

  appendList(meta, "Professor comments", version.comments || []);
  appendList(meta, "Changes in this version", version.changes || []);
}

function updatePageControls(panel) {
  panel.pageInput.value = String(panel.pageNumber || 1);
  panel.pageInput.max = String(panel.pageTotal || 1);
  panel.pageCountEl.textContent = `/ ${panel.pageTotal || "-"}`;
}

function setStatus(panel, message) {
  panel.status.textContent = message;
}

function syncOtherPage(sourceSide) {
  if (!state.syncPage) {
    return;
  }
  const source = state.panels[sourceSide];
  for (const side of sides) {
    if (side === sourceSide) {
      continue;
    }
    const panel = state.panels[side];
    if (!panel.pdfDocument) {
      continue;
    }
    panel.pageNumber = clamp(source.pageNumber, 1, panel.pageTotal);
    updatePageControls(panel);
    renderPage(side);
  }
}

async function renderPage(side) {
  const panel = state.panels[side];
  if (!panel.pdfDocument) {
    return;
  }

  try {
    if (panel.renderTask) {
      panel.renderTask.cancel();
    }
    const page = await panel.pdfDocument.getPage(panel.pageNumber);
    const viewport = page.getViewport({ scale: state.zoom });
    const outputScale = window.devicePixelRatio || 1;
    const canvas = panel.canvas;
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;

    panel.renderTask = page.render({
      canvasContext: context,
      viewport,
      transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null
    });

    await panel.renderTask.promise;
    panel.renderTask = null;
    setStatus(panel, `Page ${panel.pageNumber} rendered at ${Math.round(state.zoom * 100)}%.`);
  } catch (error) {
    if (error && error.name === "RenderingCancelledException") {
      return;
    }
    setStatus(panel, `Could not render this page: ${error.message || error}`);
  }
}

async function loadVersion(side, versionId) {
  const panel = state.panels[side];
  const version = state.versions.find((item) => item.id === versionId) || state.versions[0];
  if (!version) {
    return;
  }

  panel.version = version;
  panel.pageNumber = 1;
  panel.pageTotal = 1;
  renderVersionMeta(panel, version);
  updatePageControls(panel);
  setStatus(panel, "Loading PDF...");

  try {
    if (panel.pdfDocument) {
      await panel.pdfDocument.destroy();
    }
    const pdfUrl = new URL(version.file, state.versionBaseUrl).href;
    panel.pdfDocument = await pdfjsLib.getDocument(pdfUrl).promise;
    panel.pageTotal = panel.pdfDocument.numPages;
    panel.pageNumber = clamp(panel.pageNumber, 1, panel.pageTotal);
    updatePageControls(panel);
    await renderPage(side);
    syncOtherPage(side);
  } catch (error) {
    panel.pdfDocument = null;
    setStatus(panel, `Could not load PDF: ${error.message || error}`);
  }
}

function changePage(side, nextPage) {
  const panel = state.panels[side];
  panel.pageNumber = clamp(nextPage, 1, panel.pageTotal || 1);
  updatePageControls(panel);
  renderPage(side);
  syncOtherPage(side);
}

function setZoom(nextZoom) {
  state.zoom = clamp(nextZoom, 0.65, 1.75);
  root.querySelector("[data-zoom-label]").textContent = `${Math.round(state.zoom * 100)}%`;
  for (const side of sides) {
    renderPage(side);
  }
}

function initializePanel(side) {
  const panelRoot = root.querySelector(`[data-side="${side}"]`);
  const panel = {
    root: panelRoot,
    canvas: panelRoot.querySelector("[data-pdf-canvas]"),
    status: panelRoot.querySelector("[data-pdf-status]"),
    select: panelRoot.querySelector("[data-version-select]"),
    pageInput: panelRoot.querySelector("[data-page-input]"),
    pageCountEl: panelRoot.querySelector("[data-page-count]"),
    pageNumber: 1,
    pageTotal: 1,
    pdfDocument: null,
    renderTask: null
  };
  state.panels[side] = panel;

  panel.select.addEventListener("change", () => loadVersion(side, panel.select.value));
  panel.pageInput.addEventListener("change", () => {
    changePage(side, Number(panel.pageInput.value || 1));
  });
  panelRoot.querySelector("[data-page-prev]").addEventListener("click", () => {
    changePage(side, panel.pageNumber - 1);
  });
  panelRoot.querySelector("[data-page-next]").addEventListener("click", () => {
    changePage(side, panel.pageNumber + 1);
  });
}

async function init() {
  if (!root) {
    return;
  }

  for (const side of sides) {
    initializePanel(side);
  }

  const versionsUrl = root.dataset.source;
  state.versionBaseUrl = new URL(versionsUrl, window.location.href);
  const response = await fetch(versionsUrl);
  state.versions = await response.json();

  for (const side of sides) {
    const select = state.panels[side].select;
    select.innerHTML = state.versions
      .map((version) => `<option value="${version.id}">${version.label}</option>`)
      .join("");
  }

  root.querySelector("[data-sync-page]").addEventListener("change", (event) => {
    state.syncPage = event.currentTarget.checked;
    if (state.syncPage) {
      syncOtherPage("left");
    }
  });
  root.querySelector("[data-zoom-out]").addEventListener("click", () => setZoom(state.zoom - 0.1));
  root.querySelector("[data-zoom-in]").addEventListener("click", () => setZoom(state.zoom + 0.1));
  root.querySelector("[data-zoom-reset]").addEventListener("click", () => setZoom(1));

  state.panels.left.select.value = state.versions[0]?.id || "";
  state.panels.right.select.value = state.versions[state.versions.length - 1]?.id || "";
  await Promise.all([
    loadVersion("left", state.panels.left.select.value),
    loadVersion("right", state.panels.right.select.value)
  ]);
}

init().catch((error) => {
  for (const side of sides) {
    if (state.panels[side]) {
      setStatus(state.panels[side], `Could not initialize viewer: ${error.message || error}`);
    }
  }
});
