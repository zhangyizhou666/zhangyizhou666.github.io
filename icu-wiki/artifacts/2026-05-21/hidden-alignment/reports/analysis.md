# Cross-Model Hidden Trajectory Alignment

This experiment adds an aligned cross-model visualization on top of the May 21 hidden-trajectory case study.

Method summary:

- Calibration texts are teacher-forced ICU passages and high-quality System30 answers.
- Held-out 0.8B bad cases are not used to train the alignment.
- Each model is reduced with PCA, then smaller models are mapped into the 4B anchor PCA space with ridge regression.
- Validation uses held-out paired retrieval and a shuffled-pair baseline.
- The aligned 3D plots are exploratory visualizations, not standalone proof of a shared latent space.

## Alignment Validation

| Model | Retrieval@1 | Retrieval@5 | MRR | Shuffled@1 | RMSE | Shuffled RMSE |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Qwen 0.8B | 1.000 | 1.000 | 1.000 | 0.073 | 1.838 | 5.456 |
| Qwen 2B | 1.000 | 1.000 | 1.000 | 0.024 | 1.493 | 5.528 |

## Best CKA Layer Matches

| Model | Model layer | Anchor layer | Linear CKA |
| --- | --- | --- | ---: |
| Qwen 0.8B | f100 | f100 | 0.992 |
| Qwen 2B | f100 | f100 | 0.992 |

## Held-Out Case Signals

- Selected layer for alignment: `f090`.
- Mean 0.8B bad-case quality: 0.292.
- Mean larger-reference quality: 0.875.
- Mean 0.8B repeated 4-grams: 82.5.
- Mean larger-reference repeated 4-grams: 18.6.

## Artifacts

- `plots/alignment_validation_retrieval_at1.png`: validation versus shuffled baseline.
- `plots/cka_*.png`: layer-wise CKA heatmaps.
- `plots/*_aligned_shared_pca3.png`: shared aligned-space 3D trajectory previews.
- `interactive/aligned_index.html`: draggable shared-space 3D viewers.
- `interactive/feature_space_pca_3d.html`: model-agnostic scalar feature PCA.