# Retriever Answer Ablation

- Run: `retriever_answer_ablation_gemma4e4b_raw_20260520`
- Answers scored: `150`
- Judge directory: `data/diagnostics/runs/retriever_answer_ablation_gemma4e4b_raw_20260520/deepseek_judge`

## Summary by Variant

| Variant | Quality | Acceptance | Citation | Over-answer | Clean pass | Blocking | Gold recall | Source fit |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `R0_basic_hybrid` | 0.7542 | 1.1333 | 1.1333 | 0.0333 | 0.4 | 9 | 0.355 | 0.8 |
| `R1_japanese_fts` | 0.7375 | 1.0333 | 1.0333 | 0.0333 | 0.3333 | 10 | 0.3289 | 0.8667 |
| `R2_metadata_exact` | 0.7625 | 1.0667 | 1.2 | 0.0333 | 0.3333 | 9 | 0.3494 | 0.8 |
| `R3_reranker` | 0.8042 | 1.2667 | 1.3333 | 0.0667 | 0.4 | 4 | 0.5144 | 0.7667 |
| `R4_full_current` | 0.8333 | 1.3333 | 1.4667 | 0.0667 | 0.4333 | 3 | 0.6189 | 0.8333 |

## Notes

- This experiment changes only the retriever variant while keeping the generator and judge fixed.
- DeepSeek scores answer quality from the generated answer and retrieved evidence.
- Gold-source recall is computed from the GPT Pro gold-source IDs when those IDs are available.
- Blocking cases use a single-judge diagnostic rule here, not the previous GPT+DeepSeek ensemble rule.
