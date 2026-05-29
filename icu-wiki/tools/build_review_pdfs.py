#!/usr/bin/env python3
"""Build flattened thesis review PDFs for the static review page."""

from __future__ import annotations

from pathlib import Path

import fitz
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path("/Users/zhangyizhou/Library/Developer")
SOURCE = ROOT / "ICU_wiki/docs/research"
SITE = ROOT / "zhangyizhou666.github.io/icu-wiki"
PAPERS = SITE / "papers"
FONT_PATH = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")


COMMENTS_25 = [
    {
        "id": "C1",
        "anchor": "key point for the chatbot design",
        "comment": "Gap betwen the previoud paragraph and this sentence. It needs to explicitely explain that a chatbot can be a solution for the problems pointed out in the previous paragraph. Then you can state the requirements for chatbot design",
    },
    {
        "id": "C2",
        "anchor": "small enough to run on a single GPU server",
        "comment": "Need to be more specific. Small for what (GPU memory , system memory, parameter size?) How much the model to be small? They should be clearly specified with reasons.",
    },
    {
        "id": "C3",
        "anchor": "smallest local model configuration",
        "comment": '"smallest" should not be the goal, but small enough should be. ',
    },
    {
        "id": "C4",
        "anchor": "ICU university corpus",
        "comment": "recommended to present as a table, with explanations for each source (i.e. what course records contain, what is e-handbook) so that readers other than ICU can understand.",
    },
    {
        "id": "C5",
        "anchor": "ICU Bench 30",
        "comment": "This benchmark can be a part of the answer for the RQ1, so how to construct the questions and why they are enough should be explained to answer RQ1",
    },
]


COMMENTS_28 = [
    {
        "id": "C1",
        "anchor": "Background and Related Work",
        "comment": "This section seems to include not only background technologies but also design choices of your tool, which should instead be described in Section 4 (particularly Sections 2.2 and 2.4). In this section, the focus should be on explaining the background technologies necessary for readers to understand the design choices presented in Section 4.",
    },
    {
        "id": "C2",
        "anchor": "RAGAS",
        "comment": "The inability to distinguish between the models cannot by itself justify not using the evaluation, because it is possible that all models perform sufficiently well. Instead, it should be clarified that RAGAS cannot adequately evaluate the metrics that are important for ICU-Wiki.",
    },
    {
        "id": "C3",
        "anchor": "RRF",
        "comment": "Those technical terms should be explained with references.",
    },
    {
        "id": "C4",
        "anchor": "trial-and-error",
        "comment": "In general, this kind of trial-and-error explanation is not appropriate for a thesis. Instead, it is preferable to explain the problems and the corresponding solutions directly. In your senior thesis, I allowed this style; however, it is not suitable for a master’s thesis or academic publications, because it forces readers to follow your personal experiences and development process. You should instead focus on providing readers with the essential knowledge, namely the problems and the solutions.",
    },
    {
        "id": "C5",
        "anchor": "Japanese tokenizer",
        "comment": "It is recommended to add the example after the process, and finish the paragraph.",
    },
    {
        "id": "C6",
        "anchor": "Source-authority scoring",
        "comment": "This tweek might be one of the essential contributions, and should be explained from more technical aspects (How to score? how to reroute the query based on the score and so on).",
    },
]


CHANGES_29 = [
    {
        "id": "R1",
        "anchor": "Background and Related Work",
        "comment": "Moved Section 2 toward background technologies and citations; kept system-specific design choices in Section 4.",
    },
    {
        "id": "R2",
        "anchor": "RAGAS",
        "comment": "Clarified that RAGAS is limited for ICU Wiki-specific reliability criteria, not simply invalid because model scores are close.",
    },
    {
        "id": "R3",
        "anchor": "Reciprocal rank fusion",
        "comment": "Added explanations for RRF, reranker, and related retrieval terms with references.",
    },
    {
        "id": "R4",
        "anchor": "Retriever design",
        "comment": "Restructured retriever design into problem-oriented subsections.",
    },
    {
        "id": "R5",
        "anchor": "Japanese tokenizer",
        "comment": "Moved the Japanese tokenizer example after the process explanation.",
    },
    {
        "id": "R6",
        "anchor": "Source-authority scoring",
        "comment": "Added a more technical source-authority scoring explanation and a dedicated figure.",
    },
]


def register_font() -> str:
    if FONT_PATH.exists():
        pdfmetrics.registerFont(TTFont("ReviewFont", str(FONT_PATH)))
        return "ReviewFont"
    return "Helvetica"


