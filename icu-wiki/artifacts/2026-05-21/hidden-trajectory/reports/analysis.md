# System30 Hidden-State Trajectory Case Study

This diagnostic extracts teacher-forced hidden states from saved System30 answers. It compares Qwen3.5 0.8B bad cases against larger Qwen-family answers on the same question and answer mode.

Important limitation: cross-model hidden dimensions differ, so this report does not directly subtract raw hidden vectors across model sizes. The comparison uses scalar trajectory features and per-answer local PCA/recurrence plots.

## Selected Case Groups

### case_01_s30_023_agentic

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.000, acceptance=0, repeated_4gram=269, recurrence95=0.004, entropy=0.553, failure=unsupported_claim/verbose_low_quality
- larger_reference / Qwen/Qwen3.5-2B: quality=0.875, acceptance=1, repeated_4gram=0, recurrence95=0.001, entropy=0.760, failure=missing_key_condition/none
- larger_reference / Qwen/Qwen3.5-4B: quality=1.000, acceptance=2, repeated_4gram=49, recurrence95=0.011, entropy=0.527, failure=none/none

Observation: the 0.8B answer has quality 0.000 versus the strongest reference 1.000. Its repeated 4-gram count is 269, compared with 49 for the strongest reference.

### case_02_s30_014_single_shot

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.500, acceptance=1, repeated_4gram=24, recurrence95=0.009, entropy=0.641, failure=verbose_low_quality/missing_key_condition
- larger_reference / Qwen/Qwen3.5-4B: quality=0.875, acceptance=1, repeated_4gram=22, recurrence95=0.007, entropy=0.994, failure=unsupported_claim/none

Observation: the 0.8B answer has quality 0.500 versus the strongest reference 0.875. Its repeated 4-gram count is 24, compared with 22 for the strongest reference.

### case_03_s30_024_agentic

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.000, acceptance=0, repeated_4gram=36, recurrence95=0.029, entropy=1.758, failure=unsupported_claim/verbose_low_quality
- larger_reference / Qwen/Qwen3.5-4B: quality=0.750, acceptance=1, repeated_4gram=9, recurrence95=0.007, entropy=0.768, failure=missing_key_condition/over_answering

Observation: the 0.8B answer has quality 0.000 versus the strongest reference 0.750. Its repeated 4-gram count is 36, compared with 9 for the strongest reference.

### case_04_s30_017_single_shot

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.375, acceptance=1, repeated_4gram=38, recurrence95=0.007, entropy=1.203, failure=unsupported_claim/citation_mismatch
- larger_reference / Qwen/Qwen3.5-2B: quality=1.000, acceptance=2, repeated_4gram=4, recurrence95=0.006, entropy=0.551, failure=none/none
- larger_reference / Qwen/Qwen3.5-4B: quality=1.000, acceptance=2, repeated_4gram=23, recurrence95=0.008, entropy=0.503, failure=none/none

Observation: the 0.8B answer has quality 0.375 versus the strongest reference 1.000. Its repeated 4-gram count is 38, compared with 4 for the strongest reference.

### case_05_s30_027_agentic

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.125, acceptance=0, repeated_4gram=16, recurrence95=0.005, entropy=1.604, failure=unsupported_claim/language_or_format_failure
- larger_reference / Qwen/Qwen3.5-4B: quality=1.000, acceptance=2, repeated_4gram=2, recurrence95=0.004, entropy=0.967, failure=none/none

Observation: the 0.8B answer has quality 0.125 versus the strongest reference 1.000. Its repeated 4-gram count is 16, compared with 2 for the strongest reference.

### case_06_s30_002_agentic

- qwen08_bad / Qwen/Qwen3.5-0.8B: quality=0.375, acceptance=0, repeated_4gram=44, recurrence95=0.008, entropy=0.940, failure=unsupported_claim/missing_key_condition
- larger_reference / Qwen/Qwen3.5-2B: quality=0.875, acceptance=1, repeated_4gram=52, recurrence95=0.009, entropy=0.576, failure=missing_key_condition/none
- larger_reference / Qwen/Qwen3.5-4B: quality=0.875, acceptance=1, repeated_4gram=33, recurrence95=0.007, entropy=0.544, failure=missing_key_condition/none

Observation: the 0.8B answer has quality 0.375 versus the strongest reference 0.875. Its repeated 4-gram count is 44, compared with 52 for the strongest reference.

## How To Read The Plots

- `*_feature_comparison.png` compares answer quality, repeated n-grams, recurrence, path length, and entropy within one matched question group.
- `*_cumulative_pca.png` is a local PCA projection of cumulative generated-token mean states for one answer. Coordinates are not shared across different models.
- `*_recurrence.png` shows cosine similarity among cumulative hidden states. Strong blocky high-similarity patterns can indicate repeated or loop-like generation states.
