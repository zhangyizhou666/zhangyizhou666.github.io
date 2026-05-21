# Text-Matched Segment Alignment Diagnostic

Case: `case_01_s30_023_agentic`

This diagnostic aligns free-running answers by surface-text similarity at the segment level, then compares hidden-state segment vectors after mapping them into the Qwen3.5 4B anchor space.

Important caveat: text-matched segments are approximate anchors, not proof that the models followed the same internal reasoning step.

## Mapping validation

| Model | heldout RMSE | retrieval@1 | shuffled retrieval@1 | matched cosine |
| --- | ---: | ---: | ---: | ---: |
| Qwen/Qwen3.5-4B | 0.000 | 1.000 | 0.000 | 0.000 |
| Qwen/Qwen3.5-0.8B | 1.838 | 1.000 | 0.073 | 0.921 |
| Qwen/Qwen3.5-2B | 1.493 | 1.000 | 0.024 | 0.949 |

## Segment-level summary

- `Qwen/Qwen3.5-2B`: mean surface similarity=0.095, mean hidden similarity at text match=0.674, max 0.8B self-recurrence=0.985, repeated-token segments=12/13.
- `Qwen/Qwen3.5-4B`: mean surface similarity=0.242, mean hidden similarity at text match=0.689, max 0.8B self-recurrence=0.985, repeated-token segments=12/13.

## Artifacts

- `plots/*_surface_text_similarity.png`: 0.8B segment to reference segment surface-text similarity.
- `plots/*_aligned_hidden_similarity.png`: 0.8B segment to reference segment aligned hidden similarity.
- `plots/*_segment_alignment_timeline.png`: text similarity, hidden similarity, self-recurrence, and step-size timeline along the 0.8B answer.
- `tables/segment_alignment_rows.csv`: per-segment matched reference rows and previews.
