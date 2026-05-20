# Retriever Pipeline Ablation

## Aggregate Results

| Variant | Cases | Mean seconds | Authority source @k | Course record @k | Mean term hit | Term cases | Mean gold recall | Gold cases | Mean MRR |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `R0_basic_hybrid` | 30 | 0.1531 | 0.6333 | 0.4667 | None | 0 | None | 0 | None |
| `R1_japanese_fts` | 30 | 0.3067 | 0.8 | 0.4 | None | 0 | None | 0 | None |
| `R2_metadata_exact` | 30 | 0.3161 | 0.7333 | 0.5333 | None | 0 | None | 0 | None |
| `R3_reranker` | 30 | 0.5151 | 0.6667 | 0.5333 | None | 0 | None | 0 | None |
| `R4_full_current` | 30 | 0.4705 | 0.6667 | 0.5 | None | 0 | None | 0 | None |

## Notes

- This is a retriever-only diagnostic. It does not evaluate final answer quality.
- `Mean gold recall` is only meaningful when benchmark rows contain `gold_source_ids`.
- `Mean term hit` is only meaningful when benchmark rows or an expectations file contain expected terms.

## Per-Case Top Result

- `R0_basic_hybrid` / `s30_001`: `JLP Leaflet` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_002`: `ehandbook - Course Registration` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_003`: `ehandbook - Registration Withdrawal` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_004`: `Graduate School - Credit Transfer` / `web_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_005`: `ehandbook - Senior Thesis` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_006`: `ICU Health Care Office for Students - Things to know before your hospital visit` / `web_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_007`: `FD Newsletter Vol. 29` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_008`: `LAS leaflet 2024.pdf` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_009`: `Path after Graduation (Employment / Further School)` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_010`: `自己点検・評価報告書（2009年）` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_011`: `宗務センター Religious Center - CHAPEL HOUR` / `web_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_012`: `AY2026 Spring Term Registration – Course Registration Procedures` / `portal_notice`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_013`: `ehandbook - Transfer Students` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_014`: `ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版）` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_015`: `A survey result on the use of ICU Portal is available` / `portal_notice`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_016`: `Logic Programming` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_017`: `S2: Statistical Information Literacy` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_018`: `J7-A: Japanese` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_019`: `ehandbook - 履修登録` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_020`: `Spring AY2026 Textbook Purchase` / `portal_notice`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_021`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_022`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_023`: `Introduction to Political Science` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_024`: `学部・大学院案内｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_025`: `FD Newsletter Vol. 29` / `pdf_document`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_026`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_027`: `Global Attitudes` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_028`: `Theory-driven Instructional Design` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_029`: `Analysis of Japanese Educational History in the Context the Nation's Development` / `course_record`; term_hit=None; gold_recall=None.
- `R0_basic_hybrid` / `s30_030`: `ehandbook - Course Registration` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_001`: `JLP Leaflet` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_002`: `ehandbook - Course Registration` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_003`: `ehandbook - Registration Withdrawal` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_004`: `Graduate School - Credit Transfer` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_005`: `ehandbook - Senior Thesis` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_006`: `ICU Health Care Office for Students - Things to know before your hospital visit` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_007`: `FD Newsletter Vol. 29` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_008`: `LAS leaflet 2024.pdf` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_009`: `Path after Graduation (Employment / Further School)` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_010`: `ELA生のためのJLP科目について` / `portal_notice`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_011`: `宗務センター Religious Center - CHAPEL HOUR` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_012`: `AY2026 Spring Term Registration – Course Registration Procedures` / `portal_notice`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_013`: `ehandbook - Transfer Students` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_014`: `コンパクト版` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_015`: `A survey result on the use of ICU Portal is available` / `portal_notice`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_016`: `Logic Programming` / `course_record`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_017`: `S2: Statistical Information Literacy` / `course_record`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_018`: `自己点検・評価報告書（2009年）` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_019`: `コンパクト版` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_020`: `Spring AY2026 Textbook Purchase` / `portal_notice`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_021`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_022`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_023`: `Q&A｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_024`: `ソーシャルメディア公式アカウント｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_025`: `大学認証評価結果（2024年）` / `pdf_document`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_026`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_027`: `ソーシャルメディア公式アカウント｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_028`: `情報科学 | ICU - Department of Natural Sciences` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_029`: `ソーシャルメディア公式アカウント｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R1_japanese_fts` / `s30_030`: `ehandbook - Course Registration` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_001`: `JLP Leaflet` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_002`: `Mental Health` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_003`: `ehandbook - Registration Withdrawal` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_004`: `Graduate School - Credit Transfer` / `web_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_005`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_006`: `Elements of Discrete Mathematics` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_007`: `Counseling` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_008`: `LAS leaflet 2024.pdf` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_009`: `Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY` / `web_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_010`: `ELA生のためのJLP科目について` / `portal_notice`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_011`: `here` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_012`: `AY2026 Spring Term Registration – Course Registration Procedures` / `portal_notice`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_013`: `ehandbook - Transfer Students` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_014`: `コンパクト版` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_015`: `A survey result on the use of ICU Portal is available` / `portal_notice`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_016`: `Logic Programming` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_017`: `S2: Statistical Information Literacy` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_018`: `Middle English` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_019`: `コンパクト版` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_020`: `Systems Biology` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_021`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_022`: `Introduction to Capital Markets` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_023`: `Q&A｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_024`: `ソーシャルメディア公式アカウント｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_025`: `大学認証評価結果（2024年）` / `pdf_document`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_026`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_027`: `ソーシャルメディア公式アカウント｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_028`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_029`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R2_metadata_exact` / `s30_030`: `ehandbook - Course Registration` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_001`: `JLP Leaflet` / `pdf_document`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_002`: `Mental Health` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_003`: `ehandbook - FAQ` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_004`: `ehandbook - Study Abroad (Summer Abroad Programs)` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_005`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_006`: `Elements of Discrete Mathematics` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_007`: `Counseling` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_008`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_009`: `IT Center For ALL Users - To Students Graduating` / `web_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_010`: `ELA生のためのJLP科目について` / `portal_notice`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_011`: `Self-Study/Evaluation Report 2023` / `pdf_document`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_012`: `AY2026 Spring Term Registration – Course Registration Procedures` / `portal_notice`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_013`: `ehandbook - Transfer Students` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_014`: `ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版)` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_015`: `Updated Information for ICU Long-term Loans` / `portal_notice`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_016`: `Logic` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_017`: `S2: Statistical Information Literacy` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_018`: `Middle English` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_019`: `ehandbook - 第3学期` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_020`: `Systems Biology` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_021`: `Global Governance` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_022`: `Global Governance` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_023`: `Q&A｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_024`: `Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY` / `web_page`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_025`: `FD Newsletter Vol. 29` / `pdf_document`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_026`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_027`: `Middle English` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_028`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_029`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R3_reranker` / `s30_030`: `ehandbook - 第3学期` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_001`: `JLP Leaflet` / `pdf_document`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_002`: `Mental Health` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_003`: `ehandbook - FAQ` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_004`: `ehandbook - Study Abroad (Summer Abroad Programs)` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_005`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_006`: `Elements of Discrete Mathematics` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_007`: `Counseling` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_008`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_009`: `IT Center For ALL Users - To Students Graduating` / `web_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_010`: `ELA生のためのJLP科目について` / `portal_notice`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_011`: `Self-Study/Evaluation Report 2023` / `pdf_document`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_012`: `AY2026 Spring Term Registration – Course Registration Procedures` / `portal_notice`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_013`: `ehandbook - Transfer Students` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_014`: `ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版）` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_015`: `Updated Information for ICU Long-term Loans` / `portal_notice`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_016`: `Logic` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_017`: `S2: Statistical Information Literacy` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_018`: `Middle English` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_019`: `ehandbook - 第3学期` / `ehandbook_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_020`: `Systems Biology` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_021`: `Global Governance` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_022`: `Global Governance` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_023`: `保健体育｜国際基督教大学（ICU）` / `web_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_024`: `Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY` / `web_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_025`: `レポート・卒論に役立つコンテンツ | CTL` / `web_page`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_026`: `Senior Thesis` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_027`: `Middle English` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_028`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_029`: `Robotics` / `course_record`; term_hit=None; gold_recall=None.
- `R4_full_current` / `s30_030`: `ehandbook - 第3学期` / `ehandbook_page`; term_hit=None; gold_recall=None.