def build_sheet(path: Path, title: str, rows: list[dict[str, str]], label: str) -> None:
    font = register_font()
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
    )
    title_style = ParagraphStyle(
        "Title",
        fontName=font,
        fontSize=16,
        leading=20,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=8,
    )
    cell_style = ParagraphStyle(
        "Cell",
        fontName=font,
        fontSize=8.3,
        leading=11,
        textColor=colors.HexColor("#172033"),
    )
    muted_style = ParagraphStyle(
        "Muted",
        fontName=font,
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#64748b"),
        spaceAfter=8,
    )

    data = [[Paragraph("ID", cell_style), Paragraph(label, cell_style), Paragraph("Anchor", cell_style)]]
    for row in rows:
        data.append(
            [
                Paragraph(f"<b>{row['id']}</b>", cell_style),
                Paragraph(row["comment"], cell_style),
                Paragraph(row["anchor"], cell_style),
            ]
        )

    table = Table(data, colWidths=[16 * mm, 126 * mm, 36 * mm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#e8eef7")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor("#0f172a")),
                ("BOX", (0, 0), (-1, -1), 0.45, colors.HexColor("#cbd5e1")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#e2e8f0")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )

    story = [
        Paragraph(title, title_style),
        Paragraph(
            "This page is added for side-by-side review. The original thesis pages follow after this review sheet; matching anchors are lightly highlighted in the document.",
            muted_style,
        ),
        Spacer(1, 4),
        table,
    ]
    doc.build(story)


def search_page(doc: fitz.Document, anchor: str, start_page: int = 0) -> tuple[int | None, list[fitz.Rect]]:
    lower_anchor = anchor.lower()
    for page_index in range(start_page, doc.page_count):
        page = doc[page_index]
        rects = page.search_for(anchor)
        if rects:
            return page_index, rects
        text = page.get_text().lower()
        if lower_anchor in text:
            return page_index, []
    return None, []


def annotate_document(
    input_pdf: Path,
    output_pdf: Path,
    sheet_title: str,
    rows: list[dict[str, str]],
    color: tuple[float, float, float],
    label: str,
) -> None:
    PAPERS.mkdir(parents=True, exist_ok=True)
    sheet = PAPERS / f"_{output_pdf.stem}_sheet.pdf"
    build_sheet(sheet, sheet_title, rows, label)

    doc = fitz.open(input_pdf)
    sheet_doc = fitz.open(sheet)
    doc.insert_pdf(sheet_doc, start_at=0)
    sheet_doc.close()
    sheet.unlink(missing_ok=True)

    for row in rows:
        page_index, rects = search_page(doc, row["anchor"], start_page=1)
        if page_index is None:
            continue
        page = doc[page_index]
        if not rects:
            words = row["anchor"].split()
            rects = page.search_for(" ".join(words[: min(3, len(words))]))

        badge_x = page.rect.width - 48
        badge_y = 34 + (int(row["id"][1:]) - 1) * 18
        page.draw_rect(
            fitz.Rect(badge_x, badge_y, badge_x + 32, badge_y + 14),
            color=color,
            fill=color,
            fill_opacity=0.16,
            width=0.8,
            overlay=True,
        )
        page.insert_text(
            fitz.Point(badge_x + 6, badge_y + 10),
            row["id"],
            fontsize=8,
            color=color,
            overlay=True,
        )

        for rect in rects[:4]:
            expanded = fitz.Rect(rect.x0 - 1, rect.y0 - 1, rect.x1 + 1, rect.y1 + 1)
            page.draw_rect(
                expanded,
                color=color,
                fill=color,
                fill_opacity=0.10,
                width=0.7,
                overlay=True,
            )

    doc.save(output_pdf, deflate=True, garbage=4)
    doc.close()


def main() -> None:
    annotate_document(
        SOURCE / "overleaf_package_2026_05_25/main.pdf",
        PAPERS / "thesis_v1_professor_comments.pdf",
        "Professor comments, 25 May 2026",
        COMMENTS_25,
        (0.86, 0.48, 0.05),
        "Comment",
    )
    annotate_document(
        SOURCE / "overleaf_package_2026_05_28/main.pdf",
        PAPERS / "thesis_v2_professor_comments.pdf",
        "Professor comments, 28 May 2026",
        COMMENTS_28,
        (0.86, 0.48, 0.05),
        "Comment",
    )
    annotate_document(
        SOURCE / "overleaf_package_2026_05_29/main.pdf",
        PAPERS / "thesis_v3_current.pdf",
        "Revision notes responding to professor comments",
        CHANGES_29,
        (0.10, 0.43, 0.82),
        "Revision note",
    )


if __name__ == "__main__":
    main()
