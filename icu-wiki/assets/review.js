const root = document.querySelector("[data-review-root]");
const sides = ["left", "right"];

function pdfUrl(file) {
  const url = new URL(file, `${window.location.origin}/icu-wiki/papers/`);
  url.hash = "toolbar=0&navpanes=0&scrollbar=1&view=FitH";
  return url.href;
}

function setFrame(side, versions) {
  const select = root.querySelector(`[data-version-select="${side}"]`);
  const frame = root.querySelector(`[data-side="${side}"] [data-pdf-frame]`);
  const version = versions.find((item) => item.id === select.value) || versions[0];

  if (!version) {
    frame.removeAttribute("src");
    return;
  }

  frame.src = pdfUrl(version.file);
  frame.title = `${side} PDF: ${version.label}`;
}

async function init() {
  if (!root) {
    return;
  }

  const response = await fetch(root.dataset.source);
  const versions = await response.json();
  const options = versions
    .map((version) => `<option value="${version.id}">${version.label}</option>`)
    .join("");

  for (const side of sides) {
    const select = root.querySelector(`[data-version-select="${side}"]`);
    select.innerHTML = options;
    select.addEventListener("change", () => setFrame(side, versions));
  }

  root.querySelector('[data-version-select="left"]').value = versions[0]?.id || "";
  root.querySelector('[data-version-select="right"]').value = versions[versions.length - 1]?.id || "";

  for (const side of sides) {
    setFrame(side, versions);
  }
}

init().catch((error) => {
  const message = document.createElement("p");
  message.className = "review-error";
  message.textContent = `Could not initialize review viewer: ${error.message || error}`;
  root?.prepend(message);
});
