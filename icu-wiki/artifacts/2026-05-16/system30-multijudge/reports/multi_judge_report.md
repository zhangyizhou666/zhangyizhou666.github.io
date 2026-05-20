# System30 Multi-Judge Evaluation

This report compares the original GPT Pro human-facing judge scores with a second OpenRouter judge: `deepseek/deepseek-v4-pro`.

The two-judge quality score is computed by averaging the four rubric dimensions from GPT Pro and DeepSeek, then applying the same quality formula:

`(answer_acceptance + readability + citation_usefulness + (2 - over_answering_risk)) / 8`

## Judge Agreement

| metric | exact agreement | mean absolute difference | DeepSeek - GPT |
| --- | ---: | ---: | ---: |
| answer_acceptance | 0.7139 | 0.2917 | -0.0806 |
| readability | 0.7556 | 0.2472 | 0.0083 |
| citation_usefulness | 0.5556 | 0.4639 | -0.3306 |
| over_answering_risk | 0.75 | 0.275 | -0.125 |
| human_quality_score |  | 0.1222 | -0.0347 |

## Model/Mode Summary

| model | mode | GPT quality | DeepSeek quality | two-judge quality | blocking bad cases | screen |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Qwen3.5 0.8B | single-shot | 0.575 | 0.4917 | 0.5333 | 16 | review |
| Qwen3.5 0.8B | agentic | 0.5458 | 0.5042 | 0.525 | 15 | review |
| Gemma 4 E2B | single-shot | 0.8083 | 0.7583 | 0.7833 | 4 | review |
| Qwen3.5 2B | single-shot | 0.7125 | 0.6583 | 0.6854 | 4 | review |
| Gemma 4 E2B | agentic | 0.8375 | 0.8458 | 0.8417 | 1 | review |
| Qwen3.5 2B | agentic | 0.6958 | 0.5792 | 0.6375 | 11 | review |
| Gemma 4 E4B | single-shot | 0.8333 | 0.8208 | 0.8271 | 2 | review |
| Qwen3.5 4B | single-shot | 0.7792 | 0.75 | 0.7646 | 4 | review |
| Gemma 4 E4B | agentic | 0.8583 | 0.8625 | 0.8604 | 0 | pass |
| Qwen3.5 4B | agentic | 0.7875 | 0.8042 | 0.7958 | 5 | review |
| Qwen3.5 9B | single-shot | 0.875 | 0.8375 | 0.8562 | 2 | review |
| Qwen3.5 9B | agentic | 0.9 | 0.8792 | 0.8896 | 0 | pass |
