# GPT Pro Human-Facing Evaluation: System30

Date: 2026-05-13

## Validation

- Result rows: 360
- Review-key rows: 360
- Merged rows: 360
- Missing review IDs: 0
- Extra review IDs: 0
- Schema errors: 0

## Model/Mode Summary

| model | mode | n | avg_human_quality_score | avg_answer_acceptance | avg_readability | avg_citation_usefulness | avg_over_answering_risk | clean_pass_rate | avg_wall_seconds |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen/Qwen3.5-9B | agentic | 30 | 0.9 | 1.7333 | 1.9333 | 1.9 | 0.3667 | 0.6667 | 11.1211 |
| Qwen/Qwen3.5-9B | single_shot | 30 | 0.875 | 1.5333 | 1.9333 | 1.7333 | 0.2 | 0.5333 | 4.1113 |
| google/gemma-4-E4B-it | agentic | 30 | 0.8583 | 1.4667 | 1.8 | 1.8333 | 0.2333 | 0.4333 | 13.3141 |
| google/gemma-4-E2B-it | agentic | 30 | 0.8375 | 1.3667 | 1.8 | 1.8333 | 0.3 | 0.4 | 8.6717 |
| google/gemma-4-E4B-it | single_shot | 30 | 0.8333 | 1.3667 | 1.7667 | 1.7 | 0.1667 | 0.3333 | 3.8835 |
| google/gemma-4-E2B-it | single_shot | 30 | 0.8083 | 1.2 | 1.8333 | 1.6667 | 0.2333 | 0.2667 | 7.7176 |
| Qwen/Qwen3.5-4B | agentic | 30 | 0.7875 | 1.4 | 1.7667 | 1.7333 | 0.6 | 0.4 | 8.8622 |
| Qwen/Qwen3.5-4B | single_shot | 30 | 0.7792 | 1.3 | 1.6 | 1.7333 | 0.4 | 0.2667 | 8.3288 |
| Qwen/Qwen3.5-2B | single_shot | 30 | 0.7125 | 1.0667 | 1.6667 | 1.4667 | 0.5 | 0.1 | 4.7459 |
| Qwen/Qwen3.5-2B | agentic | 30 | 0.6958 | 1.1 | 1.6333 | 1.4333 | 0.6 | 0.1333 | 6.7949 |
| Qwen/Qwen3.5-0.8B | single_shot | 30 | 0.575 | 0.9667 | 1.3667 | 1.1 | 0.8333 | 0.0667 | 4.1371 |
| Qwen/Qwen3.5-0.8B | agentic | 30 | 0.5458 | 1.0 | 1.1 | 1.2 | 0.9333 | 0.1 | 5.8056 |

## Hardest Questions By Average Human Quality

| question_id | category | language | avg_human_quality_score | accepted_2_count | top_primary_failure_tags |
| --- | --- | --- | --- | --- | --- |
| s30_006 | student_status | en | 0.5417 | 0 | missing_key_condition:6; unsupported_claim:5; evidence_insufficient:1 |
| s30_024 | curriculum | zh | 0.5521 | 0 | language_or_format_failure:6; missing_key_condition:4; unsupported_claim:2 |
| s30_007 | student_support | en | 0.5938 | 0 | over_answering:6; missing_key_condition:4; unsupported_claim:1; language_or_format_failure:1 |
| s30_022 | curriculum | en | 0.625 | 2 | missing_key_condition:7; unsupported_claim:3; none:2 |
| s30_010 | language | ja | 0.6354 | 0 | unsupported_claim:5; missing_key_condition:5; over_answering:1; citation_mismatch:1 |
| s30_025 | policy | ja | 0.7188 | 4 | missing_key_condition:6; none:4; unsupported_claim:1; verbose_low_quality:1 |
| s30_021 | curriculum | en | 0.7292 | 1 | evidence_insufficient:5; unsupported_claim:2; missing_key_condition:2; over_answering:2; language_or_format_failure:1 |
| s30_029 | course | zh | 0.7292 | 2 | language_or_format_failure:8; unsupported_claim:2; none:2 |
| s30_003 | registration | en | 0.7396 | 5 | over_answering:5; missing_key_condition:4; none:3 |
| s30_005 | graduation | en | 0.7604 | 1 | missing_key_condition:9; citation_mismatch:1; unsupported_claim:1; verbose_low_quality:1 |

## Easiest Questions By Average Human Quality

| question_id | category | language | avg_human_quality_score | accepted_2_count | top_primary_failure_tags |
| --- | --- | --- | --- | --- | --- |
| s30_013 | credits | en | 0.9375 | 11 | none:9; verbose_low_quality:2; over_answering:1 |
| s30_019 | registration | ja | 0.9167 | 11 | none:10; verbose_low_quality:2 |
| s30_030 | registration | en | 0.9167 | 8 | none:8; unsupported_claim:2; missing_key_condition:1; language_or_format_failure:1 |
| s30_017 | course | en | 0.875 | 9 | none:8; language_or_format_failure:1; unsupported_claim:1; missing_key_condition:1; verbose_low_quality:1 |
| s30_016 | course | en | 0.8333 | 5 | none:5; missing_key_condition:4; citation_mismatch:2; unsupported_claim:1 |
| s30_008 | student_support | en | 0.8333 | 4 | missing_key_condition:7; none:4; unsupported_claim:1 |
| s30_018 | course | ja | 0.8229 | 7 | none:5; over_answering:4; verbose_low_quality:2; missing_key_condition:1 |
| s30_001 | language | en | 0.8125 | 6 | missing_key_condition:5; none:5; verbose_low_quality:1; unsupported_claim:1 |
| s30_014 | office | ja | 0.8125 | 3 | missing_key_condition:5; none:3; verbose_low_quality:1; over_answering:1; unsupported_claim:1 |
| s30_009 | it | en | 0.8021 | 8 | none:6; unsupported_claim:4; verbose_low_quality:1; over_answering:1 |

## Output Files

- `docs/research/gpt_pro_human_judge_packet_system30_2026_05_13/merged_human_judge_scores_with_key.jsonl`
- `data/eval/runs/system30_model_mode_sweep_20260512T125633Z/human_judge_scores_gpt_pro_20260513.jsonl`
- `docs/research/gpt_pro_human_judge_packet_system30_2026_05_13/human_judge_summary_by_model_mode.csv`
- `docs/research/gpt_pro_human_judge_packet_system30_2026_05_13/human_judge_summary_by_model_mode.json`
- `docs/research/gpt_pro_human_judge_packet_system30_2026_05_13/human_judge_summary_by_question.csv`
- `docs/research/gpt_pro_human_judge_packet_system30_2026_05_13/human_judge_failure_tags_by_model_mode.csv`

