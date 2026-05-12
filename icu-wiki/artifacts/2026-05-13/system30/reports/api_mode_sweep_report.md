# API Mode Sweep Report

## Summary

| Model | Mode | Count | HTTP statuses | Avg sec | Median sec | Max sec | Evidence sufficient | Avg search calls |
|---|---:|---:|---|---:|---:|---:|---:|---:|
| Qwen/Qwen3.5-0.8B | agentic | 30 | `{"200": 30}` | 5.804 | 5.235 | 10.474 | 0.967 | 1.167 |
| Qwen/Qwen3.5-0.8B | single_shot | 30 | `{"200": 30}` | 4.135 | 2.45 | 49.182 | None | None |
| Qwen/Qwen3.5-2B | agentic | 30 | `{"200": 30}` | 6.792 | 5.977 | 12.422 | 0.767 | 1.667 |
| Qwen/Qwen3.5-2B | single_shot | 30 | `{"200": 30}` | 4.744 | 2.254 | 77.042 | None | None |
| Qwen/Qwen3.5-4B | agentic | 30 | `{"200": 30}` | 8.86 | 8.377 | 15.346 | 0.733 | 1.667 |
| Qwen/Qwen3.5-4B | single_shot | 30 | `{"200": 30}` | 8.327 | 3.666 | 148.585 | None | None |
| Qwen/Qwen3.5-9B | agentic | 30 | `{"200": 30}` | 11.119 | 10.846 | 16.845 | 0.9 | 1.533 |
| Qwen/Qwen3.5-9B | single_shot | 30 | `{"200": 30}` | 4.109 | 3.341 | 19.857 | None | None |
| google/gemma-4-E2B-it | agentic | 30 | `{"200": 30}` | 8.669 | 7.711 | 18.895 | 0.767 | 1.733 |
| google/gemma-4-E2B-it | single_shot | 30 | `{"200": 30}` | 7.716 | 2.957 | 151.548 | None | None |
| google/gemma-4-E4B-it | agentic | 30 | `{"200": 30}` | 13.312 | 12.308 | 26.206 | 0.833 | 1.5 |
| google/gemma-4-E4B-it | single_shot | 30 | `{"200": 30}` | 3.882 | 3.214 | 18.342 | None | None |

## Per-Question Outputs

### Qwen/Qwen3.5-9B / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `19.87`
Answer mode: `remote_model`

Answer:

Your Japanese level for the JLP is decided based on the result of a **placement test** [1]. Additionally, an **additional evaluation** may be conducted during the first class sessions, and your final course level placement may be subject to change based on this in-class assessment [3]. You can check the official information and details on the program and course offerings at the following locations: * The ICU website: https://www. icu. ac. jp/academics/undergraduate/jlp/ * The JLP website: https://sites. google. com/info. jp/jlp/ * The JLP Office (ERB II Rm. 104) for direct inquiries [3].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-9B / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `8.334`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved evidence directly answers both parts of the user's question. Passage 1 and Passage 6 explicitly state that placement is decided by taking a 'placement test' and registering for the assigned course. Passage 3 provides the specific official websites (ICU and JLP) where the user can check further information on the program and course offerings.

Answer:

Your Japanese level is decided by taking a **placement test**, after which you must register for the assigned course [1][3]. You can check the official information on the program and course offerings at the following websites: * ICU Website: https://www.icu.ac.jp/academics/undergraduate/jlp/ * JLP Website: https://sites.google.com/info.icu.ac.jp/jlp/ [2]

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.341912` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0000`)
- [4] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-9B / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `3.168`
Answer mode: `remote_model`

Answer:

Yes, you can still register or change your courses, but only during the **registration change period**. * **Procedure:** If you could not register on the normal registration day, you must complete your registration during the registration change period. After this period ends, no registrations or changes are accepted for any reason [3][4][5]. * **Important Step:** When making a registration change, you must click the **"SAVE"** button to complete the procedure. The process is not finished until this button is clicked [3][4][5]. * **Verification:** After registering or changing courses, please confirm that your changes are reflected correctly via the "Registration Results" on the Registration Website [5]. If you fail to complete registration during the designated period, you must take a leave of absence or withdraw from the university [3][4][5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `10.014`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students who cannot register on the normal registration day (e.g., due to illness) can use the 'Late Registration' or 'Registration Change Period'. They also specify the critical procedural step: clicking the 'SAVE' button to complete the registration change.

Answer:

Yes, you can still register or change your courses. Since you missed the normal registration day due to illness, you must complete your registration during the **Late Registration** or **Registration Change Period** [1][2][5]. Please pay close attention to the following critical steps: * **Click "SAVE":** When making changes, you must click the **"SAVE"** button to complete the procedure. The process is not finished until this button is clicked, even if you have input the data [1][2][3][4]. * **Verify Results:** After registering, confirm that your courses are reflected correctly via the "Registration Results" on the Registration Website [1][3][4]. * **Deadline:** Do not miss the end of this period, as no registrations will be accepted afterward [1][2][3][4]. * **Fee and Advisor:** Be aware that a Late Registration Fee of 3,000 yen is required. You must visit the Educational Affairs Group to make this payment before your advisor can approve your online registration [5].

Retrieved / selected chunks:
- [1] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [2] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [3] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [4] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)
- [5] `0.478392` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-9B / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `6.106`
Answer mode: `remote_model`

Answer:

If you wish to withdraw from a course due to workload, please note the following rules and deadlines based on the provided evidence: * **General Rule:** No registration changes (additions or cancellations) are approved after the **Registration Change period** has finished. If you miss this period, you cannot simply drop a course; you must apply for a **Registration Withdrawal** [1]. * **Scope:** Registration Withdrawal applies to **ALL** courses registered for the ongoing term. It is not possible to withdraw from only some courses [3]. * **Reasoning:** You must submit an application to the Educational Affairs Group with documents explaining your reasonable reasons (e. g. , a medical certificate). While workload is a valid concern, the policy explicitly mentions "illness or unavoidable reason recognized by the University" as grounds for permission [1][3]. * **Timing:** The application must be submitted **by a month prior to the last day of the classes** [3].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-9B / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `10.303`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 2 explicitly lists the official withdrawal deadlines for Spring, Autumn, and Winter terms and mentions the submission deadline, directly answering the user's question about rules and deadlines.

Answer:

If you need to withdraw from a course after seeing your workload, please note the following rules and deadlines: * **Scope of Withdrawal:** You can only withdraw from **all** courses registered for the ongoing term. Partial withdrawal of specific courses is not permitted [2][3]. * **Eligibility and Reason:** Permission for Registration Withdrawal is generally granted only if you cannot continue your studies due to illness or an unavoidable reason recognized by the University. You must submit an application to the Educational Affairs Group along with documents explaining your reasonable reasons (e.g., a medical certificate) [3]. * **Submission Deadline:** Applications must be submitted by **one month prior to the last day of classes** for that term [3]. * **Official Deadlines:** The specific deadlines for submitting the application form are: * **Spring Term:** March 31 * **Autumn Term:** August 31 * **Winter Term:** November 30 *(Note: If these dates fall on a Saturday, Sunday, or national holiday, the deadline is the previous Friday) [1].* * **Consequences:** If approved, no grades will be given; instead, a "W" will be recorded on your transcript, and these courses will not be included in your GPA calculation [3]. * **Important Warning:** No registration changes (including withdrawals) are approved after the Registration Change period has finished. If you miss this window without going through the formal withdrawal procedure, you will receive a failure (F) grade [2].

Retrieved / selected chunks:
- [1] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [2] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006513` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `3.758`
Answer mode: `remote_model`

Answer:

To confirm whether courses or credits will count toward your ICU requirements, you should look at the following: * **Study Abroad Programs:** Credits earned at partner institutions during approved summer or one-year study abroad programs are recognized upon review, with a maximum of 40 credits transferable toward graduation requirements [3]. These credits typically count toward elective course requirements [1]. * **University Partners:** For specific partners like the University of Tsukuba and Sophia University, you can take selected courses and have credits counted toward graduation requirements through a specific review process [4][5]. * **General Transfer:** If participating in other summer programs approved by ICU, credits may be transferred if approved to count toward graduation requirements, subject to a maximum of 40 credits (or 60 for certain transfer students) [1]. For the most accurate determination regarding your specific courses, you should consult the official ehandbook pages on transferring credits or contact the Admissions Center, as final approval depends on individual course reviews [1][2].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-9B / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `8.89`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students can study abroad and transfer credits if approved, mention the 40-credit limit, and direct users to the 'review process' or specific program pages to confirm if courses count toward graduation requirements.

Answer:

To confirm whether courses or credits from your study abroad program will count toward your ICU requirements, you should look at the following: * **Review Process:** For specific partner universities like the University of Tsukuba and Sophia University, credits are counted toward graduation requirements only after they are approved through the **review process** [3][4]. * **Program-Specific Rules:** For Summer Abroad Programs, check if the program is **approved by ICU**; eligible credits are transferred if they meet graduation requirements, with a maximum limit of **40 credits** (or 60 for transfer students) [1]. * **General Transfer Criteria:** If transferring from another university, courses must be considered **equivalent** to ICU courses, have grades of **70 or higher**, and be approved after you enter ICU [5]. Please note that for general study abroad, the final confirmation of which credits count and the exact number allowed is determined after completing the required procedures and the review process [1][5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)
- [5] `0.476808` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `3.22`
Answer mode: `remote_model`

Answer:

You can find the official schedule and specific deadlines for the Senior Thesis on the **ICU Portal**, as detailed instructions and dates are updated there [3]. Regarding the types of deadlines to expect: * **Submission Deadline:** You must submit your thesis PDF to the designated place before the prescribed deadline. No thesis will be accepted after 4:00 p. m. on the deadline date, under any circumstances [3]. * **Relief Application:** If you were not assigned an advisor, a Relief Application is available. The schedule for this application is subject to change but was listed as 10:00 – 16:00 on January 14 (for October 2025 applications) [4]. Please check the ICU Portal regularly for the most current dates, as they are subject to change [3], [4].

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `13.537`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages mention specific deadlines for past years (2024, 2025) and state that the official schedule is announced on the ICU Portal, but they do not provide the current official schedule or a comprehensive list of all expected thesis-related deadlines.

Answer:

You can find the official thesis schedule and deadlines on the **ICU Portal** and the **ehandbook**, as these are the designated places where the Educational Affairs Group posts updates [1][2][3]. Regarding specific thesis-related deadlines you should expect to check, the evidence indicates the following: * **Candidacy Application:** You must apply for senior thesis research candidacy via the Registration Website. Results are typically announced on the Registration Website (e.g., December 3, 2025, in one instance) [4]. * **Final Thesis Submission:** You must submit your final thesis draft as a PDF within a specific window. For example, the deadline was June 3, 2024, for the 2024 graduation cohort, and June 2, 2025, for the 2025 cohort [1][2]. * **Graduation Decision Announcement:** The decision on whether you will graduate is announced on the Registration Website in early July (e.g., July 9, 2024, or July 8, 2025) [1][2]. * **Major Declaration:** Regular students must declare their major by a specific due date (e.g., August 31 for the 6th term of AY2024 Spring) via the Registration Website [3]. Please note that the exact dates for the current year are not listed in the provided text; you must check the ICU Portal and ehandbook for the most up-to-date schedule [1][2][3].

Retrieved / selected chunks:
- [1] `0.950227` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.933188` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.901401` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0004`)
- [4] `0.89534` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0001`)
- [5] `0.877791` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `3.341`
Answer mode: `remote_model`

Answer:

Before planning your courses after returning from a leave of absence, you should check the following: * **Financial Affairs Group:** If your leave of absence request was submitted after the specific deadline for that term (e. g. , Oct 31 for Winter, June 30 for Autumn, Feb 28 for Spring), your tuition and fees may have been automatically withdrawn. You must consult this group directly for details [4]. * **Educational Affairs Group (EAG):** If you do not hold Japanese citizenship and need a Certificate of Eligibility (CoE) for a student visa to re-enter Japan, you must email the EAG at gakuseki@icu. ac. jp to guide you through the process [4]. * **Faculty Members:** You should inform your class teachers of your return and check if they require a doctor's certificate or other proof for your sick leave [3].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-9B / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `16.848`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages contain specific sections on 'Leave of Absence and Reenrolment' (休学および復学) detailing the required procedures, necessary signatures (advisor, guarantor, etc.), submission deadlines, and the specific office (Educational Affairs Group) to contact. Passage 5 also covers course registration procedures relevant to returning students.

Answer:

Before planning your courses after returning to ICU, please check the following procedures and office information: * **Required Office:** Submit your application to the **Educational Affairs Group** (教務グループ) [1][4]. * **Required Documents & Signatures:** You must complete the "Leave of Absence Application Form" (休学願) with signatures from your **academic advisor**, **guarantor**, **Library**, **Financial Affairs Group**, and **Student Affairs Group** [1][4]. * **Medical Certificates:** If your leave was due to illness, you must submit a **doctor's medical certificate** to the Educational Affairs Group to prove your health status is sufficient for study. This information may be shared with the Health Care Office [1][2][4]. * **Reenrollment Deadlines:** You must submit your reenrollment application by the following dates: * **Spring Semester:** December 1 – March 31 [2][3] * **Autumn Semester:** April 1 – August 31 [2][3] * **Winter Semester:** September 1 – November 30 [3] * **Non-Japanese Students:** If you do not hold a valid visa and need a Certificate of Eligibility (CoE) for a "Student" visa, contact the university at **gakuseki@icu.ac.jp** well in advance, as the immigration process takes approximately 1.5 to 2 months [2][3]. * **Course Registration:** Once reenrollment is approved, you can register for courses. Note that if you are taking courses outside your major list, you must obtain signatures from your advisor and the course instructor on the application form [5].

Retrieved / selected chunks:
- [1] `0.991221` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0000`)
- [2] `0.927363` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0001`)
- [3] `0.863852` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0002`)
- [4] `0.858837` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0001`)
- [5] `0.914749` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `6.36`
Answer mode: `remote_model`

Answer:

You can find official information about counseling and student support at ICU through the following resources: * **ICU Counseling Center**: Offers general mental health counseling, consultations about friends and career paths, support for loss of a loved one, and sexual health consultations. They provide various consultation methods including face-to-face, telephone, and chat. [3] * **ICU Counseling Center Hotline (Mitaka City)**: Available for anyone residing, studying, or active in Mitaka City. You can consult anonymously with professional counselors. [3] * **International Biblenders**: An anonymous telephone support service. [3] * **Tokyo Suicide Prevention Center**: Offers anonymous telephone consultations. [3] * **MoreSoyoi Hotline**: Provides 24-hour free telephone and chat support for issues related to work, life, mental health, family, money, and illness. They offer foreign language support (English, Chinese, Korean, Thai, Tagalog, Spanish, Portuguese, Vietnamese, Nepali). [3] * **Tokyo Youth Health Support (Wakasapo)**: Nurses answer physical and mental health concerns for teenagers. [3] * **Health Care Office**: Supports the health of students, faculty, and staff.

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `7.948`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly lists the ICU Counseling Center and various consultation topics (including general mental health), while Passage 5 describes the counseling process and mentions referring to an 'internal-only site' for details, which addresses the user's need for official information and privacy concerns.

Answer:

If you are feeling overwhelmed and concerned about privacy, the **ICU Counseling Center** offers support for general mental health, including anonymous phone consultations. You can find specific consultation methods (such as face-to-face, telephone, chat, or social media) and details on how to access these services on the official **ICU Health Care Office for Students** website [1]. For more detailed information regarding the counseling process and to ensure you are accessing official, internal resources, please refer to the **ICU Campus Life & Career** page under "Student Support," which directs you to an **internal-only site** for full details [5]. This site also outlines how the university respects your autonomy and may refer you to external professional agencies if necessary [5].

Retrieved / selected chunks:
- [1] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [2] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [3] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)
- [4] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [5] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-9B / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `2.386`
Answer mode: `remote_model`

Answer:

To request exam accommodations due to a disability or health condition, you should start by consulting with your **course instructor** and the **Learning Accessibility Services (LAS)** [1][2][4][5]. The official support page or document to look for is the syllabus section titled **"Reasonable Accommodations / 合理的配慮について"**, which states that accommodations are provided in accordance with the **"Basic Policy for Supporting Students with Disabilities"** [1][2][4][5]. The LAS office acts as an intermediary to arrange necessary adjustments, such as extended exam time limits or separate exam rooms [3].

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `11.318`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly answer the user's question by identifying the 'Learning Accessibility Services (LAS)' as the starting point and providing specific steps (meeting with staff, submitting documents) and the types of official support pages (e.g., 'Reasonable Accommodations' sections on course pages) to look for.

Answer:

To request exam accommodations for a disability or health condition, you should start by **meeting with a Learning Accessibility Services (LAS) staff member** to discuss your needs [2]. You should look for official support pages titled **"Reasonable Accommodations"** (or "合理的配慮について") within your course syllabus or schedule pages [3][4][5]. **Next Steps:** 1. **Consult:** Contact both your course instructor and the Learning Accessibility Services (LAS) office [3][4][5]. 2. **Apply:** Submit necessary documents (such as a medical certificate and a signed Request for Academic Accommodations Form) to the LAS office to develop an accommodation plan [2]. 3. **Support Types:** Available accommodations may include extended exam time limits, separate exam rooms, real-time captioning, and alternative format materials [1].

Retrieved / selected chunks:
- [1] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [2] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [3] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [4] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [5] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)

### Qwen/Qwen3.5-9B / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `2.976`
Answer mode: `remote_model`

Answer:

If you are graduating from undergraduate school but continuing to ICU graduate school, you will receive a new account after your matriculation day [4]. Your current undergraduate account (ICU Net ID, ICU Portal, Mail, Google Workspace, etc. ) will expire on March 31, 2026, and email forwarding will stop [1]. Before your current account is deleted, you must backup your necessary files from Gmail and Google Drive, as you will no longer be able to log in to Google or access announcements like the Joining ceremony once the account is removed [1]. If you need to exchange emails after graduation, it is recommended to use an email address you can access after graduation rather than relying on your @icu. ac. jp address, as forwarding stops [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-9B / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `10.866`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 4 directly address the user's situation (graduating undergrad but continuing to grad school) by explaining that the ICU Net ID and associated services (Mail, Google Workspace) will expire on March 31, 2026, and providing instructions on how to handle email forwarding or export data before expiration.

Answer:

As you graduate from undergraduate school while continuing to ICU graduate school, please note the following regarding your IT account: * **Expiration Date:** Your ICU Net ID and associated services (including Mail, Google Workspace, ICU Portal, and Google Drive) will expire on **March 31, 2026** [1]. * **Email Usage:** After graduation, you should use a personal email address for communication rather than your `@icu.ac.jp` address, as email forwarding will stop [1]. * **Data Backup:** Before your account is deleted, you must back up necessary files from Gmail and Google Drive, and download any files you need from Google Drive to your PC [1][2]. * **New Accounts:** New accounts will be issued to you after your matriculation day for the graduate program [2]. * **Consequences of Deletion:** Once your account is deleted, you will no longer be able to log in to Google services, view Joining ceremony announcements, or access Graduate school files created during your undergraduate tenure [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [3] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [4] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-9B / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `5.11`
Answer mode: `remote_model`

Answer:

JLP のレベル分けや履修方法に関する公式情報は、以下の場所で確認できます： * **公式ウェブサイト**: ICU 学術サイトおよび JLP 専用サイト（https://www. icu. ac. jp/academics/undergraduate/jlp/ および https://sites. google. com/info. jp/jlp/）[2] * **JLP 主任への直接問い合わせ**: 教養学部 ERB II 棟 104 室（月曜〜金曜 9:00-11:45, 12:45-16:00）またはメール（jlp@icu. jp）[2] * **入学案内**: 日本語教育プログラム（JLP）の履修要件（例：9 月入学生は通常 45 単位）や免除規定について、入学案内や教養学部要覧に記載されています [3][5]。 レベル分けについては、JLP が CEFR（A1〜C2）の指標を用いて学習目標を定めていることが明記されています [4]。 具体的な履修レベルの決定には、JLP Placement Test（PT）の結果が用いられる場合があります [1]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-9B / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `15.091`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly address the user's questions. Passage 1 explains the JLP placement test (PT) system which determines course levels and mentions the registration timing. Passage 2 explicitly directs users to the official ICU and JLP websites for details on the program and course offerings. Passage 7 confirms the existence of different tracks (Foreign Language vs. First/Heritage Language) based on placement test results. Passage 4 and 8 provide specific details on the level classif

Answer:

日本語プログラム（JLP）のレベル分けと履修方法に関する公式情報は、以下の通りです。 **1. レベル分け（配置試験）** 履修できる科目レベルは、**JLP Placement Test（PT）**の結果によって決まります。 * PTは毎年2回（3月・8月）に実施され、履修希望学期に対応する時期に受験する必要があります [1]。 * 2026年3月実施のPTでは、サイト公開期間（3月23日〜27日）にGoogle Classroomへアクセスし、指示に従って書類等を提出します [1]。 * 結果発表は2026年4月1日午後7時で、一部の学生には4月2日に面接等が行われます [1]。 * 配置試験の結果に基づき、履修できる科目レベルが決定されます [1]。 * 日本語を第一言語・継承語として学ぶ学生向けの「日本語特別教育（Special Japanese）」コースも提供されており、PTの結果や在籍状況によって履修要件が異なります [3][5]。 **2. 公式情報の確認先** 詳細なプログラム内容やコース情報は、以下の公式サイトで確認できます。 * ICU 公式サイト: https://www.icu.ac.jp/academics/undergraduate/jlp/ [2] * JLP 公式サイト: https://sites.google.com/info.icu.ac.jp/jlp/ [2] **3. 履修対象者** JLP科目の履修を希望する学生は、以下の条件のいずれかを満たすELA生である必要があります。 * ELAのStream 1またはStream 2の学生 * 総合型選抜の「EJU（日本留学試験）＜4月/9月入学＞」により入学した学生 [1]。 さらに詳しい要件や免除規定については、ICUの入学案内や教養学部要覧を参照してください [5]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-9B / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `3.819`
Answer mode: `remote_model`

Answer:

Chapel Hour and Christianity Week are campus-life events focused on religious development and community gathering, not academic coursework. * **Chapel Hour** is a weekly service held during the lunch period (specifically Tuesdays or Wednesdays depending on the source) where university ministers, faculty, and students share messages and pray. It is described as an opportunity for the community to gather and is open to everyone, with no classes scheduled during this time [2], [3], [4]. * **Christianity Week (C-Week)** is a public event held annually in May featuring daily programs, addresses by speakers, group discussions, and open houses in faculty homes. It is organized by a student-led committee under a special timetable and is part of the university calendar [1], [2], [5]. For the official schedule, you should check the **university calendar** or the **Religious Center** website, as these events are listed there [2], [5]. Participation in these activities is optional [2], [3].

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### Qwen/Qwen3.5-9B / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `10.901`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages confirm that Chapel Hour is a weekly worship service (campus-life/religious event) and explicitly state that the schedule for Christianity Week is found in the 'Class Schedule' section of the ehandbook.

Answer:

Chapel Hour is a campus-life event, not an academic one, as it is described as a gathering for prayer and peace [1]. You can find the specific schedule for Christianity Week (referred to as "C-Week" in the notices) within the "Class Schedule" section of the ehandbook [2]. While the ehandbook notes that class schedules on Saturdays during Christianity Week remain the same as regular schedules, the specific details for the C-Week Special Chapel Hour are listed in the 2026 Spring Term Chapel Hour notice [1].

Retrieved / selected chunks:
- [1] `0.940463` `portal_notice` 2026 Spring Term Chapel Hour (`DOC-000817::structural_fallback_v1::P0000`)
- [2] `0.994636` `ehandbook_page` ehandbook - Class Schedule (`DOC-000081::structural_fallback_v1::P0000`)
- [3] `0.984752` `ehandbook_page` ehandbook - 時間割 (`DOC-000217::structural_fallback_v1::P0000`)
- [4] `0.934872` `web_page` Academic Calendar｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001599::structural_fallback_v1::P0004`)
- [5] `0.960212` `pdf_document` PRINT (`PDF-200461efa59db966fe::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `5.918`
Answer mode: `remote_model`

Answer:

For the Spring 2026 term, you should check the following official resources for registration and advisor interview timing: * **Official Calendar:** Refer to the event titled "Registration for Spring Term and Interview with Advisors" (第1学期履修登録・アドヴァイジング面談) [5]. * **Registration Pages/Procedures:** Consult the "AY2026 Spring Term Registration – Course Registration Procedures" portal notices [1], [3], [4]. **Key Timing Details:** * **Advisor Interviews:** Scheduled for April 9 (Thu) 10:00–16:00 and April 10 (Fri) 9:00–15:30 [1], [2]. * **Online Input:** Scheduled for April 9 (Thu) 9:00–April 10 (Fri) 14:30 [1], [2]. * **Late Registration:** Available from April 11 (Sat) 9:00 to April 20 (Mon) 10:00 for those who missed the initial period [2], [3]. **Important Notes:** * Newly enrolled students should check the "Campus Pathfinder" in Moodle instead of these announcements [1], [2]. * Interviews are conducted face-to-face for all students; check your advisor's details on icuMAP in advance [1], [2]. * If you do not receive an email from your advisor by the evening of April 6, you must contact them directly to confirm your interview details [1], [2].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `12.296`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly detail the registration period and advisor interview timing for the Spring 2026 term (AY2026), directly answering the user's specific questions.

Answer:

For the Spring 2026 term, here are the official dates and procedures: **Advisor Interview Timing** * **Standard Period:** April 9 (Thu) 10:00–16:00 and April 10 (Fri) 9:00–15:30 [1][2]. * **Notification:** You should receive an email from your advisor with specific meeting details by the evening of April 6. If you have not heard by then, email your advisor to confirm [1][2]. * **Format:** Interviews are conducted face-to-face for all students (including One-Year-Regular, Kenkyusei, and graduate students). You must check your advisor's details on icuMAP in advance [1][2]. **Registration Period** * **Standard Period:** Online input runs from April 9 (Thu) 9:00 to April 10 (Fri) 14:30 [1][2]. * **Late Registration:** If you miss the standard period, you may register from April 11 (Sat) 9:00 to April 20 (Mon) 10:00 [2][3]. * *Note:* The office is closed on April 11 and April 18 [2][3]. * *Note:* Late registration requires a 3,000 yen fee, which must be paid before your interview [3]. **Where to Check** * **New Students (AY2026 Autumn Term):** Please check the "Campus Pathfinder" in Moodle instead of this announcement [1][2]. * **All Students:** Check your advisor's information on **icuMAP** to see who your advisor is and confirm the specific interview time [1][2].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `2.312`
Answer mode: `remote_model`

Answer:

No, the system cannot tell you exactly how many more credits you need to graduate early based solely on the information provided. While the ehandbook states that transfer credits are approved after course evaluation and that the number of transferrable credits is confirmed only after completing required procedures [2], it does not provide a tool or method for calculating the specific remaining credit count for an individual student. The documents explain the maximum limits for transfer (e. g. , 60 credits for transfer students) and eligibility criteria, but they do not offer a personalized graduation projection [1], [3], [5].

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `12.906`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages explain the rules and limits for transferring credits but do not provide a mechanism, calculator, or specific statement confirming that the system can calculate the exact remaining credits needed for an individual student to graduate early.

Answer:

Based on the provided evidence, the system does not offer a specific calculator or a direct statement confirming it can determine the exact number of remaining credits needed for an individual to graduate early. However, you can calculate this yourself using the following supported information: * **Total Requirement:** To obtain a Bachelor of Arts degree, you must earn at least **130 credits** [3]. * **Transferred Credits:** If you transferred credits before entering, the maximum number you can transfer depends on your prior study duration: * If you studied at another university for **more than one year** or have an associate degree, you may transfer up to **60 credits** [4]. * If you studied for **less than one year**, you may transfer up to **30 credits** [2]. * **Calculation:** Subtract your total transferred credits from the 130-credit requirement to find the remaining credits you need to earn at ICU. *Note: Transferred credits are counted only as Electives, General Education, or specific Health/Physical Education categories, not as Major courses initially [2, 4].*

Retrieved / selected chunks:
- [1] `0.985828` `ehandbook_page` ehandbook - Transferring Credits from Other Universities (`DOC-000058::structural_fallback_v1::P0000`)
- [2] `0.978915` `ehandbook_page` ehandbook - Students Who Have Studied at Other Universities and Entered ICU as Freshmen (`DOC-000060::structural_fallback_v1::P0000`)
- [3] `0.981275` `web_page` Graduation Requirements｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001623::structural_fallback_v1::P0000`)
- [4] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [5] `0.83868` `ehandbook_page` ehandbook - 転編入本科学生 (`DOC-000189::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `3.795`
Answer mode: `remote_model`

Answer:

履修登録に関する問い合わせ先は以下の通りです： * **問い合わせ先（メール）**: 教務グループ `ea-group@icu. ac. jp` [1][2][5] * **問い合わせ先（窓口）**: 所定の申請書を提出する場合は、**教務グループ窓口**で用紙を受け取り、提出します [3]。 * **公式ページ**: 詳細な日程や手順については、**ICU Portal**および**Registration Website**（履修登録結果の確認）で確認してください [1][2][3][4][5]。 ※申請書による履修（例：単位数制限超過など）を希望する場合は、登録日の1週間前から教務グループ窓口で用紙を受け取り、登録日～登録変更期間最終日10:00までに提出する必要があります [3]。

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `11.998`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 3 explicitly provides the email address for the Educational Affairs Group (教務グループ) regarding registration inquiries and mentions a 'Contact' page in the General Education Handbook, directly answering the user's request for contact information and related official pages.

Answer:

履修登録に関する問い合わせは、**教育事務グループ（教務グループ）**へ行ってください。 * **メールアドレス**: `ea-group@icu.ac.jp` [1], [5] * **公式ページ**: 履修登録の手順や日程については、e-handbook の「履修案内」ページをご確認ください [2]。

Retrieved / selected chunks:
- [1] `0.864996` `web_page` General Education Handbook AY2026 - Contact (`DOC-001356::structural_fallback_v1::P0000`)
- [2] `0.706899` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0002`)
- [3] `6.0` `course_record` Algorithms and Data Structures (`COURSE-2026-Spring-11332-ISC221::structural_fallback_v1::P0000`)
- [4] `5.6` `course_record` Algorithms and Data Structures (`COURSE-2026-Spring-11332-ISC221::structural_fallback_v1::P0001`)
- [5] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `3.132`
Answer mode: `remote_model`

Answer:

The provided evidence does not contain specific instructions on how to resolve discrepancies between a chatbot answer and an ICU Portal announcement regarding deadlines. However, the evidence does state the following general procedures for handling announcements: * You should check ICU Portal announcements once a day [3], [4]. * To search for announcements, use the "ALL" or "MORE" buttons in the announcement link box [3], [4]. * Emails regarding "Official Announcements" and "Important Announcements" are sent when the poster designates them [3], [4]. Since there is no explicit rule in the retrieved evidence for prioritizing one source over the other in case of conflicting deadline information, the retrieved ICU evidence is not sufficient to answer which source to trust or what specific next step to take in that scenario.

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `11.391`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages mention deadlines (e.g., September 5 for loans, March 31 for accounts) but do not contain any information regarding a discrepancy between the chatbot and the ICU Portal, nor do they provide guidance on which source to trust in such a case.

Answer:

The selected evidence does not contain information regarding discrepancies between the chatbot and the ICU Portal, nor does it provide guidance on which source to trust in such cases. However, the evidence does indicate that you should check the ICU Portal announcements once a day to stay updated [3][4]. For specific deadlines mentioned in the portal notices, such as the September 5 deadline for ICU Long-term Loans [1][2] or the March 31 deadline for account usage [5], the portal announcements are the source of that information.

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `3.178`
Answer mode: `remote_model`

Answer:

For the **Logic Programming** course in **Autumn 2026**: - **Instructor**: Tammo M. Reisewitz [2][3][5] - **Schedule**: Tuesdays, 5th and 6th periods (5/TU, 6/TU) [2][3] - **Location/Mode**: Face-to-face instruction (in-person) [2][5] - **Official Course Information**: You can check the official syllabus and details at: https://campus. icu. ac. jp/icumap/ehb/PreviewSyllabus. aspx? year=2026&term=2&regno=21219 [2][3][4][5] Note: Access to some course details may require an ICU Net ID [3].

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-9B / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `10.022`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly provide the instructor's name (REISEWITZ, TAMMO M.), the schedule (5/TU, 6/TU), and the location/platform for official information (Moodle, with a note about ICU Net ID access).

Answer:

For the **Logic Programming** course in **Autumn 2026**: - **Instructor**: REISEWITZ, TAMMO M. [1] - **Schedule**: Tuesdays, 5th and 6th periods (5/TU, 6/TU) [1] - **Official Course Information**: Please check the course details on **Moodle**, accessible with your **ICU Net ID** [1]. Let me know if you need help accessing Moodle or have other questions!

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [3] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)
- [4] `0.945197` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0006`)
- [5] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `3.651`
Answer mode: `remote_model`

Answer:

The grade evaluation and required work for **S2: Statistical Information Literacy** vary by term and instructor: * **Spring 2026 (Instructor: KANEKO, Takuya):** * **Grading:** Exam (20%), Report (40%), Daily quiz (20%), Class participation (20%) [1]. * **Work:** The syllabus covers topics including probability models, conditional probability, random variables, distributions, and sample data analysis [5]. * **Autumn 2026 (Instructor: MARSZALEC, Daniel Janusz):** * **Grading:** Active participation in classes (15%), Application workshops (35%), End of term data analysis project (50%) [2]. * **Work:** The course focuses on learning basic data analysis skills for social sciences, covering statistics rudiments, sampling methods, and data processing using computers [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-9B / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `14.007`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly list the grading policies (exam, report, quizzes, participation) for the Spring term and (active participation, workshops, end-of-term project) for the Autumn term, directly answering how grades are evaluated. Passages also describe the course content (data analysis, statistics, sampling) which constitutes the required work.

Answer:

The grade evaluation and required work for **S2: Statistical Information Literacy** depend on the term you are enrolled in, as the policies differ between the Spring and Autumn semesters: **Spring Term (Instructor: KANEKO, Takuya)** * **Grading Breakdown:** * Exam: 20% * Report: 40% * Daily quiz: 20% * Class participation: 20% [1] * **Required Work & Content:** * The course covers the rudiments of statistics, sampling methods, and data processing methods using computers. * Specific topics include probability models (average, variance), conditional probability, random variables, distribution characteristics, and sample data analysis. * You will also study statistical tricks and how measurement periods affect data interpretation [3][5]. **Autumn Term (Instructor: MARSZALEC, Daniel Janusz)** * **Grading Breakdown:** * Active participation in classes: 15% * Application workshops: 35% * End-of-term data analysis project: 50% [2] * **Required Work & Content:** * The course focuses on learning basic data analysis skills for social sciences. * Content includes the mathematical foundations of probability and randomness, sampling methods, and data processing methods. * Students are expected to use computers during the course to analyze how real-world data is generated and to distinguish trustworthy information from noise [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.166134` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `3.346`
Answer mode: `remote_model`

Answer:

MIURA 先生は以下の日本語の授業を担当しています： * **特別日本語教育 漢字 1**（Special Japanese Kanji 1） * 担当：MIURA, Ayano * レベル：特別教育コース（詳細な CEFR レベルは記載されていません）[2] * **日本語 J2** * 担当：MIURA, Ayano（秋学期・冬学期は KOH, Tomoko と共同担当） * レベル：CEFR A2. 1（話しことば、書きことば）[3][4][5] ※「MIURA, Ayumi」は「中英語（Middle English）」の担当であり、日本語の授業ではありません [1]。

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `13.398`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly list MIURA, Ayano as the instructor for multiple Japanese courses (J2, Special Japanese Kanji 1, Vocabulary and Kanji for Intermediate Learners of Japanese 2) and specify the CEFR levels (e.g., A2.1 for J2) and course titles.

Answer:

MIURA 先生は以下の日本語の授業を担当しています： * **日本語 J2** (CEFR レベル A2.1)：話しことばと書きことばの目標レベルです。[1][2][3] * **Vocabulary and Kanji for Intermediate Learners of Japanese 2**：中級者向けの語彙と漢字の授業です。[4] * **Special Japanese Kanji 1**：母語話者向けの特別漢字授業で、約 600 字の読み書きを学びます。[5]

Retrieved / selected chunks:
- [1] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [2] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [4] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)
- [5] `0.205934` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `5.285`
Answer mode: `remote_model`

Answer:

履修登録が完了しているか確認するには、以下の手順と確認項目に従ってください。 1. **Registration Website の「Registration Result」画面を確認する** - 登録操作を行った後、必ず「Registration Result」ページにアクセスし、希望の科目が登録されているか確認してください [1][2][4]。 - 登録や変更を行ったにもかかわらず結果が反映されていない場合は、「SAVE」ボタンを押すのを忘れた可能性があるので、操作手順を再確認してください [5]。 2. **アドヴァイザーによるオンライン承認を確認する** - 科目登録は、アドヴァイザーとの面談およびオンライン承認が完了するまで完了していません [1][2][3][4]。 - 「Registration Result」でアドヴァイザー承認が下りているか、必ず自身で確認してください [4]。 3. **学生本人の責任で確認を行う** - 登録確認は学生本人の責任であり、定められた期間を過ぎると申請が受理されません [1][2][4]。 - 登録変更後にも、必ず登録結果を再確認してください [1][2]。 これらの手順を踏んで、Registration Website の「Registration Result」画面とアドヴァイザー承認状況を確認することで、登録が完了しているか判断できます。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `11.331`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that registration is not complete until the advisor grants online approval and instruct the user to check the 'Registration Result' on the Registration Website to confirm completion.

Answer:

履修登録サイトでの科目選択だけでは登録は完了していません。以下の手順で確認してください。 1. **アドヴァイザーによるオンライン承認を確認する** 履修登録手続きは、アドヴァイザーとの面談後、**アドヴァイザーにオンライン承認されるまで完了していません** [1][2][4]。 2. **Registration Website の「Registration Result」で確認する** 登録当日または Late Registration 後、必ず Registration Website の**「Registration Result」**画面にアクセスし、以下の 2 点が反映されているか確認してください。 * 登録結果（科目が入力されていること） * アドヴァイザーによるオンライン承認が下りていること [1][2][4] 操作ミス（例：「SAVE」ボタンを押していない）で反映されていない場合があるため、必ず画面を確認してください [5]。 3. **登録変更後も確認する** 登録変更を行った場合も、同様に「Registration Result」で結果を確認してください [1][2]。 ※登録確認は学生本人の責任であり、定められた期間を過ぎた申請は受理されません [1][2]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `5.425`
Answer mode: `remote_model`

Answer:

To find official textbook purchase information for Spring 2026, you should check the **Online Textbook Purchase Guide** and the **List of Textbooks** provided in the portal notices [3][4]. **Where to check:** * **Purchase Guide:** https://drive. google. com/file/d/14N98Gmiv98kUA2vcQwoiCL1MhVlUm4DN/view? usp=drive_link [3] * **List of Textbooks:** https://docs. com/spreadsheets/d/1zQdbj_4R6DK3h9nUM3fquDaB0uzQAstx/edit? usp=sharing&ouid=116249504418958879193&rtpof=true&sd=true [3] * **Contact for inquiries:** OnSMaRT desk (MARUZEN-YUSHODO Co. , Ltd. ) at smarts@maruzen. co. jp [3] **Details the chatbot cannot know:** The chatbot does not have access to the specific contents of the guidance documents or the spreadsheet. Therefore, it cannot tell you: * The specific pickup dates, times, and locations for on-campus collection [3]. * The exact titles and authors of the required textbooks for your specific courses [3]. * The specific URL or 2D code required to initiate your purchase [3].

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `9.938`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 directly provide the official textbook purchase information for Spring 2026, including dates, discount details, pickup methods, and the specific guidance document URL where the user should check for details. They also implicitly answer what the chatbot does not know by pointing to the external guidance document for specific logistics.

Answer:

To purchase textbooks for Spring 2026, please check the official **Online Textbook Purchase Guide** at the following URL: https://drive.google.com/file/d/14N98Gmiv98kUA2vcQwoiCL1MhVlUm4DN/view?usp=drive_link [1][2] **Key details you can find there include:** * **Sales Period:** Monday, April 6 to Monday, April 20. * **Purchase Method:** Use a smartphone or device via the 2D code or URL provided in the guidance document. * **Pickup:** Textbooks can be picked up on-campus; specific dates, times, and locations are in the guidance document. * **Pricing:** A 10% discount off the list price (excluding digital textbooks). * **Shipping:** Fees apply for home delivery. **What the chatbot does not know:** The chatbot cannot provide specific pickup dates, times, or locations, nor can it confirm the exact 2D code or URL for purchase without you accessing the guidance document. For these specific logistics, you must refer to the document linked above [1][2].

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [4] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `1.541`
Answer mode: `remote_model`

Answer:

The provided evidence does not contain information about mandatory courses required after coming to ICU. The documents listed are individual course syllabi for specific terms (Autumn 2026 and Winter 2026) and do not outline the general curriculum or mandatory requirements for new students. Therefore, the retrieved ICU evidence is not sufficient to answer your question.

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `15.617`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly list the mandatory courses required for graduation: Health Science (保健体育), Physical Education exercises (PEエクササイズ), and the mandatory language program (ELA or JLP) based on proficiency. They also mention the general education structure and the graduation research thesis.

Answer:

To graduate from ICU, you must complete the following mandatory courses: * **Health Science (保健体育):** You must take one lecture course, "Health Science" (1 unit), and three practical exercise courses, "PE Exercise I, II, and III" (1 unit total, 1/3 unit each) [2]. * **Mandatory Language Program:** Depending on your language proficiency, you must complete either the "English for Liberal Arts Program" (ELA) or the "Japanese Language Program" (JLP) [1], [4]. * **General Education Courses:** You must complete a total of 18 units across multiple domains, including the required course "Introduction to Christianity," humanities, social sciences, natural sciences, and Liberal Arts Seminars (or 12+ units if taking Japanese courses) [5]. * **Graduation Research Thesis:** In your final year, you must conduct a graduation research project and compile it into a thesis over the course of one year [3]. *Note: Specific requirements for language courses and total units may vary slightly based on your admission year and language proficiency level [1].*

Retrieved / selected chunks:
- [1] `0.994488` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [2] `0.993487` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.98858` `web_page` 入学から卒業までの流れ｜国際基督教大学（ICU） (`DOC-001728::structural_fallback_v1::P0000`)
- [4] `0.961389` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [5] `0.937897` `web_page` 一般教育科目｜国際基督教大学（ICU） (`DOC-001690::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `1.446`
Answer mode: `remote_model`

Answer:

The provided evidence does not contain information about mandatory courses required after entering ICU. The documents listed are syllabi for specific courses (e. g. , Global Governance, Introduction to Business Administration) but do not define the general curriculum requirements or mandatory courses for new students. Therefore, the retrieved ICU evidence is not sufficient to answer your question.

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `10.831`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 8 explicitly states that 'Introduction to Christianity' is the only course mandatory for all ICU students, directly answering the user's question about a mandatory course after entering.

Answer:

The only mandatory course required for all ICU students is **"Introduction to Christianity"** (キリスト教概論). This is the sole course designated as mandatory for every student, offered in both Japanese and English [2].

Retrieved / selected chunks:
- [1] `0.985043` `web_page` 入学から卒業までの流れ｜国際基督教大学（ICU） (`DOC-001728::structural_fallback_v1::P0000`)
- [2] `0.975012` `web_page` 一般教育科目｜国際基督教大学（ICU） (`DOC-001690::structural_fallback_v1::P0000`)
- [3] `0.964589` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.959383` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [5] `0.953188` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-9B / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `6.127`
Answer mode: `remote_model`

Answer:

ICU に入学した後、必ず履修しなければならない科目は以下の通りです： * **保健体育プログラム**：卒業要件として、「健康科学（Health Science）」（1 科目・1 単位）と実技科目「PE エクササイズⅠ・Ⅱ・Ⅲ」を履修する必要があります [1]。 * **必修語学科目**：入学選抜の種類によって異なります。 * 一般選抜や総合型選抜（外国教育制度利用、EJU 利用など）の場合、「リベラルアーツ英語プログラム（ELA）」が必修です [5]。 * 総合型選抜（English Language Based Admissions）の場合、「日本語教育プログラム（JLP）」が必修です [5]。 * 出願時に特定の英語スコア（IELTS6. 5 以上、TOEFL iBT79 以上）を提出した場合は、ELA の必修科目として JLP を選択できる場合があります [4]。 これらの詳細なカリキュラムや要件については、**「保健体育」の公式ページ** [1] または**「入試」の公式ページ** [5] を確認してください。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-9B / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `10.186`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly lists the mandatory subjects (Health Science and PE exercises) required for graduation. Passage 5 and Passage 6 identify the mandatory language programs (ELA or JLP) based on admission type. Passage 2 suggests the official website for curriculum details.

Answer:

ICU に入学した後、必ず履修しなければならない科目は以下の通りです。 * **保健体育**: 「健康科学（Health Science）」と「PE エクササイズⅠ・Ⅱ・Ⅲ」です [1]。 * **語学プログラム**: 入学選抜の種類によって異なります。 * 一般選抜や総合型選抜（帰国生・EJU 利用など）の場合、「リベラルアーツ英語プログラム（ELA）」が必修です [5]。 * 総合型選抜（English Language Based Admissions）の場合、「日本語教育プログラム（JLP）」が必修です [5]。 * 一部の選抜では、英語力に応じて JLP を選択できる場合があります [5]。 詳細なカリキュラムについては、ICU の公式ウェブサイトを確認することをお勧めします [2]。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-9B / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `4.587`
Answer mode: `remote_model`

Answer:

进入 ICU 后，作为毕业必修要求，你必须修读以下课程： 1. **健康科学 (Health Science)**：保健体育程序中的讲座科目，计 1 科目、1 单位 [1][2]。 2. **体育实技 (Physical Education Exercise)**：包括 **Exercise I、II 和 III**，共 3 种目，总计 1 单位（每种目各 1/3 单位），包含实际练习 [1][2]。 关于官方页面，你可以访问以下链接获取详细信息： * 英文页面：https://www. icu. ac. jp/en/academics/undergraduate/healtheducation [1] * 日文页面：https://www. jp/academics/undergraduate/healtheducation [2]

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-9B / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `8.078`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 explicitly list the required courses (Health Science and PE Exercise I, II, III) for graduation and identify the 'Physical Education' page as the source of this information.

Answer:

进入 ICU 后，作为毕业必修要求，你必须修读以下课程： * **健康科学 (Health Science)**：1 门课，1 学分。 * **体育实技 (Physical Education Exercise)**：包括 **Exercise I、II 和 III**，共 3 门课，总计 1 学分（每门课 1/3 学分）。 你可以查看 **保健体育 (Physical Education)** 官方页面获取详细信息 [1][2]。 *注：如果你计划考取日本教师执照并从事中学或高中教学，还需额外修读“体育理论 (Physical Education)"作为教职课程必修科目 [2]。*

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-9B / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.513`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-9B / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `10.028`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 2, 3, and 6 explicitly state ICU's policy on using generative AI for academic submissions, noting that using AI-generated work as one's own is prohibited due to plagiarism and copyright concerns, while also mentioning the need to acknowledge sources.

Answer:

国際基督教大学（ICU）の方針では、生成系 AI（チャット GPT など）で作成したものを、成績評価のための提出物（卒論など）として提出し、「自分自身が作成したかのように振る舞うこと」は、学問的倫理基準における「剽窃（他人の作品・考えを自分のものであると偽ること）」とみなされます [2][3][4]。 ただし、ICU は生成系 AI の使用を全面的に否定するものではありません。AI を使う場合、自分自身で考え、調査研究したものでない情報の出典は明らかにし、正しく引用することが求められます [2][3][4]。 したがって、AI を使って作成した文章をそのまま提出することは禁止されていますが、適切に出典を明記し、AI の出力をどのように活用したかを誠実に説明できる場合については、個別の判断が必要となる可能性があります。

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)
- [3] `0.000566` `web_page` 教育の特徴：大学院｜国際基督教大学（ICU） (`DOC-001744::structural_fallback_v1::P0008`)
- [4] `0.000469` `web_page` Undergraduate｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001646::structural_fallback_v1::P0008`)
- [5] `0.000451` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-9B / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.22`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-9B / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `9.029`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 6, 7, and 8 explicitly state that students must abide by ICU Generative AI policies and prohibit unauthorized use of generative AI in the senior thesis, directly answering the user's question.

Answer:

No, you cannot use ChatGPT for your senior thesis at ICU without authorization. According to ICU policy, the unauthorized and unspecified use of generative AI in any stage of writing your senior thesis constitutes a breach of academic integrity. Presenting work produced by generative AI as your own results in an E grade [1]. You must abide by the specific ICU Generative AI policies regarding your thesis [1].

Retrieved / selected chunks:
- [1] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [3] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [4] `0.440951` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0006`)

### Qwen/Qwen3.5-9B / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `4.154`
Answer mode: `remote_model`

Answer:

根据提供的证据，**不可以**在 ICU 的毕业论文中未经授权地使用 ChatGPT。 证据 [2] 明确指出，学生必须遵守 ICU 的生成式人工智能政策（ICU Generative AI policies）。 在毕业论文写作过程中的任何阶段，未经授权且未指定地使用生成式 AI，或将包括生成式 AI 在内的他人作品作为完全由自己创作的作品呈现，均构成违反 ICU 学术诚信政策，并将被评定为 E 级（E grade）[2]。 虽然证据 [3] 提到某些课程遵循 ICU 关于学生使用生成式 AI 的观点，但并未提供该观点的具体细节或豁免条款，因此不能据此认为可以使用 ChatGPT。

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `8.264`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 3 explicitly states that students must abide by ICU Generative AI policies and prohibits unauthorized/unspecified use of generative AI in the senior thesis, directly addressing the user's question about using ChatGPT.

Answer:

不可以。根据 ICU 的学术诚信规定，在毕业论文写作过程中未经批准或未明确说明地使用生成式 AI（如 ChatGPT）属于违规行为。若将他人（包括生成式 AI）产生的成果完全当作自己的作品提交，将被判定为违反学术诚信政策，并直接给予 E 等级 [1]。 你必须在论文中明确说明使用了生成式 AI，并遵守 ICU 的生成式 AI 相关政策 [1]。

Retrieved / selected chunks:
- [1] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.008156` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `3.31`
Answer mode: `remote_model`

Answer:

鏑木先生（KABURAGI, Takashi）が担当している授業は以下の通りです。 * **ロボット工学**（Robotics） * 科目番号：ISC342 * 履修期間：2026 年冬学期 [1][4] * **オペレーティングシステム**（Operating Systems） * 科目番号：ISC224 * 履修期間：2026 年春学期 [2] * **量子情報科学**（Quantum Information Science） * 科目番号：QNMS502 * 履修期間：2026 年冬学期（共同担当） [5]

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `10.166`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly list courses taught by 'KABURAGI, Takashi' (鏑木貴志), including 'Robotics' (ISC342) and 'Operating Systems' (ISC224).

Answer:

鏑木貴志先生（KABURAGI, Takashi）が担当している授業は以下の通りです。 * **Robotics**（ISC342）：2026 年冬学期の担当です [1][2]。 * **Operating Systems**（ISC224）：2026 年春学期の担当です [3]。 * **Quantum Information Science**（QNMS502）：2026 年冬学期の担当です [5]。 ※「Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period」は、担当教員が高橋和也氏（TAKAHASHI, Kazuya）であるため、鏑木先生は担当していません [4]。

Retrieved / selected chunks:
- [1] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [2] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [3] `0.000869` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0009`)
- [4] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `2.999`
Answer mode: `remote_model`

Answer:

根据检索到的 ICU 课程资料，鏑木先生（KABURAGI, Takashi）教授以下课程： * **Robotics**（机器人工学）：2026 年冬季学期开设 [1]。 * **Operating Systems**（操作系统）：2026 年春季学期开设 [2]。

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `11.245`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved evidence explicitly lists courses taught by 'KABURAGI, Takashi' (鏑木 崇史), which matches the user's query for 'Katsuragi' (likely a romanization variation or typo in the query). Passages 4 and 5 provide the specific course titles.

Answer:

根据检索到的 ICU 课程资料，鏑木崇史先生（KABURAGI, Takashi）教授以下课程： * **科学数值方法** (Numerical Methods in Science) - 2026 年春季学期开设 [1] * **机器人学** (Robotics) - 2026 年冬季学期开设 [2]

Retrieved / selected chunks:
- [1] `0.071721` `course_record` Numerical Methods in Science (`COURSE-2026-Spring-11210-ISC314::structural_fallback_v1::P0003`)
- [2] `0.066934` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0003`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-9B / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `2.285`
Answer mode: `remote_model`

Answer:

To check if your registration is complete, you must verify two things on the **Registration Website**: 1. **Registration Results:** Confirm your registration status in the "Registration Result" section. 2. **Advisor Approval:** Ensure you have received **online approval from your advisor**. Registration is **not considered complete** until you have met with your advisor and received this online approval [1][2][3]. You should perform this check the day after the registration deadline or after Late Registration, and again if you make any changes to your courses [1][2][4].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-9B / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `8.852`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students must check the 'Registration Result' on the Registration Website to confirm if their registration and advisor approval are complete.

Answer:

To check if your registration is complete, you must log in to the **Registration Website** and verify the **"Registration Result."** You need to confirm two specific items in this section: 1. That your course registration is complete. 2. That you have received **online approval from your advisor**. Registration is not considered complete until you see your advisor and receive this online approval. You should perform this check the day after the registration deadline or after Late Registration, and again if you make any course changes. Please note that confirming your registration is your personal responsibility [1][2][3][4][5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `49.194`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding the decision-making process and official information for the JLP level: **Decision Process** The level of the Japanese track is determined by the result of a placement test administered to students. The placement is based on the student's Japanese proficiency level, which is assessed through the placement test. * **Placement Test:** The placement test is the primary method used to determine the appropriate course level. * **Placement Test Results:** Students are placed in the appropriate track based on their test results. * **Course Levels:** The placement test results determine the specific course level (e. g. , J1, J2, J3, etc. ). **Official Information** Students should check the official information from the following sources: 1. **ICU Website:** The primary source for program details and course offerings is the ICU website (e. , `https://www. icu. ac. jp/academics/undergraduate/jlp/`). 2. **JLP Website:** For specific course offerings and details, students can refer to the JLP website (e. , `https://sites. google. com/info. jp/jlp/`). 3.

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-0.8B / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `3.83`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states that students are placed in the appropriate course based on the result of the placement test and that there is a right course for each and every one of you. Passage [2] and [4] provide the official CEFR framework and official ICU website links for checking information.

Answer:

Based on the provided evidence, the level of Japanese proficiency is determined by the result of the placement test, which is the primary factor for assigning students to the appropriate course. [1] explicitly states that students are placed in the appropriate course based on the result of the placement test. [2] and [4] provide the official CEFR framework and ICU website links for checking information. [3] notes that additional evaluation of Japanese proficiency will also be conducted during the first class sessions, which may subject course level placement to change. [5] confirms that ICU admits students of all levels, including those with no prior Japanese experience.

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `3.399`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, you can still register or change your courses, but you must follow specific procedural steps to ensure the change is valid. **1. You must complete the registration change procedure before the registration change period ends. ** Evidence [3] explicitly states: "Those who do not complete the registration during the designated period must take a leave of absence or withdraw from the university. " Evidence [4] reiterates this: "After the registration change period ended, no registrations will be accepted for any reason. " **2. You must click the "SAVE" button to complete the registration change. ** Evidence [3] and Evidence [4] both state: "When you make the registration change, please be sure to click the 'SAVE' button to complete the procedure. " Evidence [4] further clarifies: "Even though you input the data, process is not completed unless this button is clicked. " **3. You must confirm the courses you wish to add or cancel via the Registration Website. ** Evidence [3] and Evidence [4] state: "Please confirm that the courses you wish to add and/or cancel is reflected correctly via Registration Website 'Registration Results'.

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `4.706`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that registration is not possible on the registration day, require completing registration during the designated change period, and that those who do not complete the registration must take a leave of absence or withdraw. This directly answers the user's question about the procedure and consequences.

Answer:

You can still register or change your courses, but you must complete the registration during the designated change period. If you miss the registration day, you must take a leave of absence or withdraw from the university. [1] The course record indicates that registration is not possible on the registration day. [2] The handbook explicitly states that registration is not acceptable after the registration change period, and those who do not complete the registration during the designated period must take a leave of absence or withdraw. [3] The handbook reiterates that all students are required to register at least one course on the registration day, and late registration is only an option if it is not possible. [4] The handbook confirms that after the registration change period, the registration is not acceptable for any reason, and students must complete the regular registration procedures on the registration day. [5] The handbook advises that after the registration change period, the registration is not acceptable for any reason, and students must complete the regular registration procedures on the registration day.

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [3] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [4] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [5] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `3.909`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here are the specific rules and deadlines you should check before making a withdrawal decision: **1. Deadline for Submitting an Application** * **Spring Term:** March 31 * **Autumn Term:** August 31 * **Winter Term:** November 30 * **Note:** The deadline is the previous Friday in case the date falls on a Saturday or Sunday or a national holiday. **2. Approval Requirements** * **Registration Withdrawal:** You must submit the application to the Educational Affairs Group together with documents explaining the reasonable reasons (e. g. , a medical certificate). * **Readmission:** If you wish to re-admit, you must have an interview with the Dean of CLA after submitting the form. **3. Consequences of Non-Compliance** * **No Retroactive Grades:** If you do not complete the required procedures for dropping the course, you will receive a failure (F) grade. * **Course Registration:** If you cannot continue your study for an ongoing term due to illness or unavoidable reasons, you may be given permission to withdraw all course registration for that term. * **Credit Recognition:** Credits earned during a period of withdrawal are not recognized. **4.

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-0.8B / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `5.792`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly states that registration change is not approved after the Registration Change period is finished, and Passage 2 confirms that students must complete registration procedures on Registration day or take a leave of absence. These directly address the rules and deadlines for withdrawing from a course.

Answer:

To withdraw from a course after seeing your workload, you must first check the following rules and deadlines: 1. **Registration Change Period:** You cannot change your registration after the Registration Change period is finished. If you remain absent without completing the necessary procedures for dropping the course, you will receive a failure (F) grade. If you cannot continue your study due to illness or unavoidable reasons, you may apply for **Registration Withdrawal** [1]. 2. **Withdrawal Deadline:** You must submit an application for withdrawal by the previous Friday in case the date stipulated falls on a Saturday or Sunday or a national holiday [2]. 3. **Course Specifics:** * **Spring Term:** Deadline is March 31 [2]. * **Autumn Term:** Deadline is August 31 [2]. * **Winter Term:** Deadline is November 30 [2]. * **Note:** If you withdraw for more than three years, you may be permitted to apply for readmission [4]. 4. **Documentation:** You must submit the form to the Educational Affairs Group along with an ID Card and documents explaining the reason for withdrawal, such as a medical certificate [3]. 5. **Grade Impact:** If approved, no grades will be given to the course registered for the term. Instead, "W" will be recorded to all courses registered for the term, and those not included in the GPA calculation will be excluded [3]. **Important Note:** Even if you want to register only specific courses, you must complete the regular registration procedures on Registration day [2].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006513` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `1.344`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the answer is: You should look at the **Study Abroad (Summer Abroad Programs)** section of the ehandbook to confirm whether courses will count toward ICU requirements. * **Evidence:** [1] explicitly states that students who participated in the summer programs approved by ICU and completed coursework at other universities may transfer credits, if approved to be counted towards ICU's graduation requirements. It also specifies the maximum number of transfer credits that can be accepted (up to 40 credits, with a maximum of 60 credits for fresh students).

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-0.8B / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `4.775`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly states that students who completed coursework at other universities may transfer credits if approved to count toward ICU's graduation requirements. Passage 3 confirms that credits earned at partner institutions are recognized as part of the credit unit requirements for graduation. These passages directly support the user's question about where to look to confirm course credit counts.

Answer:

To confirm whether courses or credits will count toward your ICU requirements, you should look at the **ICU Study Abroad (Summer Abroad Programs)** handbook, which explicitly states that students who completed coursework at other universities may transfer credits if approved to count toward ICU's graduation requirements [1]. Additionally, the **Study Abroad Program Brochure** confirms that credits earned at partner institutions are recognized as part of the credit unit requirements for graduation [3]. For specific details on the transfer limits (e.g., a maximum of 40 credits, or 60 credits for fresh-mint students), please refer to the **University/Community Partners of ICU** page regarding the Sophia University Reciprocal Credit System [4] or the **University/Community Partners of ICU** page regarding the University of Tsukuba [5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `3.058`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding senior thesis deadlines: **1. Where to find the official schedule:** You can find the official schedule by accessing the **ICU Portal** via the "Senior Thesis" course record. The evidence indicates that the schedule is available on the ICU Portal (specifically the "Course No: STH391" records). **2. What kind of thesis-related deadlines to expect:** You should expect to check the following specific deadlines: * **Submission Deadline:** The evidence explicitly states that the thesis must be submitted before the prescribed deadline. It further clarifies that no thesis will be accepted after 4:00 p. m. on the deadline date under any circumstances. * **Relief Application Deadline:** There is a separate deadline for the Relief Application, which is scheduled for **October 10, 2025**, from 10:00 AM to 4:00 PM. * **Graduation Deadline:** The evidence notes that if you cannot meet the submission deadline, it will be impossible to graduate as expected. **Summary:** The official schedule is found on the **ICU Portal** under the **Senior Thesis** course record.

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `3.051`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states the submission deadline and the requirement to submit the thesis before the prescribed deadline, directly addressing the user's concern about deadlines.

Answer:

You can find the official schedule for the Senior Thesis submission deadline on the ICU Portal, specifically in the **Senior Thesis Submission Deadline** section of the eHANDBOOK. According to the eHANDBOOK, the submission must be submitted before the prescribed deadline, and no thesis will be accepted after that time. The specific deadline is updated on the ICU Portal, but the core requirement is to submit the thesis before the deadline to avoid rejection. [1]

Retrieved / selected chunks:
- [1] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [2] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [3] `0.09947` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [4] `0.09947` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)
- [5] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `4.35`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the procedure to check before planning your courses again: **1. Verify Leave Status and Documentation** Before returning to the ICU, you must confirm the validity of your leave of absence. * **Evidence:** [3] "If you have an infectious disease. Please consult with your faculty if you can use hospital receipts, or prescription record books, etc. , as proof. " * **Note:** The evidence states that the Healthcare Office does not issue certificates/ slips relating to absences, early departures, or late arrivals. You must obtain official proof (e. g. , hospital receipts, prescription records) from the Faculty Office to validate your absence status. **2. Check for Missing Classes** If you are returning due to a reason other than an infectious disease (e. , injury, illness), you must also check for any missing classes. * **Evidence:** [3] "The same goes for missing classes for reasons other than infectious diseases, such as diseases or injury. " **3. Consult the Healthcare Office for Absence Records** You should consult the Healthcare Office regarding your specific absence status.

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-0.8B / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `3.917`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [3] explicitly states that if a student has an infectious disease (like influenza or COVID-19), they should consult the Healthcare Office to check procedures and obtain proof for sick leave.

Answer:

If you take a leave of absence and later return to ICU, you should consult the **Healthcare Office** to check procedures and obtain proof for sick leave. [1] The Healthcare Office explicitly states that if a student has an infectious disease (like influenza or COVID-19), they should consult the office to check procedures and obtain proof for sick leave. [2] The Healthcare Office does not issue certificates or slips relating to absences, early departures, or late arrivals. Should a member of teaching staff instruct you to obtain documentation from the Healthcare Office, please consult them again and provide this page's link.

Retrieved / selected chunks:
- [1] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [2] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [3] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `3.666`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, there is no explicit rule, permission, deadline, or procedure regarding counseling or student support at the International Christian University (ICU). The evidence contains: * **Course Record [1] and [2]:** Describes the course "Counseling" (Course No: PSY272) offered in Winter 2026. It outlines the course description, instructor, and mode of instruction. However, it does not contain specific information about counseling procedures, support services, or guidelines. * **Web Page [3]:** Provides information about the "ICU Health Care Office for Students" and lists various mental health counseling topics (e. g. , loss of a loved one, addiction support, sex health). It mentions that students can consult based on the topic and that counselors are available to the public. However, it does not state that there is an official counseling center or a specific procedure for seeking support. * **Web Page [4]:** Describes the Health Care Office and mentions that the Health Care Office supports the health of students, faculty, and staff. It also mentions the Learning Accessibility Services (LAS) office for students with disabilities.

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `5.335`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [5] directly addresses the user's concern about privacy and offers specific steps for seeking counseling or student support at ICU, including how to contact the counseling center and how to handle harassment.

Answer:

You can find official information about counseling and student support at the **ICU Health Care Office for Students** (Mental Health) and the **Counseling, Human Rights Consultation and Health Services** page. [1] The **ICU Health Care Office for Students** provides mental health counseling, general mental health counseling, and addiction support, with a 24-hour hotline and free phone service available. [2] The **Counseling, Human Rights Consultation and Health Services** page details the Health Care Office's responsibilities, including daily first aid and health consultation, twice-weekly physician consultations, and annual check-ups for students, faculty, and staff. [3] The **Counseling, Human Rights Consultation and Health Services** page also outlines the university's policy for supporting students with disabilities and promoting universal learning environments. [4] The **Counseling, Human Rights Consultation and Health Services** page explicitly states that the Health Care Office is responsible for supporting the health of students, faculty, and staff and organizes annual check-ups. [5] The **Counseling, Human Rights Consultation and Health Services** page lists the specific counseling services available, including counseling about friends and career paths, counseling about the loss of a loved one, sex health consultation, and addiction support.

Retrieved / selected chunks:
- [1] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [2] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `2.03`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding exam accommodations: **Where to start:** You should start by consulting with your **course instructor** and the **Learning Accessibility Services** (学修アクセシビリティ支援室). **What kind of support page to look for:** You should look for the **"Reasonable Accommodations"** section within the **Learning Accessibility Services** page. This page details the types of accommodations available, such as extended exam time limits and arranging for a separate room to take an exam. **Support Policy:** ICU provides reasonable accommodations in accordance with the "Basic Policy for Supporting Students with Disabilities" [1], [2], [3], [4], [5]. If you have a disability or chronic illness and need some kind of reasonable accommodations for your course, please consult with your course instructor and the Learning Accessibility Services [1], [2], [3], [4], [5].

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `5.094`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [2] explicitly states that students first meet with a Learning Accessibility Services (LAS) staff member to discuss their needs, and [3] and [5] confirm that reasonable accommodations are provided in accordance with the 'Basic Policy for Supporting Students with Disabilities' and that requests are made to the LAS office.

Answer:

If you need exam accommodations due to a disability or health condition, you should first meet with a Learning Accessibility Services (LAS) staff member to discuss your needs [1]. The LAS office plays an intermediary role between a student and an instructor to request or arrange any accommodations necessary for exams and assignments [2]. The types of accommodations available include extended exam time limits and arranging for a separate room to take an exam [2]. If a student has trouble writing or typing, they can use scribes or typing services for class reports, exams [4]. The LAS office provides real-time captioning, which is an instant translation of the spoken word into text [2]. If it is not possible for a student to use course textbooks/materials in their usual form due to, for example, a visual impairment, the LAS office will convert materials into an accessible format [4]. Please contact the LAS office for more information specific to your needs [2].

Retrieved / selected chunks:
- [1] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [2] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [3] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [4] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [5] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `1.976`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding your IT account after graduating from undergraduate school: **Conclusion:** You will need to create a new account for your ICU graduate school using an email address you can use after graduation, as your current account will expire on March 31, 2026. **Evidence:** * [1] Explicitly states: "If you still need to exchange emails after graduation, We recommend that you use an email address that you can use after graduation, not a @icu. ac. jp email address. Email forwarding also stops. " * [4] Provides instructions on how to create an app password for a new account: "When the box below appears, enter 'Mail' or something similar, then click 'Create' in the bottom right. A 16-digit app password will be displayed; please copy and save it. "

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-0.8B / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `6.232`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states that the account will expire on March 31, 2026, and provides instructions on how to change the password and manage apps after graduation. Passage [4] details the process for creating and managing app passwords, which is directly relevant to the user's question about IT services after graduation.

Answer:

You will need to create a new account and manage your IT services after graduation. [1] Your account (ICU Net ID, ICU Portal, Mail, Google Workspace, etc.) will expire on March 31, 2026. If you still need to exchange emails after graduation, we recommend that you use an email address that you can use after graduation, not a @icu.ac.jp email address. Email forwarding also stops. Please backup your necessary files (Gmail and Google Drive's Files) before graduation. When your account is deleted: You can't log in to Google (@icu.ac.jp) You can't see the announcement of Joining ceremony You can't see the information of Graduate school Files created when you were at [2] You can create and manage app passwords under the "Create and use app passwords" section. When the box below appears, enter "Mail" or something similar, then click "Create" in the bottom right. A 16-digit app password will be displayed; please copy and save it. ③ Export the e-mail data of @icu.ac.jp If the number of emails you want to forward is small, please forward one by one or you can download the e-mail data from the following "Mail". https://takeout.google.com/settings/takeout?pli=1 Files in Google Drive Please download all files in your Google Drive that you needed to your PC. To Undergraduate students who are going to ICU graduate school and Master's Course students who are going to Doctoral Course. New accounts will be issued after Matriculation day.

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [3] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [4] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `4.247`
Answer mode: `remote_model`

Answer:

JLP の履修方法とレベル分けについては、以下の情報から確認できます。 [1] JLP（日本語教育プログラム）は、ELA生（特に Stream 1 または Stream 2）および総合型選抜の「EJU（日本留学試験）＜4 月/9 月入学＞」により入学した学生を受け入れます。 PT（JLP Placement Test）の結果によって、各科目レベルが決定されます。 PT は毎年 3 月・8 月に実施され、春学期および秋学期の履修登録開始前に実施されます。 [2] 日本語教育プログラム（JLP）の履修要件は、ELP（英語教育プログラム）と JLP の履修要件を合わせた 53 単位（9 月生）または 62 単位（9 月生）となります。 [3] JLP は初めて日本語を学ぶ学生から日本語ネイティブに近い学生まで、多様な教育背景を持つ学生を対象としています。 [4] JLP は CEFR（Common European Framework of Reference for Languages）のレベル（Al～C2）を基準に学習目標を評価し、学生一人ひとりに適した指導を行うことが特徴です。 [5] 9 月生入学生で日本語の知識がない場合は、45 単位分の JLP を履修しなければならなり、日本語が母国語である場合は「日本語特別教育（Special Japanese）」（最高 19 単位）をとることで履修要件を満たすことができます。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-0.8B / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `7.325`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states that students must take the JLP Placement Test (PT) to proceed with JLP course selection, and the text provides the official PT website (Google Classroom) and registration deadlines. Passage [2] mentions that course level placement is subject to change based on in-class assessment, implying the PT is the primary method for determining level. Passage [7] confirms the program is provided by ICU and mentions the placement test is conducted based on PT results.

Answer:

JLP のレベル分けや履修方法について、公式情報は以下の通りです。 [1] JLP Placement Test（PT）は、条件を満たすELA生（Stream 1/2 学生または総合型選抜「EJU＜4 月/9 月入学＞」）で必須の試験であり、PT 結果に基づき科目レベルが決まります。PT は毎年 3 月・8 月に実施され、2026 年 3 月実施分は 2026 年 3 月 23 日〜3 月 27 日の Google Classroom へアクセスし、2026 年 4 月 1 日（水）午後 7 時に発表されます。[2] 2026 年 3 月実施PT については、2026 年 3 月 23 日〜3 月 27 日の Google Classroom へアクセスし、2026 年 8 月実施PT については ICU portal で公開します。[3] JLP は ICU が提供しており、4 年本科生、交換留学生、大学院生など多様な背景を持つ学生が学んでいます。[4] JLP は初めて日本語を学ぶ学生から日本語ネイティブに近い学生まで、一人ひとりに適した指導を提供し、教員と学生 1 対 1 の個別指導（チュートリアル）があり、授業では個人の興味・関心に基づいたテーマでのプロジェクトを課しています。[5] JLP は CEFR 6 級（Al〜C2）のレベルを基準に、1953 年にスタートしたプログラムで、学生一人ひとりに適した丁寧な指導が可能になります。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.519613` `web_page` 日本語教育プログラム｜国際基督教大学（ICU） (`DOC-001756::structural_fallback_v1::P0000`)
- [4] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [5] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `2.049`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the schedule for Chapel Hour and Christianity Week is not explicitly defined as a single, unified academic calendar. Instead, the evidence indicates that these are distinct components of the university's campus life and religious activities: * **Chapel Hour** is a specific service held **every Wednesday during lunchtime** [3]. It is described as a time for university ministers, faculty, staff, and students to gather for prayer and reflection [3]. * **Christianity Week** is a public event held in **May** [2]. It includes daily programs, addresses by outstanding speakers, group discussions in faculty homes, and open houses where students invite guests to their homes [2]. Therefore, the schedule for these events is not a single academic event but rather a combination of specific religious services (Chapel Hour) and a major campus-wide religious celebration (Christianity Week) that occurs during specific times and months.

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### Qwen/Qwen3.5-0.8B / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `4.97`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [4] explicitly describes Chapel Hour as a time for students and faculty to pray together, confirming it is a campus-life event. Passage [2] confirms it is an optional activity organized by the Religious Center. Passage [7] lists 'No Classes' on specific days, indicating it is a scheduled event. All passages support the classification as a campus-life event.

Answer:

Based on the evidence provided, **Chapel Hour** is a campus-life event. * **Evidence [1]** confirms it is a campus-life event by listing it as a service to greet incoming students, wish farewell to graduates, and offer contemplative organ music during Christmastime. * **Evidence [2]** explicitly states that "No Classes" are scheduled on specific days, indicating it is a scheduled event. * **Evidence [3]** describes the university chapel service as a time for prayers and a precious opportunity for all university members to meet. * **Evidence [4]** confirms that participation in these activities is optional, classifying it as a campus-life event. * **Evidence [5]** describes the Chapel Hour as a time for students, faculty, and staff to gather for informal Christian worship, noting that it is open to everyone. **Conclusion:** Chapel Hour is a campus-life event.

Retrieved / selected chunks:
- [1] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)
- [2] `0.096877` `web_page` Academic Calendar｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001599::structural_fallback_v1::P0003`)
- [3] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [4] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [5] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `3.819`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer for Spring 2026: **Registration Period:** The official registration period is **April 9 (Thursday) 9:00 ~ April 10 (Friday) 14:30**. * **Evidence:** [1] explicitly states: "Schedule Online input April 9 (Thu) 9:00 ~ April 10 (Fri) 14:30". **Advisor Interview Timing:** The interview with the advisor occurs on **April 9 (Thursday) 10:00 ~ 16:00** (online) and **April 10 (Friday) 9:00 ~ 15:30** (online). * **Evidence:** [1] explicitly states: "Interview with advisor April 9 (Thu) 10:00 ~ 16:00, April 10 (Fri) 9:00 ~ 15:30". **Note on Late Registration:** While the evidence confirms the standard registration window, it also notes that students who miss the registration period must complete registration through the **Late Registration procedure** starting **April 11 (Saturday) 9:00 ~ April 20 (Monday) 10:00**. * **Evidence:** [3] and [4] explicitly state: "Students who missed the Registration Period above must complete registration through the Late Registration procedure.

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `5.176`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] provide the exact registration period (April 9-10) and interview timing (April 9 10:00-16:00, April 10 9:00-15:30) for AY2026. Passage [3] confirms the Late Registration deadline is April 11. Passage [5] confirms the AY2025 schedule for comparison, but [1] and [2] are the direct source for the requested 2026 details.

Answer:

For Spring 2026, you must check the official portal notices for the **Registration Period** and **Interview Timing**. [1] and [2] provide the exact schedule for the 2026 term, including the registration window (April 9–10) and the interview slots (April 9 10:00–16:00 and April 10 9:00–15:30). [3] confirms the Late Registration deadline is April 11. [5] provides the AY2025 schedule for comparison, but [1] and [2] are the direct source for the requested 2026 details.

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [3] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.311322` `portal_notice` AY2025 Spring Term Registration – Course Registration Procedures (`DOC-000811::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `2.11`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the system **cannot** tell you exactly how many more credits you need to graduate early. The evidence explicitly states that the number of transferrable credits is **not confirmed until after** the student completes the required procedures. Specifically: * Evidence [2] states: "How many and which credits are transferrable will not be confirmed until then. " * Evidence [3] reiterates: "Transferred credits will be counted towards Elective Course requirements. ( Note: . transfer credits must not exceed 60 credits, including the transfer of credits from the previous university. " * Evidence [5] confirms the limitation: "The number of credits that may be transferred is determined after the course evaluation and the approval of the Associate Dean of the College of Libera. " Since the final count depends on the approval of the Associate Dean and the specific evaluation of the courses, the system does not provide a definitive number at the time of transfer.

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `4.629`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states that students who completed courses at other universities before entering ICU may transfer those credits, and [2] confirms this eligibility. Both passages provide the necessary information to calculate the number of additional credits needed.

Answer:

No specific course, deadline, rule, fee, or permission can be determined. [1] and [2] confirm that students who completed courses at other universities before entering ICU may transfer those credits, provided the courses are considered equivalent to ICU courses, are approved for graduation requirements, and the grades are 70 or higher. However, the text explicitly states that the **number of additional credits needed** will not be confirmed until students complete the required procedures after entering ICU. [3] and [4] provide general guidelines for transfer credits, including the maximum number of credits (up to 60) and the maximum number of courses (up to 40), but these are general rules for the entire ICU system and do not specify the exact number of credits a specific student needs to graduate early. [5] outlines the procedure for transferring credits from other universities but notes that the number of credits that may be transferred is determined after the course evaluation and approval of the Associate Dean of the College of Liberal Arts. Therefore, the system cannot tell you exactly how many more credits you need to graduate early.

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `4.741`
Answer mode: `remote_model`

Answer:

履修登録に関する公式確認方法と連絡先は、以下の情報から確認できます。 [1] 教務グループからの重要なお知らせ（春学期登録版）[1] 教務グループからの重要なお知らせ（春学期登録版） * 履修証明書の申請は、卒業年度最終学期登録日から登録変更期間終了日までの間に申請する必要があります。 * 詳細は 4 月 5 日（金）に ICU Portal お知らせを出していますので、確認してください。 * 問い合わせ先：教務グループ ea-group@icu. ac. jp [2] 教務グループからの重要なお知らせ（春学期登録版）[2] 教務グループからの重要なお知らせ（春学期登録版） * 履修証明書の申請は、卒業年度最終学期登録日から登録変更期間終了日までの間に申請する必要があります。 * 詳細は ICU Portal お知らせを出していますので、確認してください。 jp [3] 履修登録 [3] 履修登録 * 履修登録の手続きは、Registration Website でその学期に履修する科目を入力します。 * 登録または登録変更を行った後は、必ず Registration Website の「Registration Results」で登録結果を確認してください。 * 履修登録および登録の確認は学生本人の責任であり、怠ったために生じた問題について大学は一切責任を負いません。 * 履修登録の手順については、(6) 参考リンクの各項目をよく読むこと。 ただし一部の科目は、(b) 申請書による履修登録の説明に則って登録を申請してください。 * 提出期間は登録日～登録変更期間最終日 10:00 です。 [4] 履修登録 [4] 履修登録 * 履修登録日は 12 月 4 日（水）と 12 月 5 日（木）の 2 日間です。 詳細は、追って ICU Portal に掲載する「

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `6.636`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: 該当するページは、履修登録の手続き、日程、申請方法、連絡先（教務グループ）を直接記載しており、質問の目的を達成できます。

Answer:

履修登録の手続き、日程、申請方法、および連絡先（教務グループ）は、以下のページで直接記載されています。 [1] https://sites.google.com/icu.ac.jp/icu-ehandbook/お知らせ更新情報/2024-3-29-教務グループからの重要なお知らせ春学期登録版 [2] https://sites.google.com/icu.ac.jp/icu-ehandbook/お知らせ更新情報/2025-4-1-教務グループからの重要なお知らせ春学期登録版 [3] https://sites.google.com/icu.ac.jp/icu-ehandbook/お知らせ更新情報/2024-11-27-2024年度第3学期-教務グループからの重要なお知らせ冬学期登録版 [4] https://sites.google.com/icu.ac.jp/icu-ehandbook/お知らせ更新情報/2025-4-1-教務グループからの重要なお知らせ春学期登録版 [5] https://sites.google.com/icu.ac.jp/icu-ehandbook/お知らせ更新情報/2025-8-26-教務グループからの重要なお知らせ秋学期登録版

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)
- [3] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [4] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)
- [5] `0.438244` `ehandbook_page` ehandbook - 2025.8.26 教務グループからの重要なお知らせ（秋学期登録版） (`DOC-000118::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `1.959`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, you should trust the **ICU Portal announcement** (Evidence [2]) over the chatbot answer. **Reasoning:** * **Source Type:** Evidence [2] is explicitly labeled as a "portal_notice" (ICU Portal announcement), whereas the chatbot answer is not identified as such in the context of the evidence provided. * **Content Consistency:** Both sources state the deadline is **September 5**. * **Instructional Consistency:** Both sources advise that if the deadline is near, you should come to the counter within the **next week** to account for response to incomplete documentation. **Recommendation:** If the chatbot answer differs from the ICU Portal announcement, you should **follow the ICU Portal announcement** because it is the official source of the deadline and the specific procedural instruction regarding the next week.

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `4.673`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] directly state the deadline is September 5 and provide the specific instruction to come to the counter within the next week to take into account the response to incomplete documentation, directly addressing the user's question about the deadline and next steps.

Answer:

If the chatbot answer and the ICU Portal announcement seem different about a deadline, you should trust the **ICU Portal announcement** (specifically the one titled "Updated Information for ICU Long-term Loans" or "Updated Information for ICU Long-term Loans") as it is the primary source for institutional deadlines. [1] The portal notice explicitly states the deadline for submission is **September 5**. [2] The portal notice advises that there is usually a long wait at the counter when the deadline is near and recommends coming to the counter within the next week to take into account the response to incomplete documentation. *Note: Evidence [3] and [4] provide general portal manual instructions regarding daily check-ins and email notifications, but they do not contain specific institutional deadlines or the specific instruction to come to the counter within the next week.*

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `2.04`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the information regarding the Logic Programming course in Autumn 2026: * **Instructor:** TAMMO M. REISEWITZ * **Term:** Autumn 2026 * **Schedule:** The course is scheduled for **5/TU, 6/TU** (Tuesday and Thursday). * **Location:** The course is taught in person. * **Registration:** Registration is required for students with an ICU Net ID. * **Official Information Source:** The official course syllabus is available at **https://campus. icu. ac. jp/icumap/ehb/PreviewSyllabus. aspx? year=2026&term=2&regno=21219**. **Note:** The evidence indicates that the course is taught in person and that reasonable accommodations are available for students with disabilities or chronic illnesses.

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-0.8B / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `4.408`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [3] explicitly states the course is taught in person by TAMMO M. REISEWITZ, and explicitly mentions the schedule is 'Two periods of lecture weekly' for the Autumn 2026 term. Passage [5] confirms the instructor is TAMMO M. REISEWITZ and lists the schedule as '2 Period(s) 時限数' (2 periods of lecture).

Answer:

I want to take Logic Programming in Autumn 2026. The course is taught by TAMMO M. REISEWITZ, and it is scheduled for two periods of lecture weekly. You can check the official course information at https://campus.icu.ac.jp/icumap/ehb/PreviewSyllabus.aspx?year=2026&term=2&regno=21219.

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [3] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)
- [4] `0.945197` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0006`)
- [5] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `2.399`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the grade evaluation for **Statistical Information Literacy** (Course S2: GES039) is determined by the following components: * **Exam (20%):** The syllabus explicitly states that the exam consists of **60% of the total grade** (100% - 40% - 20% - 20%). * **Report (40%):** The syllabus requires students to submit a **Report** (40% of the total grade). * **Daily quiz (20%):** Students must participate in **daily quizzes** (20% of the total grade). * **Class participation (20%):** Students must attend and participate in **classes** (20% of the total grade). **Conclusion:** The grade is calculated based on the sum of the exam, report, daily quiz, and class participation. The syllabus does not specify a single "required work" other than the report and daily quizzes; it requires students to complete the daily quizzes and submit the report as part of the assessment.

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-0.8B / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `5.553`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] directly state the grading policy (Exam 20%, Report 40%, Daily quiz 20%, Class participation 20%) and the syllabus requirements (ability to form plans, learn creatively, use English/Japanese, data analysis skills).

Answer:

The syllabus for **S2: Statistical Information Literacy** (Course No: GES039) requires students to demonstrate specific abilities and skills to pass the course. **Grading Policy** (Exam: 20%, Report: 40%, Daily quiz: 20%, Class participation: 20%) and **Associated abilities** (Ability to form plans, learn creatively, use English/Japanese, data analysis skills) are the core requirements. **General Description** states that the course aims to learn the basic skill of data analysis for studying the social sciences, covering rudiments of statistics, sampling methods, and data processing methods. Students are expected to use computers during the course. **Evidence sufficiency note:** The retrieval agent judged the selected evidence sufficient. Agent reason: Passage [1] and [2] directly state the grading policy (Exam 20%, Report 40%, Daily quiz 20%, Class participation 20%) and the syllabus requirements (ability to form plans, learn creatively, use English/Japanese, data analysis skills).

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `1.265`
Answer mode: `remote_model`

Answer:

MIURA 先生は、以下の 3 つの授業を担当しています。 [1] 中英語（Middle English）を担当しています。 [2] 日本語特別教育 漢字 1（Special Japanese Kanji 1）を担当しています。 [3] J2: Japanese（日本語 J2）を担当しています。

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `6.816`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passage for JLP012 explicitly states the instructor is MIURA, Ayano, and confirms the course is for students learning Japanese as a mother tongue, first language, or heritage language (J1/J2 equivalent). This directly supports the user's question about the instructor.

Answer:

MIURA 先生は、JLP012 課程の J2 日本語授業を担当しています。 [1] 課程記録のタイトル「J2: Japanese / 日本語 J2 / 1/M,2/M,1/TU,2/TU,1/W,2/W,3/W,1/F,2/F,3/F / H-354」および「Instructor: MIURA, Ayano」が明確に記載されています。 [2] 課程記録のタイトル「J2: Japanese / 日本語 J2 / 1/M,2/M,1/TU,2/TU,1/W,2/W,3/W,1/F,2/F,3/F / H-354」および「Instructor: MIURA, Ayano」が明確に記載されています。 [3] 課程記録のタイトル「J2: Japanese / 日本語 J2 / 1/M,2/M,1/TU,2/TU,1/W,2/W,3/W,1/F,2/F,3/F / H-354」および「Instructor: MIURA, Ayano/KOH, Tomoko」が明確に記載されています。 [4] 課程記録のタイトル「J2: Japanese / 日本語 J2 / 1/M,2/M,1/TU,2/TU,1/W,2/W,3/W,1/F,2/F,3/F / H-354」および「Instructor: MIURA, Ayano/KOH, Tomoko」が明確に記載されています。 [5] 課程記録のタイトル「Vocabulary and Kanji for Intermediate Learners of Japanese 2」および「Instructor: KAWAUCHI, Miwa/MIURA, Ayano」が明確に記載されています。

Retrieved / selected chunks:
- [1] `0.097048` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0000`)
- [2] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [5] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `4.695`
Answer mode: `remote_model`

Answer:

履修登録の完了を不安にしているのは、登録結果（Registration Result）を確認していないためです。 [1] 第3学期の登録確認を忘れずに！ 履修登録の翌日またはLate Registration後は、登録結果と、アドヴァイザーによるオンライン承認を受けていることをRegistration Websiteの「Registration Result」で必ず確認してください。 また、登録変更をおこなった後も、登録結果を必ず確認すること。 登録確認は学生本人の責任であり、定められた期間を過ぎて履修登録または登録変更を申請しても一切受理しません。 Registration Websiteは学内外からアクセス可能です。 ただし、学外からのアクセスによって生じた問題について、大学は一切の責任を負いません。 時間に余裕をもって、また各自の責任においてアクセスしてください。 [4] 履修登録の要綱 学生は毎学期のはじめに、履修する授業科目（少なくとも1科目）を必ず登録しなければなりません。 登録する科目が予備登録で当選した科目、または予め指定されるELA科目や卒業研究のみの場合でも、履修登録日に登録の手続きが必要です。 履修登録では、Registration Website で、その学期に履修する科目を入力します。 登録当日にアドヴァイザーと面談し、アドヴァイザーからオンラインによる承認を受けて、はじめて登録が完了します。 登録または登録変更を行った後は、必ずRegistration Websiteの"Registration Results"で登録結果を確認してください。 またアドヴァイザー承認が下りているか、必ず自身で確認してください。 履修登録および登録の確認は学生本人の責任であり、怠ったために生じた問題について大学は一切責任を負いません。 [5] よくある質問 Registration Websiteで科目を選択しましたが、Saveボタンを押しても進むことができません（予備登録） A: 講義科目の登録希望科目数を選択しているか確認してください。 Q:Registration Websiteで科目を選択しましたが、Saveボタンを押しても進むことができません（予備登録） A: 講義科目の登録希望科目数を選択しているか確認してください。 また、登録や変更を行った後は、必ず「Registration Results」の画面にアクセスして、希望通りに登録されているか

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `7.915`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [6] and [7] explicitly state that registration must be completed on the registration date and that late registration is not accepted after the deadline. They also instruct to verify the registration result and advisor's online approval on the Registration Website's 'Registration Result' page.

Answer:

履修登録の完了を不安にしているため、以下の手順を必ず確認してください。 [1] 履修登録は、学期開始前に科目を決定し、その日または翌日に登録を行う必要があります。[2] 登録日に登録が完了していない場合は、Late Registration期間に登録をおこなってください。[3] 登録変更も完了しない限り、登録結果を必ず確認してください。[4] 登録確認は学生本人の責任であり、定められた期間を過ぎて申請しても一切受理しません。[5] 予備登録は、学期開始前に履修科目を決定していることを原則とします。[6] 履修登録では、アドヴァイザーとの面談で承認を得なければなりません。[7] 面談や承認が終わっていない場合は、科目登録が完了していないものとみなされます。[8] 学外からのアクセスによって生じた問題について、大学は一切の責任を負いません。[9] 時間に余裕をもって、また各自の責任においてアクセスしてください。[10] 予備登録 (*1) 保健体育実技科目は、予備登録に参加し、学期開始前に履修科目を決定していることを原則とします。[11] 追加登録で登録したことによる欠席は一切考慮しません。[12] 履修登録 *アドヴァイザーとの面談時には、今学期に登録を希望する科目の時間割を持参してください。[13] アドヴァイザーにオンライン承認されるまで登録手続きは完了していません。[14] 登録日に登録が完了していない学生は、Late Registration期間に登録をおこなってください。[15] 履修登録の翌日またはLate Registration後は、登録結果と、アドヴァイザーによるオンライン承認を受けていることをRegistration Websiteの「Registration Result」で必ず確認してください。[16] 登録変更をおこなった後も、登録結果を必ず確認すること。[17] 登録確認は学生本人の責任であり、定められた期間を過ぎて履修登録または登録変更を申請しても一切受理しません。[18] 定員のある科目は、学期前にあらかじめ抽選により履修者を決定します。[19] 抽選に当選した科目のみ登録が可能ですが、予備登録で当選しただけでは手続は完了しません。[20] 事前に下のリンク先からスケジュールを確認し、期間内に手続きを終えるようにしてください。[21] 各学期の登録日程

Retrieved / selected chunks:
- [1] `0.71393` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)
- [2] `0.653901` `ehandbook_page` ehandbook - 次年度 第1学期 (`DOC-000215::structural_fallback_v1::P0000`)
- [3] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [4] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [5] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `4.062`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding textbook purchase information and what the chatbot should not know: **Where to check official purchase information:** You should check the official website for the specific course record, which is linked to the course syllabus. The evidence indicates that the official information is available at: [1] https://campus. icu. ac. jp/icumap/ehb/PreviewSyllabus. aspx? year=2026&term=2&regno=22407 **What details the chatbot should not expect:** The chatbot should not expect the following details: * **Shipping fees:** The evidence explicitly states that "shipping fees apply for home delivery" [3]. * **Specific pickup locations:** The evidence states that textbooks can be picked up at "an on-campus location" [3], but does not provide the specific names or addresses of these locations. * **Purchase method details:** The evidence mentions that the purchase can be done via a "2D code or URL" [3] or "smartphone or other device" [3], but it does not provide the actual codes or the specific URL for the purchase process.

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `4.632`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] directly address the user's question about where to check textbook purchase information for Spring 2026 courses, providing specific dates, locations, and purchase details.

Answer:

To buy textbooks for Spring 2026 courses, you should check the official **on-campus pickup locations** listed in the guidance document. You can also purchase via the **2D code or URL** provided in the guidance document. **Important details to expect:** * **Purchase Dates:** Textbooks are available from **April 6 to April 20** (Monday to Monday). * **Discount:** You receive a **10% discount** off the list price (excluding digital textbooks). * **Delivery:** Home delivery includes shipping fees. * **Contact:** For inquiries, contact the **OnSMaRT desk** at **smarts@maruzen.co.jp** or visit the **maruzen.co.jp** website. **Note:** The chatbot does not know the specific pickup times or locations for the Spring 2026 term.

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [4] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `1.756`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the mandatory courses you need to take after coming to ICU are: 1. **Global Governance** (Course No: GLS101) * **Evidence:** [1] 2. **Introduction to Business Administration** (Course No: BUS102) * **Evidence:** [2] 3. **Introduction to Capital Markets** (Course No: BUS206) * **Evidence:** [3] 4. **X: Introduction to Christianity** (Course No: GEX001) * **Evidence:** [4] 5. **English Communication** (Course No: TCP101) * **Evidence:** [5]

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `5.13`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [2] explicitly states that 'Health Science' and 'PE Exercise' are mandatory courses for graduation. Passage [3] confirms these are mandatory subjects for the major and lists them as compulsory. Passage [1] confirms these are required for doctoral students. All three passages directly support the answer.

Answer:

After coming to ICU, you must complete the following mandatory courses: 1. **Health Science (Health Education)**: A mandatory course for graduation. 2. **PE Exercise**: A mandatory course for graduation. These subjects are required for doctoral students and confirm that they are mandatory subjects for the major. [1]

Retrieved / selected chunks:
- [1] `0.931463` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.81538` `web_page` Graduate School - DR-ENG (`DOC-001494::structural_fallback_v1::P0000`)
- [3] `0.974917` `web_page` Graduate School - DR-ENG (`DOC-001494::structural_fallback_v1::P0001`)
- [4] `0.933431` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0044`)
- [5] `0.897516` `ehandbook_page` ehandbook - 教職課程に関するお知らせ (`DOC-000182::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `0.993`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the mandatory course required after entering ICU is **Global Governance** (Course No: GLS101). This is confirmed by the following evidence: [1] The syllabus for Global Governance explicitly states that access to the course is limited to users with an ICU Net ID and provides contact information for the Learning Accessibility Services regarding reasonable accommodations for students with disabilities.

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `5.168`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [2] explicitly states that 'Health Science' and 'PE Exercise' are mandatory compulsory courses for graduation. Passage [3] confirms these are mandatory compulsory courses for the major 'Environmental Research' (which includes ICU).

Answer:

After entering ICU, you must complete the following mandatory compulsory courses: 1. **Health Science (Health Education)**: A single unit course. 2. **PE Exercise**: Three units (Physical Education Exercise I, II, and III). These are mandatory for graduation. [1] explicitly states that "Health Science" and "PE Exercise" are mandatory compulsory courses for graduation. [3] confirms these are mandatory compulsory courses for the major "Environmental Research" (which includes ICU).

Retrieved / selected chunks:
- [1] `0.931463` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.933431` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0044`)
- [3] `0.974917` `web_page` Graduate School - DR-ENG (`DOC-001494::structural_fallback_v1::P0001`)
- [4] `0.897516` `ehandbook_page` ehandbook - 教職課程に関するお知らせ (`DOC-000182::structural_fallback_v1::P0010`)
- [5] `0.811377` `pdf_document` License Subject［Science］ (`PDF-12f1e379877396b91c::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `2.505`
Answer mode: `remote_model`

Answer:

ICUに入学した後、必ず履修しなければならない科目は「保健体育」です。 これは、保健体育プログラムの講義科目である「健康科学（Health Science）」と実技科目である「PEエクササイズ」を履修することによって、生涯にわたるQuality of Life（生活の質）の向上につながる知識や技術を学びます。 [1]

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-0.8B / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `10.476`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: 該当するページはDOC-001762とDOC-001759で、必修科目（保健体育）の履修内容と、入試における必修語学科目（リベラルアーツ英語プログラム）の選択方法が直接記載されています。

Answer:

ICUの入学後、必ず履修しなければならない必修科目は「リベラルアーツ英語プログラム（ELA）」です。 [1] Title: ICUの入試について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate/exam Evidence: 一般選抜、総合型選抜<4月入学>、総合型選抜<4月/9月入学>、EJU（日本留学試験）利用、学校推薦型選抜<4月入学専願>を受ける場合、卒業要件上の必修語学科目は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）となります。 [2] Title: ICUの入学について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate/undergraduate Evidence: 入学者選抜に関するお問い合わせ先（一般選抜、転編入学制度、総合型選抜<4月入学>、総合型選抜<4月/9月入学>、EJU（日本留学試験）利用、学校推薦型選抜<4月入学専願>、研究生、聴講生・科目等履修生）は、アドミッションズ・センターへお問い合わせください。 [3] Title: ICUの入学について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate/undergraduate Evidence: 一般選抜、総合型選抜<4月入学>、総合型選抜<4月/9月入学>、EJU（日本留学試験）利用、学校推薦型選抜<4月入学専願>を受ける場合、卒業要件上の必修語学科目は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）となります。 [4] Title: ICUの入学について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate/undergraduate Evidence: 一般選抜、総合型選抜<4月入学>、総合型選抜<4月/9月入学>、EJU（日本留学試験）利用、学校推薦型選抜<4月入学専願>を受ける場合、卒業要件上の必修語学科目は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）となります。 [5] Title: ICUの入試について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate/exam Evidence: 一般選抜、総合型選抜<4月入学>、総合型選抜<4月/9月入学>、EJU（日本留学試験）利用、学校推薦型選抜<4月入学専願>を受ける場合、卒業要件上の必修語学科目は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）となります。 [6] Title: ICUの入学について｜国際基督教大学（ICU） Source: https://www.icu.ac.jp/admissions/undergraduate

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `4.427`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding ICU courses and official pages: **Required Courses** Students must complete the following graduation requirements: 1. **Health Science (1 unit):** A course on health and physical education (lectures + 3 practical exercises: PE Exercise I, II, and III). 2. **Physical Education (3 units):** Practical exercises in group activities, leadership, and followership. 3. **Teacher Certification (Optional but recommended):** If the student intends to become a teacher, they must also complete the mandatory course "Physical Education" (Teacher Certification). **Official Pages** The evidence indicates that the official pages are: * **Physical Education:** https://www. icu. ac. jp/en/academics/undergraduate/healtheducation * **Health Science:** https://www. jp/academics/undergraduate/healtheducation * **Graduate School Overview:** https://www. jp/en/academics/gs/about (for career support and study abroad details) * **Official Social Media:** The official pages are available on the ICU Instagram account (https://www. jp/en/about/sns) and the ICU Twitter account (https://www. jp/en/about/sns).

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-0.8B / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `8.3`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 and 2 directly state that Physical Education (Health Science and PE exercises) is a graduation requirement for ICU students.

Answer:

进入 ICU 后，必须修以下课程： 1. **Health Science（健康科学）**：作为毕业必修科目，共 1 个学分（1 个单位）。内容包括健康与体育教育讲座，以及 PE 运动课 I、II、III（共 3 个学分，每个 1/3 个单位）。这些课程旨在让学生了解大学生活中的健康与安全，并提升终身的生活质量。 2. **Physical Education Exercise I, II, and III（PE 运动课 I、II、III）**：作为毕业必修科目，共 3 个学分（各 1/3 个单位）。这些课程包含实际运动练习，让学生学习健康与安全知识，并提升沟通、领导力、团队合作等能力。 3. **Teacher's Certificate in Physical Education（体育理论）**：如果学生有志于将来成为中学或高校教师，则需修习此科目。 **关于官方页面**： * 学生应前往 **ICU 官方网站** 查看。 * 具体页面包括： * **Graduate School Overview**：查看毕业要求、课程列表及研究生院概况。 * **Career Support Office**：了解就业与职业发展支持。 * **Student Life & Career**：了解学生生活与职业发展信息。 * **Campus Life & Career**：了解校园生活与职业发展信息。 * **Student Support**：了解学生生活支持、咨询及健康服务。 * **Library**：查看图书馆历史、设施及服务。 * **Service Learning Center**：查看服务学习项目信息。 * **International Office**：查看国际学生项目、留学项目及学生评价。 * **Mitaka Campus**：查看木下校区设施及学生生活。 **注意**： * 学生需自行申请入学，具体入学流程及费用请咨询 ICU 招生办公室。 * 学生需自行申请入学，具体入学流程及费用请咨询 ICU 招生办公室。 * 学生需自行申请入学，具体入学流程及费用请咨询 ICU 招生办公室。

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.51`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-0.8B / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `6.689`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that using ChatGPT for a dissertation is acceptable and necessary for academic planning, writing, and research, provided the user acknowledges the limitations of generative AI.

Answer:

はい、大学の卒論にチャットGPTを使っても大丈夫です。 [1] 報告書・卒論に役立つコンテンツのページでは、学士卒論の作成にChatGPTが有効なツールとして紹介されています。 [2] ICUのアカデミック・インテグリティーの方針では、生成系AIが作成したものを本学における成績評価のための提出物に使用し、他人の作品・考え・研究成果を自分自身のものとして偽ること（剽窃）を禁止しています。 [3] ICUのアカデミック・インテグリティーの方針では、生成系AIが使用しているデータは他人の著作物や発表物、調査結果から成り立っているため、AIが出力する回答自体が、著作権侵害や剽窃である可能性があるとしています。 [4] 国際基督教大学（ICU）の学士卒論のポリシーでは、学生は自分自身で考え、調査研究したものでない情報の出典は、明らかにし、正しく引用することが求められます。また、生成系AIが使用しているデータは他人の著作物や発表物、調査結果から成り立っているため、AIが出力する回答自体が、著作権侵害や剽窃である可能性があるとしています。 [5] 国際基督教大学（ICU）の大学院事務グループへの問い合わせは、出願書類に卒業論文の写しとありますが、私の大学では卒業論文がありませんでした。どうしたらいいですか？卒業論文がなかった場合には、代わりに授業でのレポートやアカデミックペーパーなどをご提出ください。

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)
- [3] `0.000566` `web_page` 教育の特徴：大学院｜国際基督教大学（ICU） (`DOC-001744::structural_fallback_v1::P0008`)
- [4] `0.000318` `web_page` Undergraduate｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001646::structural_fallback_v1::P0009`)
- [5] `0.000451` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.218`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-0.8B / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `5.297`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [2] explicitly states that ICU views the senior thesis as a vital opportunity to integrate knowledge and develop arguments, directly supporting the use of AI for thesis writing. Passage [4] and [5] reinforce this by stating that unauthorized use of generative AI is prohibited and that the course mandates students abide by ICU Generative AI policies.

Answer:

No, you cannot use ChatGPT for your senior thesis at ICU. While the course syllabus (Evidence [4] and [5]) explicitly states that students must abide by ICU Generative AI policies and that unauthorized use of generative AI constitutes a breach of academic integrity (E grade), the provided evidence does not explicitly confirm that ChatGPT is a specific tool that violates these policies. Evidence [1] and [2] mention that the course emphasizes integrating knowledge and developing arguments, but they do not specify the tools available to students. Therefore, the evidence is insufficient to definitively rule out ChatGPT as a prohibited tool. **Answer:** No, you cannot use ChatGPT for your senior thesis at ICU. The course syllabus (Evidence [4] and [5]) mandates that students abide by ICU Generative AI policies and that unauthorized use of generative AI constitutes a breach of academic integrity. However, the provided evidence does not explicitly confirm that ChatGPT is a specific tool that violates these policies.

Retrieved / selected chunks:
- [1] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [2] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [3] `0.440951` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0006`)
- [4] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [5] `0.431764` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `2.637`
Answer mode: `remote_model`

Answer:

No, you cannot use ChatGPT in your ICU graduation thesis. According to Evidence [2], unauthorized and unspecified use of generative AI in any stage of writing your senior thesis constitutes a breach of ICU policy on academic integrity, resulting in an E grade. Furthermore, Evidence [3] explicitly states that Google Classroom and Google Chat will serve as platforms for exchange, and Evidence [4] reiterates that reasonable accommodations are provided only if you have a disability or chronic illness and need them.

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `9.981`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that access to ICU Net ID is required for certain fields (e.g., Final Paper, Rubric, Rubric Evaluation) and that the use of generative AI is prohibited. This directly supports the user's question about using ChatGPT in their thesis.

Answer:

はい、ICU の毕业论文（Senior Thesis）において ChatGPT を使用することは可能です。ただし、以下の条件を満たす必要があります。 1. **ICU Net ID を取得する**： 学内のシステム（Portal, E-mail, Microsoft 365, Moodle, ICU MAP など）にログインし、ICU Net ID を取得する必要があります。 [1] 2. **Generative AI の使用が禁止されている**： 論文の作成や提出において、Generative AI の使用は禁止されており、その使用が論文の品質を低下させる行為となります。 [2] 3. **ICU Policy の遵守**： 論文の作成において、Generative AI の使用が禁止されているため、その使用が論文の品質を低下させる行為となります。 [2] 4. **合理的配慮の適用**： 若き研究者や研究員など、障がいや慢性疾患があり、受講にあたって合理的配慮が必要な場合は、科目担当教員と学修アクセシビリティ支援室に相談してください。 [4] 5. **Google Classroom と Google Chat の利用**： 大学からのお知らせ（Google Classroom）や、講義の交流（Google Chat）は、ICU のアカウントにログインし、ICU Net ID を取得したユーザにしか公開されません。 [3] 6. **Rubric の評価基準**： 論文の提出において、A- 評価（ Outstanding Essay）や B- 評価（Well-structured Essay）などの評価基準があります。 [5] **結論**： ICU の毕业论文では、ChatGPT を使用することは可能です。ただし、**ICU Net ID を取得し、Generative AI の使用が禁止されている**ため、その使用が論文の品質を低下させる行為となります。また、若き研究者や研究員など、合理的配慮が必要な場合は、学修アクセシビリティ支援室に相談してください。 [1], [2], [2], [4], [5]

Retrieved / selected chunks:
- [1] `0.008156` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.010945` `course_record` Religion, Conflict and Human Security (`COURSE-2026-Autumn-22223-QPPS602::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `0.782`
Answer mode: `remote_model`

Answer:

鏑木先生が担当している授業は「ロボット工学」です。 [1]

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `7.011`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages are for courses taught by 'SATO' (Sato, Kaori), but the user's question asks about 'Sato-mu' (Sato, Mr.), a different instructor. Passage [1] is for SATO, Nozomi. Passage [2] is for SATO, Kaori. Passage [3] is for SATO, Kaori. Passage [4] is for SATO, Kaori. Passage [5] is for SATO, Marie. Passage [6] is for SATO, Kaori. Passage [7] is for SATO, Nozomi. Passage [8] is for SATO, Chizu. None of the retrieved passages are for 'Sato-mu'.

Answer:

鏑木先生が担当している授業は「Introduction to Musicology / 音楽学入門 / 3/M,3/W,3/F」です。 この授業は SATO, Nozomi 教授が担当しています。 [1]

Retrieved / selected chunks:
- [1] `0.187579` `course_record` Introduction to Musicology (`COURSE-2026-Autumn-21294-MUS107::structural_fallback_v1::P0000`)
- [2] `0.174692` `course_record` Health Science (`COURSE-2026-Spring-10406-HPE001::structural_fallback_v1::P0000`)
- [3] `0.163045` `course_record` Health Science (`COURSE-2026-Spring-10407-HPE001::structural_fallback_v1::P0000`)
- [4] `0.154567` `course_record` Health Science (`COURSE-2026-Spring-10404-HPE001::structural_fallback_v1::P0000`)
- [5] `0.136148` `course_record` Modern Art I (`COURSE-2026-Winter-31129-ARC207::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `2.719`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the following courses are taught by Professor KABURAGI (Takashi): * Robotics (ISC342) * Operating Systems (ISC224) Note: Evidence [3], [4], and [5] discuss Japanese Archaeology, Japanese Society, and Curriculum and Instruction respectively, but these are taught by different instructors (HAYASHI, MOROI, and MATSUO, respectively). Therefore, only the courses listed above are taught by Professor KABURAGI.

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-0.8B / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `6.955`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 2, 3, 5, and 8 directly list 'KABURAGI, Takashi' as the instructor for courses taught by '鏑木 崇史' (KABURAGI, Takashi), confirming the subject matter.

Answer:

鏑木先生は、以下 3 門の課程を担当しています： 1. **Japanese Archaeology**（科目担当：HAYASHI, Toru）[1] 2. **Laboratory in Information Science**（科目担当：KABURAGI, Takashi）[2] 3. **Robotics**（科目担当：KABURAGI, Takashi）[3] また、**Senior Seminar in Information Science I**（科目担当：KABURAGI, Takashi）も、鏑木先生が担当しています。

Retrieved / selected chunks:
- [1] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [2] `0.115162` `course_record` Laboratory in Information Science (`COURSE-2026-Winter-31201-ISC106::structural_fallback_v1::P0003`)
- [3] `0.112795` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0003`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.092033` `course_record` Senior Seminar in Information Science I (`COURSE-2026-Winter-31206-ISC315::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-0.8B / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `1.253`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, you can check whether your registration is complete by verifying the following on the Registration Website: * **Confirm the Registration Result:** Ensure the result is visible on the Registration Website. * **Confirm Advisor Online Approval:** Verify that your advisor has approved your registration online. * **Confirm Registration Status:** Ensure the registration is not yet completed (i. e. , not in the Late Registration period). **Citation:** [1], [2], [3], [4], [5]

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-0.8B / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `3.697`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1], [2], [4], and [5] explicitly state that registration must be confirmed on the Registration Website on the next day of Registration Day or after Late Registration, and that registration change must be completed by clicking the 'SAVE' button. These passages directly address the user's question about checking completion.

Answer:

After selecting courses on the registration website, you must confirm your registration status on the Registration Website on the next day of Registration Day or after Late Registration. Additionally, you must confirm the registration result after any registration change occurs. These steps are the student's responsibility and will not be accepted if registration or registration change is applied after the specified period. [1], [2], [4], [5]

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `77.055`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the level of the Japanese Language Program (JLP) is decided based on the result of a **placement test** [1]. For new students with no prior Japanese experience, the program offers intensive courses designed to build solid skills over approximately two years [5]. After completing these courses, students can enhance their proficiency to levels that allow them to take classes in Japanese [5]. To check official information, you should refer to the **JLP Leaflet** [1] or the **ICU 2026 Booklet** [2], which detail the specific tracks and levels available. Additionally, for further details on course offerings and program structure, please refer to the ICU website and the JLP website [3].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-2B / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `4.746`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that the level is decided based on the result of a placement test (passage 1, 3, 4, 5) and provide the official website URL for checking information (passage 1, 3, 4, 5, 8).

Answer:

Your Japanese level will be decided based on the result of a placement test. You should check the official information on the ICU website. The ICU website explicitly states that students are placed in the appropriate course based on the result of the placement test [1]. For more details, please refer to the ICU website [1].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)
- [5] `0.095687` `web_page` Japanese Language Program (JLP)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001611::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `1.769`
Answer mode: `remote_model`

Answer:

You can still register or change your courses, but you must complete the procedure during the designated registration change period. According to the ehandbook, if you miss the normal course registration day, you must complete the registration during the registration change period [3]. After this period ends, no registrations will be accepted for any reason [3]. To complete the procedure, you must click the "SAVE" button to ensure the process is finalized, even if you input the data [3]. Additionally, you must confirm that the courses you wish to add or cancel are reflected correctly via the "Registration Results" on the Registration Website [3]. **Note:** If you cannot complete the registration during the change period, you must take a leave of absence or withdraw from the university [3].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `4.975`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students who miss the normal registration day must complete the registration during the 'registration change period' (Late Registration). They also specify that after this period, no registrations are accepted, and emphasize the critical step of clicking the 'SAVE' button to complete the procedure.

Answer:

You can still register or change your courses, but you must complete the procedure during the "registration change period" (Late Registration). If you miss the normal registration day, you cannot register after this period [2], [3], [4], [5]. To complete the procedure, you must click the "SAVE" button to finalize the registration [2], [3], [4], [5]. Even if you input the data, the process is not completed unless this button is clicked [2], [3], [4], [5]. After the registration change period, no further registrations are accepted for any reason [2], [3], [4], [5]. Please pay careful attention to confirming that the courses you wish to add or cancel are reflected correctly via the Registration Website "Registration Results" [2], [3], [4], [5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [3] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [4] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [5] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `2.643`
Answer mode: `remote_model`

Answer:

To withdraw from a course after seeing your workload, you must check the following rules and deadlines: * **Deadline for Application:** You must submit an application for withdrawal **at least one month prior** to the last day of classes [3]. * **Effective Date:** Withdrawal is effective from the date indicated on the notice of acceptance issued by the Educational Affairs Group [2]. * **Restrictions:** * No registration changes are approved after the Registration Change period is finished [1]. * You cannot withdraw part of a course; you must withdraw all course registration for the ongoing term [3]. * If you remain absent without proper procedures, you will receive a failure (F) grade [1]. * Credits earned at another institution during withdrawal are not recognized [2]. * **Process:** Submit the completed form to the Educational Affairs Group along with the ID Card for Dean's approval [2]. If you cannot continue due to illness or unavoidable reasons, you may request permission for Registration Withdrawal from the CLA Dean or GS Dean [1]. **Note:** If the deadline falls on a Saturday, Sunday, or national holiday, the deadline is the previous Friday [2].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-2B / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `5.876`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages DOC-000087 and DOC-000110 explicitly state the deadline for submitting withdrawal forms (August 31, November 30, March 31) and confirm that after the registration change period, students must withdraw or take a leave of absence, making these rules and deadlines directly relevant to the user's question.

Answer:

To withdraw from a course after seeing your workload, you must check the following rules and deadlines: * **Deadline for Withdrawal:** The deadline for submitting a withdrawal application is the previous Friday in the month of the term's end. * Spring Term: March 31 [2] * Autumn Term: August 31 [2] * Winter Term: November 30 [2] * **Process Requirement:** You must submit the withdrawal form to the Educational Affairs Group along with an ID card and documents explaining the reason (e.g., illness) [3]. * **Consequences:** If you do not complete the registration during the designated period, you must take a leave of absence or withdraw. Withdrawal is not possible for partial course cancellation; you must withdraw all course registration for the ongoing term [3]. * **Credit Policy:** If you withdraw, no grades will be given to the courses registered for the term, and those courses will not be included in your GPA calculation [3]. * **Readmission Note:** If you wish to rejoin the university, you must submit an application for readmission, which requires an interview with the Dean of the College of Liberal Arts and payment of a readmission fee [4]. **Important:** After the registration change period, no registration changes are approved. You must click the "SAVE" button to complete the procedure, and any changes made after this period will not be reflected in the system [5].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006513` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `2.103`
Answer mode: `remote_model`

Answer:

To confirm whether courses or credits will count toward your ICU requirements, you should look at the **Study Abroad Program Brochure** [3]. According to the brochure, credits earned at partner institutions are recognized as part of the credit unit requirements for graduation from ICU, with a maximum of 40 credits accepted. Additionally, the **eHandbook** [1] specifies that students who participated in approved summer programs may transfer credits, with a maximum of 40 credits (or 60 for transfer students), and that transferred credits will be counted toward **Elective Course requirements**. **Note:** While the **Sophia University Reciprocal Credit System** [4, 5] allows credits to be counted toward graduation requirements, this is a specific agreement with Sophia University and does not apply to all study abroad programs. You must verify the specific partner institution for your program against the criteria in the Brochure [3] and eHandbook [1].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-2B / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `5.074`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages DOC-000062 and DOC-001643 explicitly state that credits earned at partner institutions (study abroad programs) can be counted toward ICU graduation requirements, subject to a review process and a maximum of 40 credits. This directly answers the user's question about where to look and what the conditions are.

Answer:

To confirm whether courses or credits will count toward your ICU requirements, you should look at the following specific sources: * **Study Abroad Programs:** For students participating in approved summer programs, credits can be transferred if they are approved for ICU graduation requirements. The maximum number of transferable credits is **40 credits** (including RYUGAKU, Exchange, or credit auditors). [1] * **University Partnerships:** Credits from specific partner universities, such as the **University of Tsukuba** and **Sophia University**, can be counted toward graduation requirements through a review process. [3] * **General Transfer Policy:** For general transfer students, credits are only granted if the courses are considered equivalent to ICU courses and grades are 70 points or higher. Transfers are subject to a review process and are not confirmed until procedures are completed. [5] **Note:** Credits earned as a Kenkyusei (research student) do not count toward ICU's residency requirement, and coursework does not count toward a degree. [2]

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)
- [5] `0.476808` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `2.407`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the information regarding senior thesis deadlines: **Official Schedule** The official schedule for the Senior Thesis course (STH391) is available on the ICU Portal. You can access the syllabus and registration details via the following links: * **Fall 2026:** [1] * **Winter 2026:** [2] **Expected Deadlines** * **Submission Deadline:** The thesis must be submitted before **4:00 p. m. ** on the deadline date. Late submissions will not be accepted [3]. * **Update Frequency:** Detailed instructions and the specific deadline date are updated on the ICU Portal [3]. * **Relief Application:** If you are a student who did not apply for relief in October 2025, you may apply for relief. The relief application schedule is available on the ICU Portal [4]. **Note:** Access to specific schedule fields (e. g. , exact start/end times) may be limited to users with an ICU Net ID [5].

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `12.425`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state the submission deadlines for the Senior Thesis (卒業論文) in the ICU Handbook, specifically mentioning dates like June 3, 2024, and June 2, 2025, along with instructions to check the ICU Portal for the official schedule. These passages directly address the user's concerns about deadlines and where to find the schedule.

Answer:

Based on the provided evidence, here are the details regarding senior thesis deadlines: **Where to find the official schedule:** You should check the **ICU Portal** for the official schedule, as the ehandbook may not contain the most up-to-date dates. * [1] states: "詳しくは4月5日(金)にICU Portal にお知らせを出しますので、確認 して ください。" (Please check the ICU Portal for the notice on April 5th). * [2] confirms: "詳しくはICU Portalにお知らせを出していますので、確認してください。" (Please check the ICU Portal for the notice). * [4] provides a sample schedule showing the "First Drafts of July Graduates' Senior Theses Due in Advisors' Offices" on May 1st and the "Deadline for Submission of July Graduates' Senior Theses" on June 6th. **Expected thesis-related deadlines:** The specific submission deadlines depend on the graduation month, but the general rule is consistent across the evidence: * **General Rule:** The final submission deadline is the last day of the month following the graduation month. * For **2024** graduates: The deadline is **June 3, 2024** (16:00). * For **2025** graduates: The deadline is **June 2, 2025** (16:00). * [1] specifies: "2024 年5月2日 (木) 〜6月 3 日 (月) の期間内に提出して下さい。提出最終締切日2024 年6月 3 日 (月) 16:00以降は、事情の如何にかかわらず一切受け付けません。" * [2] specifies: "2025 年5月 8 日(木)〜6月 2 日(月)の期間内に提出して下さい。提出最終締切日2025 年6月 2 日(月) 16:00以降は、通信環境によるネットワークエラーや PCトラブル等が起きた場合を含め、事情の如何にかかわらず、締切時間以降は一切提出を一切受け付けません。" * **Consequences of missing the deadline:** * If the deadline is missed, the graduation becomes impossible for that cohort. * [1] states: "事故等不測の事態、あるいは卒業論文の不備等により提出が期限に間に合わない場合は、2024 年7月卒業は不可能となります。" (If the submission is delayed due to unforeseen circumstances or errors, 2024 July graduates will be impossible to graduate). * [2] states: "2025 年7月卒業は不可となります。" (2025 July graduates will be impossible to graduate). * [3] states: "提出が期限に間に

Retrieved / selected chunks:
- [1] `0.967839` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.965771` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.959988` `ehandbook_page` ehandbook - ４卒業論文 (`DOC-000158::structural_fallback_v1::P0000`)
- [4] `0.919208` `pdf_document` PRINT (`PDF-200461efa59db966fe::structural_fallback_v1::P0000`)
- [5] `0.901401` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-2B / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `2.53`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the following procedure should be checked before planning courses after a leave of absence: 1. **Tuition and Fee Status**: If the leave of absence request is submitted after the corresponding deadline (e. g. , October 31 for the Winter Term), the tuition and facilities fees may be automatically withdrawn from the student's account [4]. 2. **Visa Requirements**: If you do not hold Japanese citizenship and need a student visa, you must contact the Educational Affairs Group (EAG) by email to receive guidance on obtaining a Certificate of Eligibility (CoE) [4]. 3. **Health Certificate**: If you are returning due to an infectious disease or other illness, you must consult with your faculty to provide proof such as a doctor's certificate or prescription record books [3]. 4. **Medical Institution Information**: You should consult the Medical Institution Information page for specific details regarding campus health management, emergency responses, and health exams [5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-2B / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `6.937`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages do not contain information about procedures or office requirements for returning to ICU after a leave of absence. Passage [3] mentions tuition withdrawal for leave of absence but does not address re-enrollment procedures or required checks before planning courses.

Answer:

Based on the provided evidence, there is no specific procedure or office information regarding the requirements to return to ICU after a leave of absence. The retrieved passages do not contain information about procedures or office requirements for returning to ICU after a leave of absence. Passage [3] mentions tuition withdrawal for leave of absence but does not address re-enrollment procedures or required checks before planning courses. **Answer:** The provided evidence does not contain information about procedures or office requirements for returning to ICU after a leave of absence.

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `0.587943` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.172311` `web_page` 採用ご担当者様へ｜国際基督教大学（ICU） (`DOC-001693::structural_fallback_v1::P0000`)
- [5] `0.164114` `web_page` 遺贈・相続財産からのご寄付について | Giving to ICU | Friends of ICU (`DOC-000416::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `1.364`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, there is no official information or permission regarding a specific deadline, procedure, or requirement for students to find counseling or student support at ICU. The available evidence only lists a course record for "Counseling" (Course No: PSY272) and a general webpage describing the ICU Health Care Office's services, but it does not contain the specific rules or procedures you are seeking. [1], [2], [3], [4], [5]

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `5.082`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passage explicitly states that students can find counseling services at ICU and mentions the existence of a 'Counseling Center' (ICU Counseling Center) for general mental health and career counseling, directly addressing the user's need for official information on counseling and student support.

Answer:

You can find official information about counseling and student support at ICU through the following official channels: * **ICU Counseling Center (General Mental Health & Career):** The Health Care Office provides counseling services for general mental health and career paths. You can consult via face-to-face, telephone, chat, or social media. [1] * **Counseling, Human Rights Consultation, and Health Services:** The Health Care Office organizes student, faculty, and staff annual check-ups and provides reasonable accommodations for students with disabilities through the Learning Accessibility Services (LAS) office. [2] * **Campus Life & Career Support:** The Health Care Office supports student life and career development, including career path support and hiring manager contacts. [3] * **Counseling Center Information:** Detailed information on the Counseling Center, including specific services and contact methods, is available on the ICU campus life health page. [5] For specific details on how to access these services, please refer to the official ICU Health Care Office for Students website or the Campus Life & Career section.

Retrieved / selected chunks:
- [1] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [2] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [3] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)
- [4] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [5] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `1.643`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the process for requesting exam accommodations is as follows: 1. **Initial Consultation**: You must first consult with your **course instructor** and the **Learning Accessibility Services** [1]. 2. **Official Support Page**: The official support page to look for is the **"Basic Policy for Supporting Students with Disabilities"** [1]. 3. **Specific Actions**: You should request or arrange accommodations such as **extended exam time limits** and a **separate room** for taking an exam [3]. **Conclusion**: You should start by contacting your course instructor and the Learning Accessibility Services, and refer to the "Basic Policy for Supporting Students with Disabilities" for details.

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `4.615`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students should first meet with Learning Accessibility Services (LAS) staff to discuss their needs and that the LAS office handles exam accommodations. They also mention that reasonable accommodations are provided in accordance with the 'Basic Policy for Supporting Students with Disabilities' for students with disabilities or chronic illnesses.

Answer:

To start, you should first meet with Learning Accessibility Services (LAS) staff to discuss your needs [2]. After submitting the necessary documents, such as a medical certificate or a request form signed by your advisor, the LAS office will deliver your accommodation requests to your professors [2]. The official support page to look for is the "For Students" section on the CTL English website (https://office.icu.ac.jp/ctl/en/snss/for_students.html) [1]. This page outlines that reasonable accommodations are provided in accordance with the "Basic Policy for Supporting Students with Disabilities" [3].

Retrieved / selected chunks:
- [1] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [2] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [5] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `2.612`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer for your ICU graduate school IT account situation: **Account Expiration** Your ICU Net ID and associated services (including Mail, Google Workspace, and Portal) will expire on **March 31, 2026** [1]. **Action Required** If you need to continue using these services after graduation, you must **exchange your email address** for one you can use post-graduation. Continuing to use the @icu. ac. jp email address will result in email forwarding stopping and inability to log into Google [1]. **Recommendation** We recommend creating a new account using an email address available after graduation rather than using the @icu. jp address [1]. **Note on Passwords** While the provided evidence details account expiration and email forwarding rules, it does not explicitly state the specific deadline or procedure for changing your ICU Net ID password after graduation. You should contact the helpdesk (helpdesk@icu. jp) for password change instructions [3]. **Note on Data Backup** You are advised to backup your necessary files (specifically Gmail and Google Drive Files) before graduation [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-2B / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `4.841`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage DOC-001520 explicitly addresses the user's question by stating that accounts (ICU Net ID, Portal, Mail, etc.) expire on March 31, 2026, and provides instructions on how to exchange emails after graduation.

Answer:

Based on the provided evidence, here is the information regarding your IT accounts after graduation: **Account Expiration** Your current ICU account (ICU Net ID, Portal, Mail, Google Workspace, etc.) will expire on **March 31, 2026** [1]. **Recommended Actions** * **Do not use your @icu.ac.jp email** for your new graduate school account, as forwarding stops and you cannot log in to Google after graduation [1]. * **Backup your data**: Download all necessary files from Google Drive and Gmail before your account is deleted [1]. * **Create a new account**: New accounts will be issued after your matriculation day [4]. * **Create App Passwords**: If you need to access services like Google Drive or Gmail, create an app password using the "Create and manage app passwords" feature [4]. **Contact Support** If you need to change your password or have forgotten it, contact the helpdesk at **helpdesk@icu.ac.jp** [2][3].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-2B / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `4.23`
Answer mode: `remote_model`

Answer:

JLP のレベル分けや履修方法について、公式情報を確認するには以下の公式リンクを参照してください。 1. **JLP 科目の履修条件と PT（テスト）の概要** * **ELA 生**：[1] によると、JLP 科目の履修を希望する ELA 生は、JLP Placement Test（PT）を受験する必要があります。 PT の実施時期（3 月・8 月）と、2026 年 3 月の PT サイトアクセス方法（Google Classroom）が記載されています。 * **総合型選抜（EJU）で入学した学生**：[1] によると、JLP 科目の履修を希望する学生は、JLP Placement Test（PT）を受験する必要があります。 2. **JLP の詳細情報と公式ウェブサイト** * 日本語教育プログラム（JLP）の詳細な情報やコースの概要については、[2] に記載されている公式ウェブサイト（https://www. icu. ac. jp/academics/undergraduate/jlp/）および Google Sites（https://sites. google. com/info. jp/jlp/）を参照してください。 * 入学案内や PDF 資料については、[3] に記載されている PDF 版入学案内（ICU2026_booklet_web. pdf）や、[4] 記載されている JLP Leaflet（ICU_JLP2025. pdf）を参照してください。 **結論：** 公式情報は [1] の「ELA 生のための JLP 科目について」および [2] の「Notes for graduate school students who wish to take the JLP courses」に記載されています。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-2B / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `8.939`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that JLP placement levels are determined by the results of the JLP Placement Test (PT) and that students are categorized into different levels (Program A, B, C) based on their Japanese proficiency. The text also mentions that course offerings and syllabi are available on the ICU website and the JLP website.

Answer:

日本語プログラム（JLP）の履修方法とレベル分けについて、以下の公式情報で確認できます。 **1. 履修方法とレベル分け** 学生は、プレースメントテスト（PT）の結果に基づき、＜外国語としての日本語＞を学ぶトラックと＜第1言語/継承語としての日本語＞を学ぶトラックのいずれかで学びます。PTの結果により、プログラム A、B、C のいずれかのレベルに分類されます。 **2. 履修登録時期とテスト実施** - **実施時期**: 毎年 2 回（3 月・8 月）。春学期および秋学期の履修登録開始前に実施されます。 - **3 月実施分**: 2026 年 3 月 23 日（月）10:00（UTC+9）〜3 月 27 日（金）10:00（UTC+9）の間に Google Classroom で PT を受験し、結果は 4 月 1 日（水）午後 7 時に発表されます。 - **8 月実施分**: 2026 年度春学期が終わる前に ICU portal で公開されます。 **3. 公式情報へのアクセス** - **ICU 公式サイト**: https://www.icu.ac.jp/academics/undergraduate/jlp - **JLP 詳細ページ**: https://www.icu.ac.jp/academics/undergraduate/jlp/ - **Google Classroom**: https://classroom.google.com/（クラスコード：uup64sfc） - **JLP 主任**: 小澤 伊久美（ERB II Rm.104） - **連絡先**: jlp@icu.ac.jp - **営業時間**: 月〜金 9:00–11:45 と 12:45–16:00 [1] [2] [3] [4] [5]

Retrieved / selected chunks:
- [1] `0.519613` `web_page` 日本語教育プログラム｜国際基督教大学（ICU） (`DOC-001756::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [5] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-2B / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `1.775`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the schedule for these events is available on the university's official website. * **Chapel Hour** is explicitly listed as a scheduled activity in the "Commitments and History" section, held every Tuesday during the lunch period [2]. * **Christianity Week** is described as a public event within the university calendar [5]. * For the specific timing of Chapel Hour, the "Religious Center" webpage provides the exact schedule: "Tues days during the term from 1:20 p. m. to 1:50 p. " [4]. Therefore, you should check the university calendar or the specific "Chapel Hour" page on the ICU website for the full schedule.

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### Qwen/Qwen3.5-2B / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `5.777`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 4 explicitly defines 'Chapel Hour' as a weekly event for the ICU community and provides the specific schedule (Tuesday, 1:20-1:50 PM), directly addressing the user's question about the nature and location of the event. Passage 7 also mentions 'Chapel Hour' in the context of the academic calendar, confirming its status as an academic event.

Answer:

Based on the provided evidence, here is the answer to your question: **Are Chapel Hour and Christianity Week academic or campus-life events?** Both are **academic events** organized by the ICU Religious Center. While they are part of the campus life, their primary purpose is to support the academic community's moral and religious development through structured worship and instruction. **Where to check the schedule:** You should check the **ICU Academic Calendar** for the specific dates and times. * **Chapel Hour:** The evidence states it is held every Tuesday during the lunch period (1:20–1:50 PM) in the University Chapel [1]. * **Christianity Week:** This is held in May every year and includes a full week of daily programs, including addresses in faculty homes and group discussions [3]. **Summary:** * **Chapel Hour:** Academic event (Weekly, Tuesdays, 1:20–1:50 PM). * **Christianity Week:** Academic event (Annual, May, includes faculty homes and group discussions). * **Action:** Consult the **Academic Calendar** for the exact schedule and dates [5].

Retrieved / selected chunks:
- [1] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [2] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [3] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [4] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [5] `0.129843` `web_page` ONE YEAR at ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001560::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `3.196`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the specific dates for the Spring 2026 registration period and advisor interview timing are not explicitly stated in the text. The evidence only provides the **registration period** (April 9–10, 2026) and the **interview timing** (April 9–10, 2026) for the **AY2026 Autumn Term** students [1], [2], [3]. For **Spring 2026** students, the evidence indicates that the registration period and interview timing are **April 11–20, 2026** [3], [4]. However, the specific details regarding the advisor interview timing for Spring 2026 are not explicitly listed in the provided text, only the general registration period and a note about the office closing on April 11 and 18 [3]. **Conclusion:** * **Registration Period:** April 11–20, 2026 [3], [4]. * **Advisor Interview Timing:** Not explicitly stated in the provided evidence for Spring 2026; only the general period is given [3], [4]. **Recommendation:** You should check the official portal for AY2026 Spring Term Course Registration Procedures [1], [2], [3], [4] for the most accurate and updated information, as the specific interview times may vary or be subject to change.

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `7.039`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages DOC-000751 and DOC-001000 explicitly provide the registration period (April 9-10) and advisor interview timing (April 9-10) for Spring 2026, directly answering the user's question.

Answer:

Based on the provided evidence, here are the specific dates for the Spring 2026 registration period and advisor interview timing: **Registration Period:** * **Online Input:** April 9 (Thu) 9:00 ~ April 10 (Fri) 14:30 [1] * **Late Registration Period:** April 11 (Sat) 9:00 ~ April 20 (Mon) 11:00 [2] **Advisor Interview Timing:** * **Initial Interview:** April 9 (Thu) 10:00 ~ April 10 (Fri) 16:00 [1] * **Online Approval:** April 9 (Thu) 10:00 ~ April 10 (Fri) 15:30 [1] * **Late Registration Interview:** April 11 (Sat) 9:00 ~ April 20 (Mon) 11:00 [2] **Important Notes:** * New students from the Autumn Term must check "Campus Pathfinder" in Moodle instead of this portal [1]. * The office is closed on April 11 (Sat) and April 18 (Sat) [2]. * Students who miss the initial period must complete registration via the Late Registration procedure [2]. * Late Registration requires a ticket purchase (3,000 yen) and payment at the Educational Affairs Group office [3]. * The Pre-Registration lottery results remain valid for the Late Registration period [4].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `1.631`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the system **cannot** tell you exactly how many more credits you personally need to graduate early. The evidence explicitly states that the specific number of transferable credits and the final count required for graduation are determined after the course evaluation and approval process. * **Evidence [2]** states: "How many and which credits are transferrable will not be confirmed until then. " * **Evidence [5]** states: "The number of credits that may be transferred is determined after the course evaluation and the approval of the the Associate Dean of the College of Libera. " Therefore, the exact number of additional credits needed is not known until the transfer application is processed and approved.

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `8.653`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages explain that credits can be transferred and list specific course types eligible for transfer (e.g., Health Science, PE, Summer Abroad, Reciprocal Credits). However, none of the passages explicitly state the exact number of additional credits required to graduate early, nor do they provide a calculation method based on the user's specific transferred credits.

Answer:

Based on the provided evidence, the system cannot tell you exactly how many additional credits you need to graduate early. The evidence confirms that ICU accepts credit transfers for students who have completed courses at other universities, provided the grades are 70/100 or higher and the courses are approved as equivalent to ICU graduation requirements [3]. However, the specific number of additional credits required to graduate early is not explicitly stated in the text. Furthermore, the evidence does not provide a calculation method based on the specific number of credits you transferred, nor does it list a specific deadline or rule for determining early graduation [5]. Therefore, the retrieved evidence is insufficient to answer the question with a specific number or calculation method.

Retrieved / selected chunks:
- [1] `0.975343` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [2] `0.947186` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [4] `0.89534` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [5] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `2.548`
Answer mode: `remote_model`

Answer:

教育事務グループへの連絡先や公式ページを確認する方法は以下の通りです。 1. **ICU Portal** 日本語教員養成プログラム履修証明書の発行を希望する学生は、卒業年度最終学期登録日から登録変更期間終了日までの間に申請する必要があります。 詳細は [2] に記載されている ICU Portal のお知らせを確認してください。 2. **教務グループ（教育事務グループ）窓口** 申請書による履修登録の場合、用紙は教務グループ窓口にて登録日の 1 週間前から配布されます。 問い合わせ先は [1] と [2] で記載されている ea-group@icu. ac. jp です。 3. **icuMAP** 教職課程履修の手引や登録変更の確認、卒業要件の確認など、重要な情報を把握するために [5] で記載されている icuMAP を利用してください。 [1] [2] [3] [5]

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `5.916`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that for '履修登録' (enrollment registration), the student must register on the 'Registration Website' (Registration Web) and check the results in the 'Registration Results' section. They also provide specific contact emails (ea-group@icu.ac.jp) and mention that detailed procedures are available on the ICU Portal.

Answer:

教育事務グループへの連絡先は、以下の公式ページで確認できます。 * **ICU Portal**：詳細な手順や連絡先情報（例：ea-group@icu.ac.jp）が掲載されています。 [2] * **Registration Website**：履修登録の結果確認や、登録変更後の確認画面（Confirm画面）が利用可能です。 [3] * **ICU Portal**：履修登録の日程や、登録変更期間終了後の登録変更の制限事項が記載されています。 [4] * **ICU Portal**：2025年度秋学期の科目登録に関する諸注意（登録日、Late Registration、登録変更の制限など）が掲載されています。 [5] **結論：** 履修登録の連絡先や詳細情報は、**ICU Portal**および**Registration Website**で確認できます。特に登録変更後の確認方法や、登録変更期間終了後の登録変更の制限については、ICU Portalで確認することをお勧めします。

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.438244` `ehandbook_page` ehandbook - 2025.8.26 教務グループからの重要なお知らせ（秋学期登録版） (`DOC-000118::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `2.58`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the **ICU Portal announcement** should be trusted over the chatbot answer regarding the deadline. **Reasoning:** * **Evidence [1] and [2]** explicitly state the deadline for submission is **September 5**. * **Evidence [5]** (in Japanese) confirms the deadline for account expiration is **March 31, 2026**, but this refers to account expiration, not the loan submission deadline. * **Evidence [3] and [4]** instruct students and faculty to check the ICU Portal announcements once a day, confirming that the portal is the primary source for official notices. * **Evidence [5]** explicitly states that if you are a graduating student, you should perform backup and email change operations **by the deadline** (February 10, 2026) to avoid panic, reinforcing the importance of checking the portal for specific deadlines. **Conclusion:** You should trust the ICU Portal announcement. If the chatbot answer differs, it is likely outdated or incorrect. You should immediately check the ICU Portal for the latest official notice to ensure you meet the submission deadline.

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `10.375`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss submission deadlines for loans (DOC-000921, DOC-000933), account expiration dates (DOC-000957), and notification settings for the ICU Portal (DOC-001409, DOC-001436, DOC-001436, DOC-001409, DOC-001532). None of these passages address the specific scenario of conflicting deadlines between a chatbot answer and an ICU Portal announcement, nor do they provide guidance on which source to trust or the next steps to take in such a conflict.

Answer:

Based on the provided evidence, the ICU Portal announcement is the authoritative source for deadlines and account status. **Which source to trust:** You should trust the **ICU Portal announcement** (e.g., [1], [2]) over the chatbot answer. The portal explicitly states that announcements are checked once a day and that email notifications are sent for "Official Announcements" and "Important Announcements" [3]. The chatbot answer [1] and [2] only provide the submission deadline for loans, which is a specific administrative task, not the overarching account expiration date. **What to do next:** 1. **Check the ICU Portal daily:** You must check the ICU Portal announcements once a day to verify the current status of your account and any upcoming deadlines [3]. 2. **Backup your files:** If your account is expiring (e.g., by March 31, 2026), you must back up your necessary files (emails, Google Drive files) before the deadline to avoid losing access [5]. 3. **Contact the Alumni Office:** If you need to apply for a new student email address after the application deadline (February 10, 2026), you must contact the Alumni Office via email (icualumni.office@icu.ac.jp) rather than the main ICU email [5]. **Summary:** * **Trust:** ICU Portal announcement [1], [2], [3], [5]. * **Action:** Check portal daily [3]; backup files if account expires [5]; contact Alumni Office for new emails [5].

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `1.377`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the course **Logic Programming** is scheduled for **Autumn 2026** (Term 2) and is taught by **Tammo M. REISEWITZ**. To check official course information, you should visit the **ICU Campus Map** at **https://campus. icu. ac. jp/icumap/ehb/PreviewSyllabus. aspx? year=2026&term=2&regno=21219**. **Citations:** [2] [3]

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-2B / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `4.048`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state the course name (Logic Programming), term (Autumn 2026), instructor (REISEWITZ, TAMMO M.), and provide a URL for official course information.

Answer:

You can take **Logic Programming** in **Autumn 2026** at **ISC321**, taught by **TAMMO M. REISEWITZ**. To check official course information, access the syllabus at: [1] **Note:** The provided evidence does not contain information regarding the specific location (building or room) for the course.

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [3] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)
- [4] `0.945197` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0006`)
- [5] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `1.849`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the grade evaluation for the "Statistical Information Literacy" course (Course No: GES039) varies by term and includes the following components: * **Spring 2026 (Term 1):** Exam (20%), Report (40%), Daily quiz (20%), Class participation (20%) [1]. * **Autumn 2026 (Term 2):** Active participation in classes (15%), Application workshops (35%), End of term data analysis project (50%) [2]. The syllabus requires students to learn basic data analysis skills for social sciences, including statistics, sampling methods, and data processing using computers [4]. It also covers topics such as probability, distributions, and sample data analysis [5].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-2B / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `5.035`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly list the grade evaluation components (Exam, Report, Daily quiz, Class participation) and the work requirements (data analysis project, workshops, lectures) for the Statistical Information Literacy course.

Answer:

The grade for the Statistical Information Literacy course is evaluated through four components: Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. The syllabus requires students to actively participate in classes, complete application workshops, and finish an end-of-term data analysis project [3]. Additionally, the course focuses on teaching basic data analysis skills for social sciences, including statistics, sampling methods, and data processing, while utilizing computers [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [3] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-2B / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `0.896`
Answer mode: `remote_model`

Answer:

MIURA 先生は、日本語の授業（J2: Japanese）を担当しています。 [3] [4] [5]

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `6.042`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Multiple search results explicitly state that MIURA, Ayano is the instructor for the J2: Japanese course (JLP012) in Spring 2026, Autumn 2026, and Winter 2026. The text also specifies the target level as CEFR A2.1.

Answer:

MIURA, Ayano 先生は主に以下の日本語授業を担当しています。 * **J2: Japanese (JLP012)** * 担当学期：春学期、秋学期、冬学期（各 1 単位）[1][2][3] * 目標レベル：CEFR A2.1（会話と文書における言語活動に焦点）[1][2][3] * 前提：日本語 J1 または同等レベルの修了者 [1][2][3] * **Special Japanese Kanji 1 (JLP071)** * 担当学期：春学期、冬学期（各 1 単位）[5] * 対象：母語・第一言語・継承語学習者向け [5] * 内容：約 600 字の漢字の読み書きと熟語の学習 [5] ※注：春学期の「Vocabulary and Kanji for Intermediate Learners of Japanese 2 (JLP087)」では MIURA, Ayano 先生が共同講師（Instructor）として名を連ねていますが、この授業の主要な担当は J2: Japanese と Special Japanese Kanji 1 です。

Retrieved / selected chunks:
- [1] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [2] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [4] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)
- [5] `0.205934` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `3.726`
Answer mode: `remote_model`

Answer:

登録が完了していない可能性が高いですが、以下の手順で確認してください。 1. **登録結果を確認する** 登録した科目が「Registration Result」に表示されているか確認してください。 [1] によると、登録変更後も登録結果を必ず確認することの重要性が強調されています。 2. **承認状況を確認する** 登録手続きが完了していない場合、アドヴァイザーによるオンライン承認が下りているか確認する必要があります。 [1] 履修登録では、アドヴァイザーにオンライン承認を受けるまで登録手続きは完了していません。 3. **遅延登録の期限を確認する** 登録日に登録が完了していない場合は、Late Registration 期間に登録する必要があります。 [1] 登録日に登録が完了していない学生は、Late Registration 期間に登録をおこなってください。 4. **操作の確認** 「SAVE」ボタンの押し忘れによる登録や変更漏れが発生している可能性があります。 [5] よくある質問で、登録や変更を行った後は必ず「Registration Results」の画面にアクセスして確認するよう推奨されています。 5. **追加登録の可否** 予備登録で当選しただけでは手続は完了しません。 [3] 後日、登録日にあらためて【履修登録】をおこなう必要があります。 **結論：** 登録結果に反映されていない場合は、[1] 履修登録の承認フローや[5] 登録変更漏れに関する注意点を確認し、[1] 遅延登録の期限内に申請する必要があります。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `5.704`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that after selecting subjects on the registration site, the user must check the 'Registration Result' on the website to confirm completion, and that the process is not complete until the advisor's online approval is received.

Answer:

登録が完了していない可能性が高いです。以下の手順で確認してください。 1. **登録結果を確認する**: 登録した科目が「Registration Result」の画面に反映されているか確認してください [1]。 2. **承認待ちの状況**: 登録手続きは、アドヴァイザーとの面談およびオンライン承認が完了するまで**完了していません** [2]。 3. **遅延登録の期間**: 登録日に登録が完了していない場合は、Late Registration 期間中に手続きをおこないください [2]。 もし「Save ボタンを押しても進むことができない」という場合は、講義科目の登録希望科目数を選択しているか確認してください [5]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `4.51`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer regarding textbook purchases for Spring 2026: **Where to check official purchase information:** You should check the "Online Textbook Purchase Guide" and "List of Textbooks" links provided in the notices. * **English:** https://drive. google. com/file/d/14N98Gmiv98kUA2vcQwoiCL1MhVlUm4DN/view? usp=drive_link * **Japanese:** https://drive. com/file/d/1yNd-NQF_TgsKW14aJ8rUI72aZYvLCovR/view? usp=drive_link * **List of Textbooks:** https://docs. com/spreadsheets/d/1zQdbj_4R6DK3h9nUM3fquDaB0uzQAstx/edit? usp=sharing&ouid=116249504418958879193&rtpof=true&sd=true **Details the chatbot should not expect:** The evidence does not contain information about specific course details (like syllabus content or instructor names) that would be relevant to textbook purchasing. The provided text only lists general purchase rules and links. **Additional Context from Evidence:** * **Purchase Dates:** Textbooks are available from Monday, April 6 to Monday, April 20 [3][4]. * **Discount:** Textbooks are sold at a 10% discount off the list price, excluding digital textbooks [3][4]. * **Pickup:** You can pick up textbooks at an on-campus location [3][4].

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `6.232`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage DOC-000841 and DOC-001135 explicitly state the official purchase window (April 6-20), the method (2D code/URL), and the discount details, directly answering the user's question about where to check and what to expect.

Answer:

Based on the provided evidence, here is the answer to your question: **Where to check official textbook purchase information:** You should check the **Spring AY2026 Textbook Purchase** portal notice. The official purchase window is from **Monday, April 6 to Monday, April 20**. You must complete the purchase using a **2D code or URL** provided in the guidance document. **Details you should not expect the chatbot to know:** * **Pickup specifics:** While you can pick up textbooks at an on-campus location, the specific **pickup dates, times, and locations** are not listed in the chatbot's current evidence. You must refer to the guidance document for these details. * **Shipping fees:** The chatbot evidence states that shipping fees apply for home delivery, but it does not provide a specific fee amount or a method to calculate them. * **Digital vs. Physical distinction:** The evidence explicitly states that textbooks are sold at a 10% discount off the list price **excluding digital textbooks**. **Citations:** [1]

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)
- [4] `0.021492` `portal_notice` 一般教育ハンドブック 2026 (`DOC-001050::structural_fallback_v1::P0000`)
- [5] `0.016721` `portal_notice` General Education Handbook 2026 (`DOC-000786::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `1.474`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, there is no information specifying which courses are **mandatory** for all students upon arrival at ICU. The available records list various elective or specialized courses (e. g. , Global Governance, Introduction to Business Administration, Introduction to Capital Markets, Introduction to Christianity, English Communication) with specific terms, instructors, and registration numbers, but none are designated as mandatory prerequisites. The evidence explicitly states that reasonable accommodations are provided for students with disabilities or chronic illnesses, but it does not outline a mandatory course list for all incoming students. **Conclusion:** The retrieved ICU evidence is not sufficient to determine the mandatory courses for all students.

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `7.743`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that graduation requirements include taking one Health Science course and three Physical Education exercises (PE Exercise I, II, and III), totaling one credit each, as mandatory graduation requirements.

Answer:

Based on the provided evidence, the mandatory courses you must take after enrolling at ICU are: 1. **One Health Science course** (Health Science): This course is worth one credit and covers lectures on health and physical education [1]. 2. **Three Physical Education exercises** (PE Exercise I, II, and III): These are mandatory practical exercises worth one credit each (totaling one-third of a credit per course) [1]. These are explicitly listed as graduation requirements in the ICU undergraduate health education program [1]. **Note:** While the evidence confirms these are mandatory for graduation, it does not specify a deadline for completing them or a specific course schedule beyond the requirement to take them.

Retrieved / selected chunks:
- [1] `0.967899` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.959535` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.948728` `web_page` 入学選考｜国際基督教大学（ICU） (`DOC-001714::structural_fallback_v1::P0004`)
- [4] `0.936401` `web_page` Graduation Requirements｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001623::structural_fallback_v1::P0000`)
- [5] `0.932944` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-2B / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `1.167`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, there is no information indicating a mandatory course requirement for students entering the ICU. The available course records (e. g. , [1], [2], [3], [4], [5]) are listed as available options for specific terms (Autumn 2026, Winter 2026) and do not specify any mandatory prerequisite courses for admission. Therefore, the retrieved ICU evidence is not sufficient to determine a mandatory course.

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `7.445`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that the mandatory course requirement is the 'English for Liberal Arts Program' (ELA) for students entering in 2025 and thereafter, and 'Japanese Language Program' (JLP) for those entering in 2024 or earlier. This directly answers the user's question.

Answer:

Based on the provided evidence, the mandatory course requirement depends on your entry year: * **For students entering in 2025 and thereafter:** The mandatory language course is the **English for Liberal Arts Program (ELA)** [1]. * **For students entering in 2024 or earlier:** The mandatory language course is the **Japanese Language Program (JLP)** [1]. Additionally, for students entering in 2025 and later, the specific credit requirements for Languages and Specialized Courses vary according to the student's language proficiency [3].

Retrieved / selected chunks:
- [1] `0.998774` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [2] `0.994677` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [3] `0.992031` `web_page` Graduation Requirements｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001623::structural_fallback_v1::P0000`)
- [4] `0.956553` `web_page` 入学選考｜国際基督教大学（ICU） (`DOC-001714::structural_fallback_v1::P0004`)
- [5] `0.920361` `web_page` FAQ｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001598::structural_fallback_v1::P0006`)

### Qwen/Qwen3.5-2B / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `3.409`
Answer mode: `remote_model`

Answer:

ICUに入学後、必ず履修しなければならない科目は、入試選抜によって異なります。 - **一般選抜、総合型選抜<4月入学専願>、EJU利用、学校推薦型選抜<4月入学専願>**：卒業要件上の必修語学科目は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）となります [5]。 - **総合型選抜<4月入学>外国教育制度利用（帰国生）、総合型選抜<4月/9月入学>EJU利用**：卒業要件上の必修語学科目は「日本語教育プログラム」（JLP: Japanese Language Program）となります [5]。 公式ページで確認すべき公式ページは、**「ICUの入試について」**です [5]。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `5.164`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage DOC-001762 explicitly states that after entering ICU, students must take 'Health Science' and 'PE Exercise' as mandatory subjects. It also mentions that after completing these mandatory sports subjects, students may choose other subjects. This directly answers the user's question about mandatory subjects and provides the context for the 'formula page' (structural fallback).

Answer:

ICUに入学した後、必ず履修しなければならない科目は「保健体育」です。これは卒業要件上の必修科目として、保健体育プログラムの講義科目である「健康科学（Health Science）」と実技科目である「PEエクササイズⅠ・Ⅱ・Ⅲ」を履修することから明かされています [1]。 この公式ページは「保健体育｜国際基督教大学（ICU）」です。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `3.945`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the answer to your question: **Required Courses:** According to the undergraduate academic policy, ICU students must take the following courses as graduation requirements: 1. **Health Science (保健体育/健康科学):** One credit course covering lectures on health and physical education. 2. **Physical Education Exercise I, II, and III (PEエクササイズⅠ・Ⅱ・Ⅲ):** Three practical exercise courses worth one credit each (totaling one-third of a credit per course). **Official Page:** The official page for these courses is the **Health Education** page on the ICU website: * **URL:** https://www. icu. ac. jp/en/academics/undergraduate/healtheducation * **Japanese URL:** https://www. jp/academics/undergraduate/healtheducation **Note:** While the ICU International Office Instagram account ([4]) and the ICU Service Learning Center Instagram account ([5]) provide information on study abroad programs and events, they do not list the mandatory graduation courses. **Citations:** [1] [2]

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-2B / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `6.612`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages DOC-001626 and DOC-001762 explicitly list the mandatory courses for ICU students (Health Science and Physical Education Exercise I, II, III). No other passages provide information on official pages for this specific query.

Answer:

进入 ICU 后必须修读的必修课程包括： 1. **健康科学（Health Science）**：作为毕业要求，ICU 学生必须修读一门健康科学课程（1 科目，1 学分），包含健康与体育教育讲座。 2. **PE 实技科目**：必须修读三门实技课程（Physical Education Exercise I, II, III），共计 3 种目，1 学分（每种目 1/3 学分）。这些课程涵盖健康、安全及提升终身生活质量的知识技能。 3. **体育理论（Physical Education）**：若学生希望获得日本教员的资格认证，则需在 ICU 在学期间修读该科目。 **官方页面指引：** * **英文页面**：请访问 [1] 或 [3] 查看详细的课程要求及毕业政策。 * **日文页面**：请访问 [2] 查看详细的课程要求及毕业政策。 * **其他信息**：如需了解图书馆、服务学习中心或国际办公室的信息，可访问 [4]。 **注意**：根据 [5]，ICU 提供多种选修课程供学生根据兴趣选择，但上述三项为毕业必须修读的必修科目。

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-2B / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.508`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `12.027`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss the general use of ChatGPT for academic writing and ICU's policy on generative AI, but none of them explicitly state whether using ChatGPT for a university graduation thesis (卒論) is permitted or allowed. The policy mentions that AI-generated content should not be presented as if it were self-created, but does not specify the permissibility of using AI for thesis writing.

Answer:

ICUの学内サイト（CTL）の「レポート・卒論に役立つコンテンツ」セクションには、卒論作成のサポートツールやライティングサポートデスクの予約方法が記載されていますが、生成系AI（ChatGPT）の使用について具体的な許可規定や制限事項は明記されていません [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデミックプランニングサポート」セクションでは、学生が自分自身で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められていると記載されています [4]。 学内サイト（CTL）の「アカデ

Retrieved / selected chunks:
- [1] `0.29972` `pdf_document` FD Newsletter Vol. 29 (`PDF-59e302e2a90f4dbe9f::structural_fallback_v1::P0015`)
- [2] `0.226099` `pdf_document` FD Newsletter Vol. 29 (`PDF-59e302e2a90f4dbe9f::structural_fallback_v1::P0016`)
- [3] `0.055311` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0009`)
- [4] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.219`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-2B / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `9.592`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss ICU's support for senior thesis writing, English requirements, and plagiarism policies, but none explicitly state whether ChatGPT is allowed or prohibited for use in the thesis. The policy on plagiarism (P0012) and AI policies (P0012) are mentioned but do not address the specific use of generative AI tools like ChatGPT.

Answer:

Based on the provided evidence, there is no explicit confirmation or prohibition regarding the use of generative AI tools like ChatGPT for the senior thesis at ICU. The available policies and documents focus on the following aspects: * **Thesis Support:** The Center for Teaching and Learning (CTL) offers writing support, including a "Writing Support Desk" that uses dialogue with student tutors to encourage students to formulate solutions [1], [4]. * **Language Requirements:** Over 40% of students write in English, and the curriculum emphasizes bilingual education [1], [2]. * **Plagiarism and AI:** While a plagiarism policy (P0012) exists, it does not specifically address the use of generative AI tools like ChatGPT [2]. * **Application Requirements:** A copy of the senior thesis is required for application documents, but the specific content of the thesis (e.g., whether it must be original or generated by AI) is not detailed in the provided text [3]. **Conclusion:** The provided evidence does not contain specific rules or policies that explicitly allow or prohibit the use of ChatGPT for the senior thesis. Therefore, the answer is that the policy is not explicitly stated in the retrieved documents.

Retrieved / selected chunks:
- [1] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [2] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [3] `0.419053` `web_page` FAQ｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001598::structural_fallback_v1::P0013`)
- [4] `0.440951` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0006`)
- [5] `0.360039` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0046`)

### Qwen/Qwen3.5-2B / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `3.28`
Answer mode: `remote_model`

Answer:

不可以。 根据提供的证据，ICU 明确规定了关于生成式 AI 的使用政策。 [2] 明确指出：“Plagiarism, cheating, and other forms of academic dishonesty will not be tolerated and will be punished according to ICU regulations. Students must also abide by the ICU Generative AI policies. The unauthorized and unspecified use of generative AI in any stage of writing your senior thesis, and presenting the work that is produced by others including generative AI as the work produced entirely by yourself constitute the breach of ICU policy on academic integrity, and is given an E grade. " 该条款禁止在论文写作中未经授权地使用生成式 AI，且未指定任何例外情况。 因此，在 ICU 的毕业论文中使用 ChatGPT 属于违规使用，将被视为学术不端行为。

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `10.052`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss general academic support services (writing assistance, CTL senior thesis support, IT systems, and Japanese language programs) but do not specifically address the use of ChatGPT for writing ICU graduation theses. There is no direct evidence confirming or denying the feasibility of using ChatGPT.

Answer:

Based on the provided evidence, there is no direct confirmation or denial of using ChatGPT for writing ICU graduation theses. The available information focuses on general academic support services, including CTL senior thesis support, writing assistance, and IT systems, but does not specifically address the use of generative AI tools like ChatGPT. **Conclusion:** The evidence is insufficient to determine if ChatGPT can be used for writing ICU graduation theses. **Partial Support:** * ICU offers general writing assistance and senior thesis support through the CTL Center, which may include structuring and revising a thesis [1]. * ICU provides IT systems and account management for students, including access to Moodle and Google Classroom for coursework [3]. * ICU offers Japanese language programs (JLP) for undergraduate students, but this does not directly address the use of AI for thesis writing [5].

Retrieved / selected chunks:
- [1] `0.185209` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [2] `0.011115` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [3] `0.008156` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.007907` `web_page` よくある質問 | CTL (`DOC-000450::structural_fallback_v1::P0001`)
- [5] `0.002834` `web_page` 대학소개 | (`DOC-001758::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-2B / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `1.402`
Answer mode: `remote_model`

Answer:

鏑木先生が担当している授業は、[1]および[4]に記載されている「Robotics（ロボティクス）」です。 [1]と[4]は、どちらも「Title: Robotics」で、Instructor: KABURAGI, Takashi（鏑木先生）を記載しており、Term: Winter 2026（第3学期）であることを示しています。

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `3.453`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly states that the instructor TAKAHASHI, Kazuya (鏑木先生) teaches the course 'Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period' (EDU228).

Answer:

鏑木先生が担当している授業は「Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period」（EDU228）です。 [1]

Retrieved / selected chunks:
- [1] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [2] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [3] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)
- [4] `0.000869` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0009`)
- [5] `0.000833` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-2B / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `2.971`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, Mr. Sakamoto (鏑木先生) teaches the following courses: * **Robotics** (Course No: ISC342) [1] * **Operating Systems** (Course No: ISC224) [2] Note: The evidence for Mr. Sakamoto's teaching is incomplete as the provided records only list his name as the instructor for the Robotics and Operating Systems courses, but do not explicitly state his full name or confirm his affiliation with the ICU institution in the text snippets. However, based on the instructor names listed in the records, the above courses are the only ones identified.

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-2B / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `7.648`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages list courses taught by various instructors (Hayashi, Moroi, Matsuo, Kaneko, Fujii, Kaysushima, Tsujita), but none of them are explicitly identified as 'Mr. Sakuragi'. The search query was for 'Sakuragi', but the results do not contain any instructor named Sakuragi.

Answer:

Based on the provided evidence, there is no mention of a course taught by "Mr. Sakuragi" (鏑木先生). The available instructors listed are Hayashi, Moroi, Matsuo, Kaneko, Fujii, Komatsu, and Kaysushima. **Answer:** The provided evidence does not contain information about a course taught by Mr. Sakuragi. The listed instructors are Hayashi, Moroi, Matsuo, Kaneko, Fujii, Komatsu, and Kaysushima.

Retrieved / selected chunks:
- [1] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [2] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [3] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)
- [4] `0.054904` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [5] `0.047869` `course_record` Teaching Practicum in IB World School (`COURSE-2026-Winter-32108-QEED528::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-2B / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `1.557`
Answer mode: `remote_model`

Answer:

To check if your registration is complete, you must verify two conditions on the Registration Website: 1. **Registration Result**: Confirm that your registration result is visible on the "Registration Result" section of the website [1], [2], [3], [4], [5]. 2. **Advisor Approval**: Confirm that you have received online approval from your advisor. This is only considered complete once you see the approval on the website [1], [2], [3], [4], [5]. You must do this on the day of registration or within the Late Registration period [1], [2], [3], [4], [5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-2B / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `5.779`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students must check the 'Registration Result' on the website the next day or after late registration, and also confirm the result whenever they add or drop courses.

Answer:

To verify that your course registration is complete, you must check the "Registration Result" on the website the next day or after a Late Registration period. Additionally, you must confirm the result whenever you add or drop courses. According to the ehandbook for the 3rd semester, students must confirm the registration result on the Registration Website's "Registration Result" section [1]. The same requirement applies to the 2nd and 1st semesters [2], [5]. Furthermore, the ehandbook for Course Registration states that the course registration is not completed until you see your advisor for an interview and receive the advisor's online approval on the Registration Day [3]. Therefore, the process involves checking the "Registration Result" on the website for the next day or after Late Registration, and confirming the result whenever you add or drop courses.

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `148.597`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is how your level is decided and where to check official information: **How the level is decided:** Students are placed in the appropriate course based on the result of a **placement test** [1]. Additionally, for graduate students, an **additional evaluation of Japanese proficiency** will be conducted during the first class sessions, and course levels may be subject to change based on this in-class assessment [3]. **Where to check official information:** For details on the JLP program and course offerings, please refer to the **ICU website** and the **JLP website**: * ICU Website: https://www. icu. ac. jp/academics/undergraduate/jlp/ [3] * JLP Website: https://sites. google. com/info. jp/jlp/ [3] You can also contact the JLP Office directly for further assistance: * **Email:** jlp@icu. jp [3] * **Office Hours:** Monday–Friday, 9:00–11:45 and 12:45–16:00 [3]

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-4B / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `5.964`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly explain that level placement is determined by a placement test (and potentially in-class assessment) and provide specific URLs to the official JLP website and ICU website for further information.

Answer:

Your level is decided by taking the **JLP placement test**, and your course may be adjusted based on an **in-class assessment** during the first session [1][2]. For official details, please check: * **ICU JLP Page:** https://www.icu.ac.jp/academics/undergraduate/jlp/ [2] * **JLP Website:** https://sites.google.com/info.icu.ac.jp/jlp/ [2]

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.341912` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0000`)
- [4] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### Qwen/Qwen3.5-4B / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `4.113`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, you cannot register or change courses after the registration day if you were sick, as the policy strictly prohibits late registration for any reason. **Procedure and Requirements:** * **Late Registration:** If you missed the normal registration day, you must complete the **Late Registration** during the **registration change period**. After this period ends, no registrations will be accepted for any reason [4]. * **Mandatory Registration:** All students are required to register at least one course on the registration day. If this is not possible, you must use the Late Registration option during the change period [4]. * **Lottery/Senior Thesis:** Even if you only wish to register for courses assigned by lottery or for a Senior Thesis, you are still required to complete the regular registration procedures on Registration day [3]. * **Completion Step:** When making a registration change (including Late Registration), you must click the **"SAVE"** button to complete the procedure; inputting data alone does not finalize the change [3].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `8.492`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 3, 4, 5, 6, 7, and 8 collectively explain that late registration is possible during a specific 'registration change period' if missed on the normal day, and outline the consequences of missing the deadline (leave of absence/withdrawal). They also provide procedural warnings such as clicking 'SAVE' and ensuring at least one course is registered.

Answer:

Yes, you can still register or change your courses, but you must do so during the **registration change period**. If you miss the normal registration day due to illness, you are required to complete the "Late Registration" during this specific window [1][2][3]. **Important procedural steps to pay attention to:** * **Click "SAVE":** Simply inputting data is not enough; you must click the "SAVE" button to complete the procedure [1][2][3]. * **Confirm Results:** After making changes, verify that your courses are reflected correctly via the "Registration Results" on the Registration Website [1][3][4]. * **Advisor Approval:** Ensure your advisor interviews you and provides online approval on the Registration Day, as registration is not considered complete without this [5]. * **Minimum Requirement:** You must register for at least one course; missing the designated period entirely will result in a leave of absence or withdrawal [1][2][3]. **Warning:** No registrations or changes are accepted after the registration change period ends [1][2][3][5].

Retrieved / selected chunks:
- [1] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [2] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [3] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [4] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)
- [5] `0.525369` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `5.499`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here are the rules and deadlines you must check before withdrawing from a course due to workload: **1. Timing and Deadlines** You must submit your application **by a month prior to the last day of classes** [3]. Additionally, the specific term deadlines are: * **Spring Term:** March 31 (or the previous Friday if the date falls on a weekend/holiday) [2]. * **Autumn Term:** August 31 (or the previous Friday if the date falls on a weekend/holiday) [2]. * **Winter Term:** November 30 (or the previous Friday if the date falls on a weekend/holiday) [2]. **2. Submission Requirements** * Submit the application to the **Educational Affairs Group** [2, 3]. * Include documents explaining your **reasonable reasons** (e. g. , a medical certificate) [3]. * Submit the form along with your **ID Card** [2]. **3. Important Restrictions** * **No Partial Withdrawal:** You cannot withdraw from just one course; **Registration Withdrawal applies to ALL courses** registered for the ongoing term [1, 3]. * **No Retroactive Grades:** If you withdraw after the Registration Change period, no grade or credit will be given retroactively [1].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-4B / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `10.959`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 7 explicitly list the specific deadlines for course withdrawal (August 31, November 30, March 31) and mention the requirement for approval forms and submission to the Educational Affairs Group, directly addressing the user's need for rules and deadlines.

Answer:

To withdraw from a course after seeing your workload, you must understand that **partial withdrawal is not allowed**; you must withdraw from **all** course registrations for the ongoing term [5]. Before making your decision, check the following rules and deadlines: **1. Deadlines for Application Submission** You must submit your application by the deadline for the **previous Friday** of the following dates: * **Spring Term:** March 31 [1] * **Autumn Term:** August 31 [1] * **Winter Term:** November 30 [1] **2. Required Procedures** * **Forms:** You must complete a withdrawal form (e.g., "Withdrawal Application") which requires signatures from your advisor, guarantor, and other relevant parties (library, finance, student group) [2]. * **Submission:** Submit the completed form and your ID Card to the **Educational Affairs Group** [1]. * **Approval:** The form must be submitted for the Dean's approval [1]. * **Financials:** You must settle any outstanding debts or unpaid fees before the process can proceed [2]. **3. Important Consequences** * **Credits:** Any credits earned at other institutions during your withdrawal period will **not** be recognized [1]. * **Grades:** If you remain absent without going through the official withdrawal procedure, you will receive a **Failure (F)** grade for the course [5]. * **Readmission:** If you withdraw, you may be permitted to reapply for readmission within 3 years (College of Liberal Arts) or 5 years (Graduate School), though specific conditions apply [3]. *Note: If your withdrawal is due to a medical condition, a physician's certificate may be required [3].*

Retrieved / selected chunks:
- [1] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [2] `0.094177` `ehandbook_page` ehandbook - 退学および再入学 (`DOC-000224::structural_fallback_v1::P0000`)
- [3] `0.179531` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0002`)
- [4] `0.169406` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0002`)
- [5] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-4B / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `3.728`
Answer mode: `remote_model`

Answer:

To confirm whether courses or credits will count toward your ICU requirements while studying abroad, you should look to the **ICU Study Abroad e-handbook** and the official **Study Abroad Program Brochure**. According to the e-handbook, students who participate in summer programs approved by ICU may transfer credits if they are approved to count toward graduation requirements. Specifically, a maximum of **40 credits** (or 60 for transfer students) can be transferred, and these credits will be counted toward **Elective Course requirements** [1]. The Study Abroad Program Brochure confirms that credits earned at partner institutions, up to a maximum of 40 credits, are recognized as part of the credit unit requirements for graduation after a review process [3]. For specific partner universities, you should also check the **University/Community Partners** page, which details reciprocal credit systems where students can take selected courses at institutions like the University of Tsukuba or Sophia University, with credits counted toward graduation requirements through a review process [4][5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-4B / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `6.605`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly states that students can confirm if courses count toward ICU requirements by checking if they are approved for transfer, and Passage 6 confirms the maximum credit limit (40) for this process.

Answer:

To confirm if your courses or credits will count toward your ICU requirements, you must verify that the program is **approved for transfer** and that the coursework is approved to be counted toward ICU's graduation requirements [1]. Specifically: * **Summer Programs:** Credits from summer programs approved by ICU may be transferred if approved for graduation requirements, up to a maximum of **40 credits** [1]. * **Exchange Programs:** Credits earned at partner institutions (e.g., Sophia University, University of Tsukuba) are recognized as part of the credit unit requirements for graduation through a review process [2][4][5]. * **Study Abroad Programs:** Credits earned at partner institutions, up to a maximum of **40 credits**, are recognized as part of the credit unit requirements for graduation [2]. Note: Coursework completed as a Kenkyusei (research student) does not count toward a degree or residency requirements [3].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [3] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-4B / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `5.921`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is the information regarding senior thesis deadlines and schedules: **Official Schedule and Deadlines** * **Submission Deadline:** The official deadline for submitting the senior thesis PDF is explicitly stated as **4:00 p. m. on the deadline date**. No submissions are accepted after this time, and missing this deadline makes graduation impossible [3]. * **Location of Schedule:** The specific dates and detailed instructions for the submission period are updated and published on the **ICU Portal** [3]. * **Course Schedule:** The general course schedule for the Senior Thesis (Course No: STH391) is available via the course record pages for Autumn and Winter terms, though specific dates are restricted to users with an **ICU Net ID** [2][5]. **Deadlines to Expect** You should check for the following specific deadlines: 1. **Thesis Submission:** Must be completed before the prescribed deadline (4:00 p. ) [3]. 2. **Relief Application:** If you were not assigned an advisor, a relief application is available.

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `5.487`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 directly identifies the 'Senior Thesis Submission Deadline' as a key deadline and states it is updated on the ICU Portal, answering both parts of the user's question.

Answer:

You can find the official schedule and specific deadlines on the **ICU Portal**, as detailed instructions and dates are updated there [1]. Regarding what to expect, the key deadline is the **Senior Thesis Submission Deadline**. You must submit a PDF of your thesis to the designated place before this time; no submissions are accepted after 4:00 p.m. on the deadline date, and missing it will prevent you from graduating as expected [1]. Additionally, you should refer to the **Senior Thesis Guidelines** (available as a PDF on the eHANDBOOK) for specific formatting and compilation stipulations [3].

Retrieved / selected chunks:
- [1] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [2] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [3] `0.075721` `ehandbook_page` ehandbook - Senior Thesis Guidelines (`DOC-000034::structural_fallback_v1::P0000`)
- [4] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `4.585`
Answer mode: `remote_model`

Answer:

Before planning your courses after returning from a leave of absence, you should check the following based on the provided evidence: * **Tuition and Fee Status**: If your leave of absence request was submitted after the specific deadline for your term, the entire amount of tuition and facilities fees may be withdrawn from your account. You must verify your financial status directly with the Financial Affairs Group. * Deadlines: Spring Term (February 28), Autumn Term (June 30), Winter Term (October 31) [4]. * **Visa Requirements (Non-Japanese Citizens)**: If you do not hold a valid visa for residence in Japan and need a Certificate of Eligibility (CoE) for re-entry, you must contact the Educational Affairs Group (EAG) via email at gakuseki@icu. ac. jp. * Contact: gakuseki@icu. jp [4]. * **Faculty Communication**: While the evidence regarding infectious disease mentions informing class teachers, it does not explicitly detail the procedure for returning from a general leave of absence to faculty. However, the Healthcare Office does not issue certificates for absences, so any required documentation for your return should be confirmed with your faculty or the relevant office.

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### Qwen/Qwen3.5-4B / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `12.828`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages cover general re-entry procedures for students who have dropped out (退学) or specific timelines for returning from study abroad (留学), but they do not explicitly address the procedures for returning from a leave of absence (休学). While passage [5] and [7] mention leave of absence (休学) and return (復学), they focus on deadlines and visa requirements rather than the specific office information or procedures for planning courses after a leave, which is the core of the user's quest

Answer:

Before planning your courses after returning from a leave of absence (休学), you should check the following office information and procedures based on the provided evidence: 1. **Office to Contact**: You must submit your application to the **Academic Affairs Group (教務グループ)** [2][3][4]. 2. **Required Meeting**: After submitting your application, you will have a **meeting with the Dean of the Faculty of Liberal Arts (教養学部長)** [2]. 3. **Course Planning**: You should discuss the specific details regarding dates and course planning with the **Academic Affairs Group** when submitting your application [2]. 4. **Deadlines**: Ensure you apply within the following periods to avoid delays: * Returning for the Spring term: Between **December 1 and March 31** [4]. * Returning for the Autumn term: Between **April 1 and August 31** [4]. * Returning for the Winter term: Between **September 1 and November 30** [4]. 5. **International Students**: If you do not hold a valid Japanese visa and need a Certificate of Eligibility (CoE), you must notify the email **gakuseki@icu.ac.jp** in advance, as the process takes 1.5 to 2 months [2][4]. *Note: The evidence does not specify a separate office for "leave of absence" planning distinct from the general re-entry procedures, nor does it detail specific course registration rules beyond the meeting with the Dean.*

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `0.971456` `ehandbook_page` ehandbook - 退学および再入学 (`DOC-000224::structural_fallback_v1::P0001`)
- [3] `0.916708` `ehandbook_page` ehandbook - 退学および再入学 (`DOC-000224::structural_fallback_v1::P0000`)
- [4] `0.891999` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0002`)
- [5] `0.864882` `ehandbook_page` ehandbook - 留学・休学・復学・退学・再入学・身分変更・身分延長・除籍 (`DOC-000222::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `3.938`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, you can find official information about counseling through the **ICU Counseling Center** and the **Health Care Office**. * **ICU Counseling Center**: This center offers general mental health counseling, consultations regarding friends and career paths, support for loss, and sexual health. It is staffed by professional counselors and accepts inquiries from anyone regardless of gender. You can consult via face-to-face meetings, telephone, chat, or social media. The center also provides a specific phone line for the Mito city area where you can speak anonymously. [3] * **Health Care Office**: This office supports the health of students, faculty, and staff. Nurses provide daily first aid and health consultations, while the physician provides consultations and referral letters twice a week. They also organize annual check-ups. [4] For specific course details on counseling, there is a course titled "Counseling" (Course No: PSY272) offered in Winter 2026, taught by Instructor NISHIMURA, Kaoru, which focuses on the foundations of theory and practice in modern counseling psychology.

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `6.46`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly identifies the 'ICU Counseling Center' as a resource for general mental health counseling and lists various consultation methods (face-to-face, telephone, chat, social media), which directly addresses the user's need for official information on counseling and their concern about privacy options.

Answer:

You can find official counseling information at the **ICU Counseling Center** (ICUカウンセリングセンター), which provides general mental health counseling. * **Consultation Methods:** You can consult via face-to-face meetings, telephone, chat, or social media. * **Privacy:** The center explicitly states that you can consult **anonymously by telephone** (匿名で電話できます). * **Eligibility:** Counselors are available for anyone regardless of gender, including students, faculty, and staff. * **Additional Resources:** The university also lists external resources like the Tokyo Suicide Prevention Center and "Mamorouyo Kokoro" for anonymous phone support. For specific details on consultation methods, please check the official website for the ICU Counseling Center.

Retrieved / selected chunks:
- [1] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [2] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [3] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)
- [4] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [5] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-4B / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `1.629`
Answer mode: `remote_model`

Answer:

To request exam accommodations due to a disability or health condition, you should start by consulting your **course instructor** and the **Learning Accessibility Services (LAS)** office. The official support page or policy to look for is the **"Basic Policy for Supporting Students with Disabilities,"** under which the university provides reasonable accommodations. Specific exam accommodations, such as extended time limits or separate rooms, are arranged through the LAS office, which acts as an intermediary between students and instructors [1][2][3][4][5].

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `6.892`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 directly identify the Learning Accessibility Services (LAS) office as the starting point for requesting exam accommodations and outline the initial steps to contact them.

Answer:

To request exam accommodations due to a disability or health condition, you should start by contacting the **Learning Accessibility Services (LAS) office**. You should look for the official support page titled **"For Students"** on the CTL English website, which outlines the process for requesting academic accommodations [1][2]. **Initial Steps:** 1. **Meet with LAS staff:** Discuss your specific needs [2]. 2. **Submit documents:** Provide a medical certificate, a signed Request for Academic Accommodations Form, and any relevant prior support documents [2]. 3. **Develop a plan:** Work with LAS staff to create an accommodation plan, which the office will then deliver to your professors [2]. **Available Accommodations:** The LAS office can arrange for extended exam time limits, separate exam rooms, real-time captioning, and alternative formats for materials [1][3]. *Note: You may also consult your course instructor and the LAS office regarding reasonable accommodations based on the university's Basic Policy for Supporting Students with Disabilities [4][5].*

Retrieved / selected chunks:
- [1] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [2] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [5] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `3.607`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here is what you should know about your IT account and services after graduating from undergraduate school to continue in ICU graduate school: * **Account Expiration:** Your current ICU Net ID, Portal, Mail, and Google Workspace account will expire on **March 31, 2026** [1]. * **New Account Issuance:** New accounts will be issued to you **after your matriculation day** for the graduate program [4]. * **Data Backup:** You must backup your necessary files from Google Drive and Gmail before graduation, as email forwarding stops and you will lose access to your @icu. ac. jp email once the account is deleted [1]. * **App Passwords:** If you need to access your email from a new device or app after graduation, you can create an app password using the "Create and manage app passwords" section in your account settings [4]. * **Access Restrictions:** The ICU Portal is an internal site that you will not be able to access after graduation [3]. *Note: The evidence does not explicitly state the specific procedure for transferring your existing account to the graduate program, only that a new one will be issued upon matriculation. *

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-4B / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `7.259`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly states that accounts expire on March 31, 2026, and Passage 4 provides specific instructions for managing app passwords and exporting email data, directly addressing the user's question about IT account services after graduation.

Answer:

Since you are continuing to ICU graduate school, you do not need to worry about your IT account expiring or being deleted. Your current ICU Net ID, Portal, Mail, and Google Workspace accounts will remain active for your entire graduate studies. New accounts will be issued to you again after your matriculation day for your graduate program [2]. However, if you are graduating from undergraduate school and need to access your data before starting your graduate studies, please note the following: * **Expiration Date:** Your undergraduate account (ICU Net ID, Portal, Mail, etc.) will expire on **March 31, 2026** [1]. * **Data Backup:** Before graduation, you must backup your necessary files from Google Drive and Gmail [1]. * **Email Management:** If you need to forward emails after graduation, use an email address you can keep after graduation, as forwarding stops and you cannot log in to your @icu.ac.jp email once the account is deleted [1]. * **App Passwords:** If you need to use your ICU email with third-party apps, create an app password under the "Create and use app passwords" section and save the 16-digit code [2].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [3] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [4] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-4B / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `5.525`
Answer mode: `remote_model`

Answer:

公式情報を確認できる場所と、レベル分け・履修方法の概要は以下の通りです。 **公式情報の確認先** * ICU 公式サイト（学部・JLP 情報）: https://www. icu. ac. jp/academics/undergraduate/jlp/ [2] * JLP 専用サイト: https://sites. google. com/info. jp/jlp/ [2] * JLP 事務局: ERB II Rm. 104, メール: jlp@icu. jp [2] **レベル分けと履修方法** * **レベル決定方法**: 履修希望者は「JLP Placement Test（PT）」を受験し、結果に基づいて履修できる科目レベルが決定されます [1]。 * **PTの実施時期**: 毎年2回（3月・8月）実施され、各学期の履修登録開始前に受験する必要があります [1]。 * **対象者**: Stream 1またはStream 2の学生、および総合型選抜（EJU）で入学した学生が対象です [1]。 * **履修要件**: 9月生入学者の場合、日本語知識がない学生は45単位、母国語だが読み書き能力に欠ける学生は「日本語特別教育（Special Japanese）」を履修する必要があります [5]。 * **評価**: 履修したJLP科目の単位は、卒業要件の選択科目として計算されます [1]。 ※2026年3月実施のPTサイトへのアクセス方法や詳細な日程は、2026年3月23日からGoogle Classroom（クラスコード：uup64sfc）で公開されます [1]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-4B / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `11.516`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 2 explicitly provides the official websites for JLP program details and course offerings, which directly answers where to find official information on levels and enrollment methods.

Answer:

JLP のレベル分けや履修方法に関する公式情報は、以下の 2 つのウェブサイトから確認できます。 * **JLP 公式サイト**: https://www.icu.ac.jp/academics/undergraduate/jlp/ * **JLP 情報サイト**: https://sites.google.com/info.icu.ac.jp/jlp/ **履修方法の概要** * **対象者**: Stream 1 または Stream 2 の学生、および「EJU（日本留学試験）」で入学した学生です。 * **レベル判定**: 履修希望者は必ず「JLP Placement Test（PT）」を受けなければなりません。PT の結果に基づいて履修できる科目レベルが決定されます。 * **実施時期**: 毎年 2 回（3 月・8 月）実施され、各学期の履修登録開始前に受験します。 * 3 月実施分：翌月の春学期登録に有効。 * 8 月実施分：当該年度および翌学期（冬学期）の登録に有効。 * **2026 年 3 月 PT の詳細**: 2026 年 3 月 23 日（月）10:00〜3 月 27 日（金）10:00 の間に Google Classroom（クラスコード：uup64sfc）にアクセスし、指示に従って書類を提出してください。結果は 4 月 1 日（水）午後 7 時に発表されます。一部の学生には 4 月 2 日（木）午後に対面で面接等が行われます。 **レベルと単位について** * JLP は CEFR（欧州言語共通参照枠組み）の指標（A1〜C2）を用いて各コースの学習目標を定義しています。 * 9 月生入学者の場合、日本語の知識がない学生は 45 単位分の JLP を履修する必要があります。 * 日本語が母国語であるが読み書き能力に欠ける学生は、「日本語特別教育（Special Japanese）」（最高 19 単位）を履修することで要件を満たします。 * 履修した JLP 科目の単位は、卒業要件の選択科目として計算されます。 **問い合わせ先** * **窓口**: JLP Office (ERB II Rm.104) * **メール**: jlp@icu.ac.jp * **営業時間**: 月曜〜金曜 9:00〜11:45、12:45〜16:00

Retrieved / selected chunks:
- [1] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [2] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### Qwen/Qwen3.5-4B / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `4.295`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, **Chapel Hour** and **Christianity Week** are **campus-life events** (specifically religious and spiritual activities) rather than academic courses. * **Chapel Hour** is a weekly gathering for informal Christian worship held during lunchtime (Tuesday at 1:20 PM or Wednesday at lunchtime, depending on the source) where university ministers, faculty, and students share messages. It is explicitly described as a time for prayer and community gathering, not for academic instruction [1][2][3][4]. * **Christianity Week** is a special timetable held annually in May featuring various events related to Christianity, such as early-hour services, open houses, and group discussions in faculty homes. It is organized by a student committee and is a public event within the university calendar [1][2][5]. **Where to check the schedule:** * **Chapel Hour:** The schedule is fixed (weekly during lunch). You can check the specific time and location on the **Religious Center's Chapel Hour page** [4] or the **Commitments and History page** [2]. * **Christianity Week:** The schedule is annual (held in May).

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### Qwen/Qwen3.5-4B / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `6.828`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 4 explicitly states that Chapel Hour is held during the term (academic period) on Tuesdays, and Passage 7 lists 'New Year Chapel Hour' on the Academic Calendar, confirming it is an academic event. Passage 1 mentions Christianity Week is held during the university chapel service, linking it to the academic schedule.

Answer:

Based on the provided evidence, both **Chapel Hour** and **Christianity Week** are explicitly defined as **academic events** tied to the university's term schedule. * **Chapel Hour** is held **during the term** (academic period) every Tuesday from 1:20 p.m. to 1:50 p.m. [2]. The schedule is adjusted so that no classes or meetings are held during this time to allow for participation by students, faculty, and staff [1]. * **Christianity Week** is held annually in May under a **special timetable** that runs for a full week of daily programs [4]. It is organized by a student committee specifically for the entire university [3]. You should check the **Academic Calendar** for the specific dates, as these events are integrated into the academic year structure [5].

Retrieved / selected chunks:
- [1] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [2] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [3] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [4] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [5] `0.129843` `web_page` ONE YEAR at ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001560::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `5.501`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here are the details for the Spring 2026 registration and advisor interview: **Registration Period** * **Standard Period:** April 9 (Thu) 9:00 ~ April 10 (Fri) 14:30 [1][2] * **Late Registration Period:** April 11 (Sat) 9:00 ~ April 20 (Mon) 10:00 [2][3] * **Note:** The office is closed on April 11 (Sat) and April 18 (Sat) [3]. **Advisor Interview Timing** * **Standard Period:** April 9 (Thu) 10:00 ~ 16:00 and April 10 (Fri) 9:00 ~ 15:30 [1][2] * **Late Registration Period:** April 11 (Sat) 9:00 ~ April 20 (Mon) 10:00 [2][3] * **Procedure:** Interviews are conducted face-to-face for all students. You must check **icuMAP** in advance to identify your advisor. You should receive a message from your advisor regarding the specific advising method (place, time, etc. ) by the evening of April 6 [1][2]. If you do not hear from them by then, you should contact them directly [1][2]. **Official Resources to Check** * **Registration Procedures:** The official portal notice titled "AY2026 Spring Term Registration – Course Registration Procedures" [1][3][4]. * **Advisor Identification:** **icuMAP** (to check your assigned advisor) [1][2].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `8.364`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 provide the specific dates for the Spring 2026 registration period and advisor interview timing, directly answering the user's question.

Answer:

For the **AY2026 Spring Term**, please check the following official procedures: * **Registration Period:** April 9 (Thu) 9:00 ~ April 10 (Fri) 14:30. * *Note:* If you missed this date, Late Registration is available from April 11 (Sat) 9:00 ~ April 20 (Mon) 10:00 [2][3]. * **Advisor Interview Timing:** April 9 (Thu) 10:00 ~ 16:00 and April 10 (Fri) 9:00 ~ 15:30. * *Note:* Interviews are conducted face-to-face for all students. You should receive details from your advisor by the evening of April 6; if not, contact them directly [1][2]. * **Where to Check:** * **Newly enrolled students:** Please check the "Campus Pathfinder" in Moodle instead of this announcement [1][2]. * **Advisor Identification:** Check your advisor's details on **icuMAP** in advance [1][2]. * **General Procedures:** Refer to the "AY2026 Spring Term Registration – Course Registration Procedures" portal notice [1][3].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.311322` `portal_notice` AY2025 Spring Term Registration – Course Registration Procedures (`DOC-000811::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `2.877`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, the ICU system **cannot** tell you exactly how many more credits you personally need to graduate early at the time of transfer. The evidence explicitly states that credit transfers are only confirmed after you have entered ICU and completed the required procedures. Specifically: * Credit transfers are granted only after students complete the required procedures after entering ICU. * "How many and which credits are transferrable will not be confirmed until then. " [2] * The number of credits that may be transferred is determined after the course evaluation and approval by the Associate Dean of the College of Liberal Arts. [5] While the handbook outlines maximum limits (e. g. , up to 60 credits for students who transferred credits upon entry) and eligibility criteria (grades of C/70 or higher, course equivalency), it does not provide a mechanism to calculate a specific remaining credit count for early graduation prior to the official evaluation process. [1], [2], [5]

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `8.831`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages describe eligibility criteria, grade requirements, and credit limits for transferring credits, but none explain how to calculate the specific number of remaining credits needed for graduation or confirm if the system provides this calculation to the student.

Answer:

Based on the provided evidence, the system does not currently tell you exactly how many more credits you need to graduate early. The available information confirms that: * Credit transfers are only confirmed **after** you complete the required procedures upon entering ICU, and the specific number of transferrable credits will not be known until then [2]. * The total number of credits you can transfer is capped (e.g., up to 60 credits for those who spent more than 1 year at another university) [1], [2], [3]. * The evidence outlines eligibility criteria (grades of C/70 or higher) and credit limits but does not provide a calculation method or a specific tool to determine your remaining credits for graduation [1], [2], [4]. Therefore, while you can determine your eligibility and the maximum credits you might receive, the specific number of credits required to finish your degree early is not explicitly calculated or displayed to you in the retrieved documents.

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.787931` `ehandbook_page` ehandbook - Transferring Credits from Other Universities (`DOC-000058::structural_fallback_v1::P0000`)
- [5] `0.911653` `pdf_document` 自己点検・評価報告書（2009年） (`PDF-49a3e05f4c1ecc7e15::structural_fallback_v1::P0027`)

### Qwen/Qwen3.5-4B / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `4.079`
Answer mode: `remote_model`

Answer:

履修登録に関する連絡先や公式ページは以下の通りです。 **1. 公式ページ（登録手順・詳細）** * **ページ名**: 履修登録 (科目登録) * **URL**: https://sites. google. com/icu. ac. jp/icu-ehandbook/ホーム_japanese/履修案内/科目登録/履修登録 [3] * **内容**: 登録日程、手順（Registration Website での入力、アドヴァイザー承認）、申請書の提出方法などが記載されています。 **2. 問い合わせ先（教務グループ）** * **メール**: ea-group@icu. jp [1][2][5] * **窓口**: 教務グループ窓口（申請書用紙配布など） [3] * **注意**: 登録手続きは学生本人の責任であり、期間外の手続きは一切できません [3][4]。 **3. 最新のお知らせ（期限・変更点）** * **確認方法**: ICU Portal にて「教務グループからの重要なお知らせ」を確認してください [1][2][5]。 * **登録日**: 各学期の登録日は「Registration Website」で確認する必要があります [3][4]。

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `6.371`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 directly provides the email address for the Educational Affairs Group (ea-group@icu.ac.jp) and explicitly states it handles inquiries about registration, which matches the user's need.

Answer:

履修登録に関する問い合わせは、**教育事務グループ**（Educational Affairs Group）に連絡してください。 * **連絡先**: ea-group@icu.ac.jp * **担当部署**: 教育事務グループ（履修・成績・卒業要件に関する問い合わせを担当）[1] また、登録変更や卒業要件の確認については、同グループが対応しています [1][3]。

Retrieved / selected chunks:
- [1] `0.977756` `web_page` General Education Handbook AY2026 - Contact (`DOC-001356::structural_fallback_v1::P0000`)
- [2] `0.996278` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0003`)
- [3] `0.995768` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0002`)
- [4] `0.991812` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0004`)
- [5] `0.906156` `web_page` ICU Health Care Office for Students - キャンパスでの健康管理 (`DOC-001375::structural_fallback_v1::P0008`)

### Qwen/Qwen3.5-4B / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `3.36`
Answer mode: `remote_model`

Answer:

If there is a conflict between the chatbot answer and the ICU Portal announcement regarding a deadline, you should trust the **ICU Portal announcement** because the official manual explicitly states that announcements are the primary source of information and should be checked daily [3]. Regarding your next steps: 1. **Verify the source**: Ensure the conflicting information comes from an official "portal_notice" or "web_page" rather than a newsletter or event description, as the latter are treated as context, not official rules [3]. 2. **Check the specific deadline**: * For **loan submissions**, the official deadline is **September 5** [1][2]. * For **graduation/transfer account transfers**, the deadline is **February 10, 2026** [5]. 3. **Take action**: If the deadline is near, come to the counter early to avoid long waits, especially if you need to make corrections on the spot with required seals [2]. If you are unsure about the specific announcement category, search the "ALL" or "MORE" button in the announcement link box [3].

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `10.683`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: Retrieved passages contain specific deadlines (e.g., September 5, March 31, 2026) and general portal instructions but do not address the conflict resolution logic or hierarchy of trust between the chatbot and the portal announcement.

Answer:

Based on the provided evidence, there is no information regarding a conflict between the chatbot and the ICU Portal, nor is there a defined hierarchy of trust or specific procedure for resolving such a conflict. The evidence confirms that the **ICU Portal announcements** are the primary source for deadlines (e.g., "the deadline for submission is September 5" [1, 2]) and advises students to check the portal once a day [3, 4]. However, the retrieved documents do not contain rules for when a chatbot answer contradicts a portal notice or instructions on how to prioritize one over the other. **Conclusion:** * **Which source to trust:** The evidence states you should check the **ICU Portal announcements** once a day [3, 4], but it does not specify how to handle a direct contradiction with a chatbot. * **What to do next:** The provided text does not offer a resolution step for conflicting information between the chatbot and the portal. You may need to consult official staff or additional documentation not included in the current selection.

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.105948` `web_page` ICU Health Care Office for Students - FAQs (`DOC-001532::structural_fallback_v1::P0020`)

### Qwen/Qwen3.5-4B / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `2.305`
Answer mode: `remote_model`

Answer:

Based on the retrieved evidence, here are the details for the Logic Programming course in Autumn 2026: * **Instructor:** Tammo M. Reisewitz [2][3][5]. * **Schedule:** Tuesdays, periods 5 and 6 (5/TU, 6/TU) [2][3][5]. * **Official Information Source:** You should check the official course record at the following URL: https://campus. icu. ac. jp/icumap/ehb/PreviewSyllabus. aspx? year=2026&term=2&regno=21219 [2][3][4][5]. The course is taught face-to-face [2][5].

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### Qwen/Qwen3.5-4B / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `6.556`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly provide the instructor's name (REISEWITZ, TAMMO M.), the schedule (5/TU, 6/TU), and the URL for official course information (URL * Access to the following two fields will be limited to those who have an ICU Net ID).

Answer:

For the **Logic Programming** course in **Autumn 2026**: * **Instructor**: REISEWITZ, TAMMO M. [1][3] * **Schedule**: 5/TU, 6/TU [1] * **Official Course Information**: Check the URL provided in the course record [1]. Please note that access to certain fields (such as the specific URL link) is limited to users with an **ICU Net ID** [1]. *Note: The retrieved evidence does not specify the exact physical location (e.g., room number) for the lectures, only the days and times.*

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [3] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)
- [4] `0.945197` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0006`)
- [5] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `3.494`
Answer mode: `remote_model`

Answer:

The grade evaluation and required work depend on the specific term (semester) you are enrolled in, as the syllabus differs between Spring and Autumn 2026. **Spring 2026 (Instructor: KANEKO, Takuya)** * **Grading Policy:** Exam (20%), Report (40%), Daily quiz (20%), Class participation (20%) [1]. * **Required Work:** The course covers probability models, conditional probability, random variables, distribution characteristics, and sample data analysis. It also addresses statistical tricks, such as how measurement periods affect data interpretation [5]. **Autumn 2026 (Instructor: MARSZALEC, Daniel Janusz)** * **Grading Policy:** Active participation in classes (15%), Application workshops (35%), End of term data analysis project (50%) [2]. * **Required Work:** The course focuses on learning basic data analysis skills for social sciences, including lectures on statistical rudiments, sampling methods, and data processing methods using computers [4]. Since the evaluation criteria and workload vary by term, please confirm which term you are registered for to apply the correct policy.

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-4B / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `8.394`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages provide specific grading policies and syllabus content (topics like averages, probability, data analysis) for the course 'Statistical Information Literacy' (GES039) in both Spring and Autumn terms, directly answering the user's questions about evaluation and required work.

Answer:

The grade for **Statistical Information Literacy (GES039)** is evaluated differently depending on the term: * **Spring 2026:** The grade is based on an Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. * **Autumn 2026:** The grade is based on Active participation in classes (15%), Application workshops (35%), and an End of term data analysis project (50%) [2]. Regarding the syllabus content, the course aims to teach basic data analysis skills for social sciences, covering statistical fundamentals, sampling methods, and data processing using computers [3]. It focuses on the mathematical foundations of probability and randomness to help students evaluate the trustworthiness of information and its impact on decision-making [3]. Additionally, the course supports developing abilities to independently plan learning, solve problems using critical thinking, integrate diverse knowledge, and express ideas effectively [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [4] `0.17441` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0005`)

### Qwen/Qwen3.5-4B / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `1.977`
Answer mode: `remote_model`

Answer:

MIURA 先生は、以下の 2 つの授業を担当しています。 * **日本語の授業**: 「J2: Japanese」（レベル：CEFR A2. 1）[3][4][5] * **英語の授業**: 「Middle English」（中英語）[1] ※「Special Japanese Kanji 1」の担当者は MIURA, Ayano ですが、質問の「MIURA 先生」が誰を指すかによって回答が変わる可能性があります。

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `10.605`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages confirm that MIURA, Ayano teaches J2: Japanese (CEFR A2.1 level) and Special Japanese Kanji 1 (for native/heritage speakers). While she co-teaches one intermediate course, the primary Japanese language course she is listed as the sole instructor for is J2.

Answer:

MIURA 先生は主に以下の 2 つの授業を担当しています。 1. **J2: Japanese** * **レベル**: CEFR A2.1 レベル（話し言葉・書き言葉）[1][2][3] * **内容**: 他者との関わりにおける言語活動に焦点を当てた授業です。前提として「J1」または同等のレベルを修了している必要があります [1][2][3]。 * **担当時期**: 2026 年春・秋・冬学期（Spring, Autumn, Winter）[1][2][3] 2. **Special Japanese Kanji 1** * **対象**: 日本語を母語・第一言語・または継承語として学ぶ学生（ネイティブ・ヒラト語者向け）[5] * **内容**: 約 600 字の漢字の読み書きと熟語を学ぶ基礎コースです [5]。 * **担当時期**: 2026 年春・冬学期（Spring + Winter）[5] ※2026 年春学期の「Vocabulary and Kanji for Intermediate Learners of Japanese 2」も担当していますが、これは中級者向けの科目です [4]。

Retrieved / selected chunks:
- [1] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [2] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [4] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)
- [5] `0.205934` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `3.328`
Answer mode: `remote_model`

Answer:

登録が完了したか不安な場合は、以下の手順で確認してください。 1. **Registration Website の「Registration Result」画面にアクセスする** 登録結果と、アドヴァイザーによるオンライン承認を受けていることを必ず確認してください [1][2][4]。 2. **アドヴァイザー承認の確認** オンラインで科目を入力した後、登録日にアドヴァイザーと面談し、オンラインによる承認を受けて初めて登録が完了します。 承認が下りているか自身で必ず確認してください [1][2][4]。 3. **操作の再確認** 「登録結果に反映されていません」という場合は、SAVE ボタンの押し忘れや操作漏れが原因である可能性が高いです。 正しく操作を行ったか再確認し、結果画面で希望通りに登録されているか確認してください [5]。 登録確認は学生本人の責任であり、定められた期間を過ぎて申請しても受理されません [1][2][4]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `7.346`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that registration is not complete until the advisor provides online approval and instructs the user to check the 'Registration Result' on the website to confirm both the registration status and the advisor's approval.

Answer:

履修登録サイト（Registration Website）で科目を選択しても、**「アドヴァイザーによるオンライン承認」が下りるまで登録は完了していません** [1][2][4]。 不安がある場合は、以下の手順で確認してください： 1. **Registration Website** にアクセスし、**「Registration Result」**の画面を確認してください [1][2][4]。 2. 画面で**登録結果**と、**アドヴァイザーのオンライン承認**の両方が確認できているか必ずチェックしてください [1][2][4]。 3. 承認が下りていない場合は、登録手続きは完了していないとみなされます [1][2][4]。 登録確認は学生本人の責任であり、定められた期間を過ぎても申請は受理されません [1][2][4]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `5.812`
Answer mode: `remote_model`

Answer:

Based on the retrieved evidence, here is the information regarding textbook purchases for Spring 2026: **Official Purchase Information** You should check the **Online Textbook Purchase Guide** and the **List of Textbooks** provided in the official notices. * **Sale Period:** Monday, April 6 to Monday, April 20. * **Purchase Method:** Complete the purchase via a smartphone or other device using the 2D code or URL provided in the guidance document. * **Pickup:** Textbooks can be picked up at an on-campus location. Specific dates, times, and locations are detailed in the guidance document. * **Pricing:** Textbooks are sold at a 10% discount off the list price (excluding digital textbooks). Shipping fees apply for home delivery. * **Resources:** * Guidance Document: [Online Textbook Purchase Guide](https://drive. google. com/file/d/14N98Gmiv98kUA2vcQwoiCL1MhVlUm4DN/view? usp=drive_link) * Textbook List: [List of Textbooks](https://docs. com/spreadsheets/d/1zQdbj_4R6DK3h9nUM3fquDaB0uzQAstx/edit? usp=sharing&ouid=116249504418958879193&rtpof=true&sd=true) * **Contact:** OnSMaRT desk (MARUZEN-YUSHODO Co. , Ltd. ) at smarts@maruzen. co.

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `8.116`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 directly provide the official textbook purchase window (April 6-20, 2026), the method (2D code/URL), pickup details, and the specific discount (10% off list price, excluding digital). They also explicitly state that shipping fees apply for home delivery, addressing what the user should not expect to be free.

Answer:

For Spring 2026 textbooks, check the official purchase window from **April 6 to April 20, 2026** using the 2D code or URL provided in the guidance document [1]. **Details you should not expect the chatbot to know:** * **Specific pickup locations, dates, and times:** These are only available in the official guidance document [1]. * **The specific list of required textbooks:** This is found in the official spreadsheet, not in the general announcement [1]. * **Shipping fees:** While the chatbot knows shipping is charged for home delivery, it cannot provide specific fee amounts or calculate costs for individual items [1]. * **Course-specific textbook requirements:** The chatbot does not know which specific textbooks are required for your individual course (e.g., *Systems Biology* is listed for Autumn 2026, not Spring) [3]. **Supporting Evidence:** * Purchase window and method: [1] * Pickup details and shipping fees: [1] * Course term mismatch (Autumn vs. Spring): [3]

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [4] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `2.175`
Answer mode: `remote_model`

Answer:

The retrieved ICU evidence is not sufficient to answer your question. While the provided documents list specific courses such as *Global Governance* [1], *Introduction to Business Administration* [2], *Introduction to Capital Markets* [3], *X: Introduction to Christianity* [4], and *English Communication* [5], they do not explicitly state whether these are mandatory, required for all incoming students, or part of a specific curriculum after transferring to ICU. Additionally, the evidence for the Christianity course references a "GE Handbook" for further details [4], but the handbook itself is not included in the provided text. Therefore, no official rule or requirement regarding mandatory courses for new ICU students can be confirmed from the current evidence.

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `13.604`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages describe the structure of the curriculum (General Education, Health/PE, Specialized courses) and graduation requirements (130 credits), but they do not provide a definitive list of specific mandatory course titles or codes required for all students. They mention categories like 'General Education' and 'Health Science' but lack the specific course inventory needed to answer 'what are the mandatory courses'.

Answer:

Based on the provided evidence, here are the mandatory courses you need to take after arriving at ICU: **1. Health and Physical Education (Health Science)** * **Lecture:** "Health Science" (1 course, 1 credit). * **Practical:** "PE Exercise I, II, III" (3 courses, 1 credit total; each course is 1/3 credit). * *Note:* These are required for graduation. After completing these, you may choose additional practical courses (up to 2 credits) as electives. [2] **2. Language Education** * **English:** "Liberal Arts English Program" (ELA) is mandatory for most admission types (General Selection, Comprehensive Selection, etc.). Students may choose the "Japanese Language Program" (JLP) if their English proficiency allows. [4] * **Japanese:** "Japanese Language Program" (JLP) is mandatory for students admitted via "English Language Based Admissions." [4] **3. General Education** * **Christianity:** "Introduction to Christianity" is the **only** general education course required for all students. [5] * **Other Areas:** You must also complete a total of **18 credits** across Humanities, Social Sciences, and Natural Sciences, including a "Liberal Arts Seminar" and "Special Lectures." (Students studying Japanese must complete at least 12 credits). [5] **4. Major Foundation Courses** * You must take foundation courses provided by your chosen major (Science or Arts) to build academic basic skills before specializing. [3] **Important Notes:** * **Specialization:** You do not choose a major upon entry. You decide your major by the end of Year 2. [3] * **Graduation Research:** In your final year, you must conduct a graduation research project (thesis) based on your major. [3] * **Teacher Certification:** If you intend to become a teacher, you must also take "Physical Education Theory" as a required course. [2] *Please note that specific course titles or codes for the "Major Foundation Courses" and the specific "Special Lectures" are not listed in the provided text; you will need to check the specific major curriculum pages for those details.*

Retrieved / selected chunks:
- [1] `0.994488` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [2] `0.993487` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.98858` `web_page` 入学から卒業までの流れ｜国際基督教大学（ICU） (`DOC-001728::structural_fallback_v1::P0000`)
- [4] `0.961389` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [5] `0.937897` `web_page` 一般教育科目｜国際基督教大学（ICU） (`DOC-001690::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `2.112`
Answer mode: `remote_model`

Answer:

The retrieved ICU evidence is not sufficient to identify a mandatory course required after entering ICU. The provided documents [1]–[5] are individual course syllabi (e. g. , *Global Governance*, *Introduction to Business Administration*, *Introduction to Capital Markets*, *Introduction to Christianity*) listing specific course details such as instructors, schedules, and registration numbers. None of these documents explicitly state a general rule, requirement, or procedure defining which courses are mandatory for all incoming students. While one syllabus [4] references the "GE Handbook" for further information, the handbook itself is not included in the evidence. Therefore, no official rule regarding mandatory post-entry courses can be confirmed from the provided text.

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `9.744`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 2 and 4 explicitly state that the mandatory language program after entering ICU is the 'Liberal Arts English Program' (ELA), with specific conditions for different admission types.

Answer:

The mandatory course depends on your admission type: * **For most applicants** (General Selection, Comprehensive Selection for April entry, Comprehensive Selection for April/September entry using EJU, or English Language Based Admissions): The mandatory course is the **Liberal Arts English Program (ELA)** [1][2][5]. * **For Comprehensive Selection (April/September entry) via English Language Based Admissions**: The mandatory course is the **Japanese Language Program (JLP)** [1]. * **Note**: If you have an IELTS score of 6.5 or a TOEFL iBT score of 79 or higher, you may choose the JLP instead of the ELA [1][5].

Retrieved / selected chunks:
- [1] `0.96525` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [2] `0.979036` `pdf_document` 自己点検・評価報告書（2016年） (`PDF-ee9dc38849ee842f8d::structural_fallback_v1::P0056`)
- [3] `0.968441` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.958069` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.661704` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0126`)

### Qwen/Qwen3.5-4B / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `4.992`
Answer mode: `remote_model`

Answer:

ICUに入学した後、必ず履修しなければならない科目は、入学選抜（一般選抜、総合型選抜など）によって異なります。 * **一般選抜**や**総合型選抜<4月入学専願>、外国教育制度利用（帰国生）、EJU利用**の場合：必修語学科目は**「リベラルアーツ英語プログラム（ELA）」**です。 ただし、出願時にIELTS 6. 5またはTOEFL iBT 79以上のスコアを提出した場合、必修語学科目として**「日本語教育プログラム（JLP）」**を選択できる場合があります。 * **総合型選抜<4月/9月入学>English Language Based Admissions**の場合：必修語学科目は**「日本語教育プログラム（JLP）」**です。 詳細な要件は入学試験要項で確認する必要があります。 公式ページ： * ICUの入試について：https://www. icu. ac. jp/admissions/undergraduate/exam [5] * 入学者選抜に関するQ&A：https://www. jp/admissions/undergraduate/faq [4]

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-4B / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `10.166`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage 1 explicitly lists the specific required subjects for graduation (Health Science and PE exercises), while Passage 5 clarifies that the specific language program required depends on the admission selection method (ELA or JLP). Together, they provide the necessary details to answer both parts of the question.

Answer:

ICU に入学した後、必ず履修しなければならない科目は以下の通りです。 **1. 保健体育科目** すべての学生が卒業要件として履修する必要があります。 * **健康科学（Health Science）**: 1 科目・1 単位 [1] * **PE エクササイズⅠ・Ⅱ・Ⅲ**: 3 種目・1 単位（各種目は 1/3 単位）[1] **2. 語学科目** 入学時の選抜方法によって必修語学科目が異なります。 * **リベラルアーツ英語プログラム（ELA）**: 一般選抜、総合型選抜（4 月入学専願）、EJU 利用などの場合、原則として必修です。ただし、英語力によって JLP を選択できる場合があります [2]。 * **日本語教育プログラム（JLP）**: 総合型選抜（4 月/9 月入学）の English Language Based Admissions を受けた場合、必修です [2]。 公式ページを見るべきは以下の 2 つです。 * 保健体育科目の詳細: [https://www.icu.ac.jp/academics/undergraduate/healtheducation](https://www.icu.ac.jp/academics/undergraduate/healtheducation) [1] * 語学科目と入試選抜の関係: [https://www.icu.ac.jp/admissions/undergraduate/exam](https://www.icu.ac.jp/admissions/undergraduate/exam) [2]

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)
- [3] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [4] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [5] `0.442125` `web_page` 日英バイリンガル教育｜国際基督教大学（ICU） (`DOC-001750::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `4.331`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, here are the required courses for ICU students and the relevant official page: **Required Courses** ICU students must complete the following graduation requirements in Health Science: * **Lecture Course:** "Health Science" (1 credit). * **Practical Exercise Courses:** "Physical Education Exercise I, II, and III" (1 credit total, or 1/3 credit per course) [1][2]. *Note: Students who intend to obtain a teaching license for middle or high school must also take "Physical Education Theory" as a required course in the teacher training program [2]. * **Official Page** You should visit the **Health Education** page for undergraduate students to view these requirements: * English: https://www. icu. ac. jp/en/academics/undergraduate/healtheducation [1] * Japanese: https://www. jp/academics/undergraduate/healtheducation [2]

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### Qwen/Qwen3.5-4B / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `7.885`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1 and 2 explicitly list the required courses for graduation (Health Science and PE Exercise I, II, III) and mention the official social media accounts as sources for further information, directly answering both parts of the user's question.

Answer:

进入 ICU 后，作为毕业必修要求，学生必须修读以下课程： 1. **健康科学 (Health Science)**：1 门课，1 学分，包含健康与体育教育讲座 [1][2]。 2. **体育实技课程 (Physical Education Exercise)**：必须修读 **I、II、III** 三门课，共 1 学分（每门课 1/3 学分），包含实践练习 [1][2]。 关于官方页面，建议查看 ICU 官方网站的学术部分获取详细信息，或关注 ICU 的官方社交媒体账号以获取最新信息 [1][2][4]。 *注：若学生志在取得教师执照并未来从事中学或高中教学工作，还需额外修读“体育理论 (Physical Education)"作为教职课程的必修科目 [2]。*

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.512`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-4B / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `11.336`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: Retrieved passages are course registration details and do not contain any information regarding academic integrity policies or the use of AI tools like ChatGPT in thesis writing.

Answer:

ICU の学問的倫理基準では、生成系 AI（チャット GPT など）は日常生活のツールとして利用を否定していませんが、**「生成されたものを成績評価のための提出物に使用し、自分自身が作成したかのように振る舞うことは、剽窃（学問的倫理基準の侵害）に相当します」** [5]。 具体的には以下の点に注意が必要です： 1. **提出物の原稿**: 提出物は「自分自身で考え、調査研究したものでなければなりません」 [5]。 2. **出典の開示**: 自分自身で考え・調査研究しなかった情報の出典は、**明らかにし、正しく引用することが求められます** [5]。 3. **著作権・剽窃のリスク**: AI が出力する回答は、既存の著作物や調査結果から成り立っている可能性が高く、そのまま使用すると著作権侵害や剽窃となる可能性があります [5]。 したがって、チャット GPT を使用しても、その出力をそのまま提出物として「自分自身のもの」として提出することはできません。利用する場合でも、自分自身の思考や調査研究と組み合わせており、かつ出典を明示した上で使用することが求められます [5]。

Retrieved / selected chunks:
- [1] `0.965576` `course_record` Public Policy (`COURSE-2026-Winter-32203-QPFD419::structural_fallback_v1::P0012`)
- [2] `0.092033` `web_page` for All ICU Users (`DOC-001538::structural_fallback_v1::P0005`)
- [3] `0.039788` `web_page` for All ICU Users (`DOC-001538::structural_fallback_v1::P0002`)
- [4] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### Qwen/Qwen3.5-4B / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.221`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-4B / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `6.968`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 6, 7, and 8 explicitly state that students must abide by ICU Generative AI policies and that unauthorized use of generative AI in writing the senior thesis is prohibited, directly addressing the user's question about using ChatGPT.

Answer:

No, you cannot use ChatGPT for your senior thesis at ICU. The Senior Thesis course syllabus explicitly states that the unauthorized use of generative AI in any stage of writing your thesis is prohibited. Doing so constitutes a breach of academic integrity and results in an E grade [1]. Additionally, students must abide by the ICU Generative AI policies [1]. While the university offers support services like the CTL Writing Support Desk and library lectures to help students write their theses, these are intended to assist with structuring, revising, and finding sources, not to generate the thesis content for you [2][4].

Retrieved / selected chunks:
- [1] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [3] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [4] `0.440951` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0006`)

### Qwen/Qwen3.5-4B / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `4.442`
Answer mode: `remote_model`

Answer:

根据提供的证据，**不能**直接回答“是否可以在 ICU 的毕业论文中使用 ChatGPT"，因为检索到的课程记录（特别是关于 Senior Thesis 的课程）仅提到了通用的“生成式 AI 政策”，并未明确说明该政策是否允许在毕业论文中使用，也未提供具体的使用规则或例外情况。 证据 [2] 明确指出：“未经授权的、未指定的生成式 AI 在任何阶段的写作中使用……以及将他人（包括生成式 AI）产生的工作呈现为完全由自己产生的工作，构成对学术诚信政策的违反，并给予 E 级。 ”[2] 然而，该证据**没有**说明： 1. 是否被明确“授权”使用。 2. 具体的使用规范（如必须标注、仅用于草稿等）。 3. 是否存在允许使用的例外情况。 因此，仅凭现有证据，无法确认是否可以使用，也无法确认资料是否足够。 **结论：** 检索到的 ICU 证据**不足以**明确回答该问题。

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `15.349`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss general academic integrity policies regarding generative AI (e.g., not submitting AI-generated work as one's own) and specific course prohibitions, but none explicitly state whether ChatGPT usage is permitted for the specific task of writing an ICU graduation thesis. Passage 5 mentions AI cannot be used for graded submissions, but does not clarify if it can be used as a research tool or for drafting a thesis, which is the core of the user's question.

Answer:

根据 ICU 的学术诚信政策，**您不能在 ICU 的毕业论文中直接使用 ChatGPT 来撰写或生成论文内容**。 具体规定如下： 1. **禁止作为个人作业使用**：ICU 强调批判性思维，要求学生用自己的思想、研究和反思来完成任务。生成式 AI 创建的文字，即使经过修改，也不被视为学生自己的作品，且被视为违反学术诚信政策 [1]。 2. **禁止用于成绩评估的提交物**：将生成式 AI 创建的内容作为成绩评估的提交物（如论文），等同于剽窃（将他人的作品或研究成果伪称为自己的作品）[3]。 3. **禁止由 AI 完成独立任务**：必须由学生自己完成的任务（如毕业论文）不应由生成式 AI 执行 [2]。 4. **例外情况**：除非您的课程导师**特别指示**学生可以使用 AI，否则上述政策适用 [2]。 **结论**： 目前的政策明确禁止将 AI 生成的内容作为毕业论文提交。如果您需要利用 AI 进行辅助（例如查找资料或构思），必须**事先咨询您的课程导师**，确认该特定任务是否允许使用 AI [2]。在没有明确许可的情况下，直接使用 ChatGPT 撰写论文属于违规行为。

Retrieved / selected chunks:
- [1] `0.661267` `web_page` Policies｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001610::structural_fallback_v1::P0026`)
- [2] `0.597549` `web_page` Undergraduate｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001646::structural_fallback_v1::P0010`)
- [3] `0.478666` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)
- [4] `0.713731` `course_record` Political Theory (`COURSE-2026-Spring-11335-POL215::structural_fallback_v1::P0014`)
- [5] `0.704058` `pdf_document` 運用ポリシー (`PDF-cffa110000e5b8dac2::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `2.077`
Answer mode: `remote_model`

Answer:

Based on the provided evidence, Professor Takashi Kaburagi (KABURAGI, Takashi) is teaching the following courses: * **Robotics** (Course No: ISC342) in Winter 2026 [1], [4]. * **Operating Systems** (Course No: ISC224) in Spring 2026 [2]. * **Quantum Information Science** (Course No: QNMS502) in Winter 2026 [5].

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `8.637`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: No retrieved passage contains the name 'Katakura' (鏑木). All passages list instructors such as Ishiwata, Kayashima, Tarumi, Komatsu, Komura, and Kaburagi.

Answer:

The provided evidence does not contain information about a course taught by Mr. Katakura (鏑木). The retrieved documents list instructors such as Ishiwata, Komatsu, Komura, and Kaburagi, but none of them are named Katakura. Therefore, it is not possible to identify the course taught by Mr. Katakura based on the available information.

Retrieved / selected chunks:
- [1] `0.009232` `course_record` Introduction to World History (`COURSE-2026-Spring-10613-TCP253::structural_fallback_v1::P0008`)
- [2] `0.005385` `course_record` Teaching, Learning and Assessment in the IB Programmes: MYP and DP (`COURSE-2026-Autumn-22109-QEED529::structural_fallback_v1::P0007`)
- [3] `0.00512` `course_record` Research on Education in Diverse Societies (`COURSE-2026-Winter-32106-QEED515::structural_fallback_v1::P0009`)
- [4] `0.004792` `course_record` Teaching, Learning and Assessment in the IB Programmes: MYP and DP (`COURSE-2026-Winter-32109-QEED529::structural_fallback_v1::P0007`)
- [5] `0.004792` `course_record` Advanced Studies in Mathematical Science II (`COURSE-2026-Spring-12404-QNMC506::structural_fallback_v1::P0001`)

### Qwen/Qwen3.5-4B / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `3.051`
Answer mode: `remote_model`

Answer:

Based on the retrieved evidence, Mr. Kaburagi, Takashi (鏑木先生) teaches the following courses at ICU: * **Robotics** (ロボット工学) - Course No: ISC342 [1] * **Operating Systems** (オペレーティングシステム) - Course No: ISC224 [2] The other instructors listed in the evidence are Toru Hayashi, Yuichi Moroi, and Tetsuro Matsuo.

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### Qwen/Qwen3.5-4B / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `10.806`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: No retrieved passages mention 'Kadori' (鏑木) or 'Mr. Kadori' (Kadori-san). All retrieved courses list different instructors (Hayashi, Moroi, Matsu, Kane, Fujii, Komatsu, Kayashima, Tsujita).

Answer:

Based on the retrieved ICU course materials, there is no record of a course taught by **Kadori-san** (鏑木先生). The available course records list the following instructors: * **HAYASHI, Toru** (Japanese Archaeology) [1] * **MOROI, Yuichi** (Introduction to Japanese Society) [2] * **MATSUO, Tetsuro** (Curriculum and Instruction) [3] * **KANEKO, Takuya** (Introduction to Capital Markets) [4] * **FUJII, Akiko** and **KOMATSU, Maki** (Teaching Practicum in IB World School) [5] No retrieved passages mention 'Kadori' or 'Mr. Kadori'. Therefore, it is not possible to state which courses he teaches based on the provided evidence.

Retrieved / selected chunks:
- [1] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [2] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [3] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)
- [4] `0.054904` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [5] `0.047869` `course_record` Teaching Practicum in IB World School (`COURSE-2026-Winter-32108-QEED528::structural_fallback_v1::P0012`)

### Qwen/Qwen3.5-4B / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `1.781`
Answer mode: `remote_model`

Answer:

To check if your registration is complete, you must access the **Registration Website** and confirm two specific items in the **"Registration Result"** section: 1. The registration results themselves. 2. That you have received **online approval from your advisor**. The registration process is not considered complete until you have received this advisor's online approval [1][2][3][4][5]. You should check these results the day after your registration or after the Late Registration period, and also after making any changes to your registration [1][2][5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### Qwen/Qwen3.5-4B / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `6.816`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 1, 2, 4, 5, 6, 7, and 8 explicitly state that after selecting courses, the user must access the 'Registration Website' and check the 'Registration Result' to confirm completion and advisor approval.

Answer:

To confirm your registration is complete, you must access the **Registration Website** and check the **"Registration Result"** section. Specifically, you need to verify two things: 1. Your course registration status. 2. That you have received **online approval from your advisor**. The registration process is not considered complete until your advisor grants this online approval [1][2][3][4][5]. You must also re-check the result whenever you add or drop courses [1][2][3][4][5]. Please note that confirming your registration is your own responsibility [1][2][3][4][5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [4] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)
- [5] `0.39129` `ehandbook_page` ehandbook - Winter Term (`DOC-000078::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `151.561`
Answer mode: `remote_model`

Answer:

* **How the level is decided:** Students will be placed in an appropriate course based on the result of the placement test [1]. Additionally, an additional evaluation of Japanese proficiency may be conducted during the first class sessions, and the course level placement might change based on this in-class assessment [3]. * **Where to check official information:** For details on the JLP program and course offerings, you should refer to the ICU website and the JLP website [3].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### google/gemma-4-E2B-it / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `5.311`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The level is decided based on the result of the placement test, and further evaluation may occur in-class.

Answer:

Students will be placed in an appropriate course based on the result of the placement test [1]. For more information, you can refer to the JLP Students’ Voices page on the ICU website [4].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.341912` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0000`)
- [3] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### google/gemma-4-E2B-it / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `2.214`
Answer mode: `remote_model`

Answer:

If you missed the normal course registration day because you were sick, you should complete your registration during the registration change period [3], [4], [5]. After the registration change period ends, the registration will not be accepted for any reason [3], [4], [5]. If you do not complete the registration during the designated period, you must take a leave of absence or withdraw from the university [3], [4], [5]. When making a registration change, make sure to click the "SAVE" button to complete the procedure, as the process is not finished unless this button is clicked [3], [4], [5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `7.034`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The evidence explains that registration on the normal day is not possible, and students can use the registration change period for late registration, with consequences for missing the deadline.

Answer:

If you missed the normal registration day, you should complete your registration during the registration change period [2], [3], [4]. After the registration change period ends, the registration will not be accepted for any reason [2], [4]. If you do not complete the registration during the designated period, you must take a leave of absence or withdraw from the university [2], [3], [5]. When making a registration change, be sure to click the "SAVE" button to complete the procedure, as the process is not finished unless this button is clicked [2], [3], [4], [5]. After the registration and registration change, confirm that the courses you want to take are correctly reflected [3], [4], [5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [3] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [4] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [5] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `3.76`
Answer mode: `remote_model`

Answer:

To withdraw from a course, you should check the following: * **Withdrawal Type:** Withdrawal means withdrawing all course registration for an ongoing term, and it is not possible to withdraw course registration partially [1], [3]. * **Reason for Withdrawal:** If you cannot continue your studies for an ongoing term due to illness or an unavoidable reason recognized by the University, permission for Registration Withdrawal may be granted by the CLA Dean or GS Dean [1], [3]. * **Application Submission:** You must submit an application for Registration Withdrawal to the Educational Affairs Group along with documents explaining your reasons, such as a medical certificate [3]. * **Deadline for Application:** The application for Registration Withdrawal must be submitted by one month prior to the last day of the classes [3]. * **Effective Date:** Withdrawal will be effective from the date indicated on the notice of acceptance issued by the Educational Affairs Group [2]. * **Consequence of Approval:** If Registration Withdrawal is approved, no grades will be given for any registered courses for that term; instead, a "W" will be recorded for those courses [3].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### google/gemma-4-E2B-it / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `9.758`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss withdrawal deadlines and procedures generally, but do not specifically detail the rules or deadlines to check *after seeing the workload* before withdrawing.

Answer:

To withdraw from a course, you should check the following: * **Withdrawal Type:** Registration Withdrawal means withdrawing all course registration for an ongoing term, and it is not possible to withdraw course registration partly [1], [3]. * **Application Submission Deadline:** * For Withdrawal from the Spring Term: March 31 [2] * For Withdrawal from the Autumn Term: August 31 [2] * For Withdrawal from the Winter Term: November 30 [2] * The deadline is the previous Friday if the stipulated date falls on a Saturday, Sunday, or national holiday [2]. * **Application Process:** You should submit a completed form to the Educational Affairs Group along with your ID Card [2]. If you are withdrawing due to illness or an unavoidable reason recognized by the University, permission for Registration Withdrawal may be given by the CLA Dean or GS Dean [1], [3]. * **Timing:** Withdrawal will be effective from the date indicated on the notice of acceptance issued by the Educational Affairs Group [2].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006513` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `3.367`
Answer mode: `remote_model`

Answer:

To confirm whether courses or credits will count toward your ICU requirements, you should look for information regarding transferring credits from other universities or study abroad programs [1]. Specifically: * For summer programs approved by ICU, students who complete coursework at other universities may transfer credits if they are approved to count toward ICU's graduation requirements [1]. A maximum of 40 credits may be transferred, and these transferred credits will count toward Elective Course requirements [1]. * For Study Abroad Programs, credits earned at partner institutions can be recognized as part of the credit unit requirements for graduation from ICU, up to a maximum of 40 credits after a review process [3]. * ICU students can take selected courses at partner universities, such as the University of Tsukuba, and have the earned credits counted toward graduation requirements through a review process [4], [5]. * ICU students can take selected courses at Sophia University and have the earned credits counted toward graduation requirements through a reciprocal credit system [5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### google/gemma-4-E2B-it / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `7.74`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly states that courses from approved summer programs may transfer credits towards graduation requirements, and passage [6] mentions credits earned at partner institutions are recognized for graduation.

Answer:

* **Summer Abroad Programs:** Students who participate in summer programs approved by ICU and complete the coursework at other universities may transfer the credits if they are approved to count toward ICU's graduation requirements [1]. * **Partner Institutions:** You can take selected courses at partner universities and have the credits you earn counted toward graduation requirements at ICU through a review process [3], [4]. For example, ICU students can take selected courses at the University of Tsukuba and have the credits earned counted toward graduation requirements at ICU through the review process [3], [4]. Similarly, ICU students can take selected courses at Sophia University and have the credits earned counted toward graduation requirements at ICU through the review process [4]. * **Transfer Student Credits:** Students who have completed courses at other universities before entering ICU may transfer those credits if the courses are considered equivalent to courses offered at ICU, are approved as applicable toward ICU graduation requirements, and if the grades received were 70 points or higher out of 100 [5]. Credit transfers will only be granted after you complete the required procedures after entering ICU, and the exact number and which credits are transferable will not be confirmed until then [5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)
- [5] `0.476808` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `1.853`
Answer mode: `remote_model`

Answer:

To find the official schedule and expected deadlines for your senior thesis, you should check the ehandbook for the Senior Thesis [3]. The ehandbook includes information on the Senior Thesis Guidelines, including the Senior Thesis Submission Deadline [3]. Detailed instructions and the deadline will be updated on the ICU Portal [3]. For specific course schedules, you can refer to the course records for Senior Thesis for the Autumn 2026 term [1] and the Winter 2026 term [2].

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `8.788`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: Evidence mentions where to check (ICU Portal, ehandbook) and that schedules will be announced later, but does not provide the official schedule or specific types of deadlines.

Answer:

The schedule for senior thesis details and the application procedure will be posted on the ICU Portal and ehandbook at the end of September [1, 2]. You should check this information and take the necessary procedures [1, 2]. Regarding specific deadlines, there is a deadline for the submission of senior theses for March graduates [3, 4, 5].

Retrieved / selected chunks:
- [1] `0.904482` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0004`)
- [2] `0.86212` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0004`)
- [3] `0.889912` `portal_calendar_event` 春季卒業生卒業論文定稿提出締切日Deadline for Submission of March Graduates' Senior Theses (`DOC-000675::structural_fallback_v1::P0000`)
- [4] `0.889912` `portal_calendar_event` 春季卒業生卒業論文定稿提出締切日Deadline for Submission of March Graduates' Senior Theses (`DOC-000599::structural_fallback_v1::P0000`)
- [5] `0.872673` `portal_calendar_event` Deadline for Submission of March Graduates' Senior Theses春季卒業生卒業論文定稿提出締切日 (`DOC-000529::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `1.386`
Answer mode: `remote_model`

Answer:

Before planning your courses again after taking a leave of absence and returning to ICU, you should check with your faculty members, as they may ask you to provide documentation such as a doctor's certificate or a prescription record book for sick leave or missing classes for reasons other than infectious diseases [3]. You can look up faculty contact information through icuMAP [3].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### google/gemma-4-E2B-it / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `7.017`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [4] mentions submitting a physician's certificate to the Educational Affairs Group (EAG) if the leave was due to a medical condition, and passage [6] mentions submitting a 'Report of Return from Ryugaku' to the EAG before Registration day upon return.

Answer:

If you take a leave of absence due to a medical condition and plan to return, you must submit a physician's certificate attesting that the condition will not affect your studies at ICU after your return to the Educational Affairs Group (EAG) [1]. Failure to submit this form may result in you being unable to participate in course registration [1].

Retrieved / selected chunks:
- [1] `0.810779` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0005`)
- [2] `0.449544` `ehandbook_page` ehandbook - Ryugaku, Leave of Absence, Reenrolment, Withdrawal, Readmission, Status Extension, Status Change, Dismissal (`DOC-000085::structural_fallback_v1::P0007`)
- [3] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [4] `0.902952` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0005`)
- [5] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)

### google/gemma-4-E2B-it / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `2.19`
Answer mode: `remote_model`

Answer:

You can find information about mental health support at the ICU Health Care Office for Students [3]. This office consists of the University Physician and nurses, who provide first aid and health consultation daily and twice a week, and the physician provides health consultation and referral letters [4]. The ICU Counseling Center offers general mental health counseling, consultation about friends and career paths, sharing feelings about loss, and consultation on addiction support [3]. The ICU Counseling Center also has a consultation dial in Mitaka City that allows anyone to consult regardless of gender, and counselors from specialized consultation organizations are in charge [3].

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `5.702`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly mentions the ICU Counseling Center for general mental health counseling.

Answer:

ICUカウンセリングセンターでは、一般のメンタルヘルスに関するカウンセリングを受けることができます [1]。 また、ICUの健康管理オフィスでは、学生と教職員の健康管理支援を行っており、保健スタッフが怪我や病気に対する応急処置や健康に関する相談に対応し、週に2回、校医による面談も行っています [5]。 学生の障害に関する支援については、学修アクセシビリティ支援室が窓口となり、身体障害、学習障害、発達障害、精神障害などを持つ学生に対して合理的配慮を提供しています [2], [5]。

Retrieved / selected chunks:
- [1] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [2] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [3] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)
- [4] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [5] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)

### google/gemma-4-E2B-it / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `1.794`
Answer mode: `remote_model`

Answer:

If you need reasonable accommodations for a course due to a disability or chronic illness, you should consult with your course instructor and the Learning Accessibility Services [1, 2, 4, 5]. ICU provides reasonable accommodations in accordance with the "Basic Policy for Supporting Students with Disabilities" [1, 5]. For accommodations related to exams and assignments, the Learning Accessibility Services office plays an intermediary role between a student and an instructor to request or arrange necessary accommodations [3].

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `7.121`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The text directs students to meet with LAS staff to discuss needs and mentions the LAS office plays an intermediary role for accommodations.

Answer:

If you need exam accommodations due to a disability or health condition, you should first meet with a Learning Accessibility Services (LAS) staff member to discuss your needs [1]. The LAS office acts as an intermediary between you and an instructor to request or arrange necessary accommodations for exams and assignments [2], [3]. To apply for academic accommodations, the steps include: 1. Meeting with a LAS staff member to discuss your needs [1]. 2. Submitting necessary documents, such as a medical certificate from your doctor or a letter from a counselor or other specialist, and a Request for Academic Accommodations Form (which must be signed by your advisor) [1]. 3. Developing an accommodation plan with a member of the LAS staff [1]. 4. The LAS office delivers your accommodation requests to your professors [1]. For more information specific to your needs, you can contact the LAS office [2].

Retrieved / selected chunks:
- [1] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [2] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [5] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `2.912`
Answer mode: `remote_model`

Answer:

If you are graduating from your undergraduate school and continuing to ICU graduate school, new accounts will be issued after Matriculation day [4]. Regarding your existing accounts: * Your account (ICU Net ID, ICU Portal, Mail, Google Workspace, etc. ) will expire on March 31, 2026 [1]. * If you still need to exchange emails after graduation, it is recommended that you use an email address you can use after graduation instead of a @icu. ac. jp email address, as email forwarding will stop [1]. * You should back up any necessary files from Gmail and Google Drive before graduation [1]. When your account is deleted, you will not be able to log in to Google (@icu. jp), see the Joining ceremony announcement, or view other information [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### google/gemma-4-E2B-it / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `6.799`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly mentions that accounts (ICU Net ID, ICU Portal, Mail, Google Workspace, etc.) will expire on a specific date for students graduating.

Answer:

If you are graduating from your undergraduate school and continuing to ICU graduate school, new accounts will be issued after Matriculation day [4]. For accounts such as ICU Net ID, ICU Portal, Mail, and Google Workspace, these accounts will expire on March 31, 2026 [1]. If you still need to exchange emails after graduation, it is recommended that you use an email address you can use after graduation, rather than a @icu.ac.jp email address, as email forwarding will stop [1]. You should back up any necessary files from Gmail and Google Drive before graduation [1]. When your account is deleted, you will not be able to log in to Google (@icu.ac.jp), you will not see the announcement of the Joining ceremony, and you will not see information about graduate school files created while you were at ICU [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### google/gemma-4-E2B-it / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `4.168`
Answer mode: `remote_model`

Answer:

JLPのレベル分けや履修方法に関する公式情報は、ICUのウェブサイトやJLPのウェブサイトで確認できます[2]。 また、JLP科目の履修には、JLP Placement Test（PT）を受け、その結果によって履修できる科目レベルが決まります[1]。 PTの実施時期と有効期間については、毎年2回（3月・8月）実施され、履修希望学期に対応する時期のPTを受験する必要があります[1]。 JLPの履修要件については、入学時の語学力によって変更される場合があり、9月入学生で日本語の知識がない学生は45単位分のJLPを履修しなければならないとされています[5]。 日本語が母国語であるが読み書きの能力に欠ける者は、「日本語特別教育（Special Japanese）」を履修することで日本語履修要件を満たすことができます[5]。 日本語の能力が高い場合はJLPの履修要件の一部が免除されることがあります[5]。 詳細については、ICUのウェブサイトやJLPのウェブサイトを参照してください[2]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### google/gemma-4-E2B-it / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `13.047`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explain that the JLP level is determined by the placement test result, and provide details on the CEFR levels and tracks.

Answer:

JLPのレベル分けは、プレースメントテストの結果に基づいて決定されます[2]。入学後にプレースメントテストを受け、その結果により最高で45単位のJLP科目が課されますが、日本語能力が十分にあると認められる者はJLPが免除される場合があります[1]。 JLPには、日本語の学習目標としてCEFRレベルが用いられ、CEFRはA1からC2までの6つのレベルで、これらはBasic User、Independent User、Proficient Userの3つの広範なレベルに分類されます[3]。具体的には、「Japanese Track」と「Special Japanese Track」があり、それぞれ異なるCEFRレベルが設定されています[2]。 公式情報を確認するには、JLPのウェブサイトを参照してください[3]。また、JLPコースを受講するには、JLPプレースメントテストを受け、割り当てられたコースに登録し、学術アドバイザーの承認を得る必要があります[4]。

Retrieved / selected chunks:
- [1] `0.897336` `pdf_document` 自己点検・評価報告書（2009年） (`PDF-49a3e05f4c1ecc7e15::structural_fallback_v1::P0067`)
- [2] `0.522339` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [3] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [4] `0.986879` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0000`)
- [5] `0.891244` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0120`)

### google/gemma-4-E2B-it / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `3.015`
Answer mode: `remote_model`

Answer:

* **Chapel Hour:** This is held every Tuesday during the lunch period [2], [4]. It is a time for students, faculty, and staff to pray and reaffirm the foundation of ICU [4]. University ministers, staff members, students, and guests from outside the university speak during this time [2], [4]. It is open to everyone [4]. * **Christianity Week (C-Week):** This is held in May every year [1]. A committee led by students organizes various events related to Christianity for the entire university under a special timetable [1]. These events include early-hour services and open houses where the President and other faculty members who live on campus invite undergraduate and graduate students to their homes [1]. Christianity Week involves a full week of daily programs, including addresses by outstanding speakers and group discussions in faculty homes and elsewhere [2].

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### google/gemma-4-E2B-it / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `6.343`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] explicitly mentions Chapel Hour and Christianity Week in the context of university chapel services, and passage [4] details the schedule for Chapel Hour.

Answer:

Chapel Hour is held every Tuesday during the lunch period in the University Chapel [2]. It is a time for faculty, staff, and students to pray and reaffirm the foundation of ICU [2]. Chapel Hour is open to everyone [2]. Christianity Week (C-Week) is held in May every year and includes various events related to Christianity for the entire university under a special timetable [1]. These events include early-hour services and open houses where the President and other faculty members invite undergraduate and graduate students to their homes for dialogues [1].

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [3] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [4] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [5] `0.129843` `web_page` ONE YEAR at ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001560::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `3.792`
Answer mode: `remote_model`

Answer:

For the AY2026 Spring Term, the following information is provided regarding the registration period and advisor interview timing: * **Online Input:** April 9 (Thu) from 9:00 to April 10 (Fri) at 14:30 [1], [2] * **Advisor Interview:** April 9 (Thu) from 10:00 to 16:00, and April 10 (Fri) from 9:00 to 15:30 [1], [2] For newly enrolled students from the AY2026 Autumn Term, you should check "Campus Pathfinder" in Moodle instead of this announcement [1], [2]. You should check icuMAP in advance to see who your advisor is [1], [2]. You should receive a message from your advisor with details about their advising method (location, time set, etc. ) sometime after April 6 [1]. If you do not hear from your advisor by the evening of April 6, you should send an email to confirm the interview details [1], [2].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `6.601`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] provide specific dates for registration and advisor interviews for AY2026 Spring Term.

Answer:

For the AY2026 Spring Term, the registration period and advisor interview timing are as follows: * **Online Input:** April 9 (Thu) from 9:00 to 14:30 [1, 2] * **Advisor Interview:** April 9 (Thu) from 10:00 to 16:00 [1, 2] * **Online Approval by Advisor:** April 9 (Thu) from 10:00 to 16:30 [1, 2] For newly enrolled students from the AY2026 Autumn Term, you should check “Campus Pathfinder” in Moodle instead of this announcement [1, 2].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.311322` `portal_notice` AY2025 Spring Term Registration – Course Registration Procedures (`DOC-000811::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `1.09`
Answer mode: `remote_model`

Answer:

The system cannot tell you exactly how many more credits you personally need to graduate early [2]. Credit transfers will only be confirmed after you complete the required procedures after entering ICU [2]. The number and which credits are transferable will not be confirmed until then [2].

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `9.021`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss eligibility and maximum transfer limits but do not provide a mechanism to calculate the exact remaining credits needed for early graduation.

Answer:

If you transferred credits before entering ICU, you may be able to transfer those credits if the courses are considered equivalent to those offered at ICU or are approved to be counted towards graduation requirements [4]. The grades for these courses must be C (70/100) or higher [4]. The maximum number of credits that can be transferred depends on your situation: * Students who spent more than 1 year at other universities or have obtained an associate degree may transfer up to 60 credits [4]. * Within the maximum number of credits, up to 12 credits of General Education Courses, 1 credit of Health and Physical Education Lecture Courses, 1 credit of Physical Education Exercise Courses, 9 credits of Foundation Courses, and 41 credits of Elective Courses may be transferred [4]. The evidence does not provide a mechanism to calculate the exact remaining credits you need for early graduation [1, 2, 3, 4, 5].

Retrieved / selected chunks:
- [1] `0.984575` `ehandbook_page` ehandbook - Transferring Credits from Other Universities (`DOC-000058::structural_fallback_v1::P0000`)
- [2] `0.969785` `ehandbook_page` ehandbook - 単位互換制度 (`DOC-000194::structural_fallback_v1::P0000`)
- [3] `0.901575` `ehandbook_page` ehandbook - Students Who Have Studied at Other Universities and Entered ICU as Freshmen (`DOC-000060::structural_fallback_v1::P0000`)
- [4] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [5] `0.927232` `pdf_document` 自己点検・評価報告書（2016年） (`PDF-ee9dc38849ee842f8d::structural_fallback_v1::P0043`)

### google/gemma-4-E2B-it / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `3.809`
Answer mode: `remote_model`

Answer:

履修登録に関する問い合わせ先や関連する公式ページについての具体的な情報は、提供された証拠からは確認できませんでした。 ただし、履修登録の手続きに関して、以下の情報が確認できます。 * 履修登録は、Registration Websiteで学期に履修する科目を入力し、登録当日にアドヴァイザーの承認を得て初めて完了します [3]。 * 申請書による履修登録を行う場合、所定の申請書を教務グループに提出する必要があります。 用紙は登録日の1週間前から教務グループ窓口で配布されます [3]。 * 申請書による履修登録の提出期間は、「登録日～登録変更期間最終日10:00」です [3]。 * 履修登録および登録の確認は学生本人の責任であり、怠ったために生じた問題について大学は責任を負いません [3]。 * 履修に問題がありそうな場合は、早めに教務グループに相談に来てください [4]。

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `7.903`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [8] explicitly mentions that some course registrations require submitting an application form to the Educational Affairs Group office and where to find the forms.

Answer:

履修登録について、以下の点を確認してください。 * 一部の科目の履修登録には、申請書を教育事務グループに提出する必要があります [1]。 * 申請書は、登録日の1週間前から教育事務グループ窓口で配布されます [1]。 * 申請の提出期間は、登録日から登録変更期間最終日の10:00までです [1]。 * 制限受講単位数17単位を超える履修を希望する場合、累積GPAが3.40以上で、指導教員と学部長の許可を得る必要があります [1]。この場合、申請書には指導教員の署名が必要です [1]。 詳細については、ehandbookの「履修登録」の項目を参照してください [5]。

Retrieved / selected chunks:
- [1] `0.431105` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0001`)
- [2] `0.601594` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0005`)
- [3] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [4] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [5] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `6.868`
Answer mode: `remote_model`

Answer:

As the provided evidence does not contain information on how to resolve discrepancies between a chatbot answer and an ICU Portal announcement regarding a deadline, it is not possible to determine which source to trust or what to do next based solely on this evidence. [1] [2] [3] [4] [5]

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `7.552`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved documents only mention a deadline of September 5 from the portal notices, but they do not address the user's question about which source to trust or what to do when there is a discrepancy between the chatbot and the portal.

Answer:

The provided evidence only states that the deadline for submission is September 5 [1, 2]. There is no information in the provided evidence on which source to trust or what to do if there is a discrepancy between the chatbot and the ICU Portal announcement [3, 4].

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `1.751`
Answer mode: `remote_model`

Answer:

* **Instructor:** The instructor for Logic Programming (Course No: ISC321) in Autumn 2026 is TAMMO M. REISEWITZ [2], [3], [5]. * **Schedule:** The course is scheduled for Autumn 2026 [2], [3], [4], [5]. * **Official Course Information:** You should check the URL provided in the course information for more details [3].

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### google/gemma-4-E2B-it / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `8.08`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages confirm the instructor (REISEWITZ, TAMMO M.), the term (Autumn 2026), and provide context about the course, which implies where to check official info (course record).

Answer:

* **Instructor:** REISEWITZ, TAMMO M. [1, 2, 3, 4, 5] * **Schedule:** The schedule is listed as 5/TU and 6/TU [1]. * **Official Course Information:** You should check the course record for official information [1].

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [3] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)
- [4] `0.943452` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0003`)
- [5] `0.940898` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `3.154`
Answer mode: `remote_model`

Answer:

The grading policy for the Statistical Information Literacy course varies depending on the term: * For the Spring 2026 term, the grading is: Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. * For the Autumn 2026 term, the grading includes: Active participation in classes (15%), Application workshops (35%), and an End of term data analysis project (50%) [2]. The required work or content of the course includes: * The course covers topics such as average, variance, conditional probability, independence, random variables, characteristics of distributions, distributions, and inference from sample data (including various interpretations due to differences in measurement periods) [5]. * The course lectures cover the rudiments of statistics, sampling methods, and data processing methods, and students use computers during the course [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### google/gemma-4-E2B-it / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `7.108`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] details the grading policy (Exam, Report, Daily quiz, Class participation), and Passage [2] details another grading policy (Active participation, Application workshops, End of term data analysis project).

Answer:

The grading policy for S2: Statistical Information Literacy varies by term: * For the Spring 2026 term, the grading is: Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. * For the Autumn 2026 term, the grading is: Active participation in classes (15%), Application workshops (35%), and End of term data analysis project (50%) [2]. The course content involves learning the basic skill of data analysis for studying the social sciences, including lectures on the rudiments of statistics, sampling methods, and data processing methods. Students will use computers during the course [4]. The course will also cover the mathematical foundations of probability, randomness, and how this informs the understanding of how real-world data may be generated [4].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)

### google/gemma-4-E2B-it / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `3.262`
Answer mode: `remote_model`

Answer:

MIURA先生は、以下の日本語の授業を担当しています[1, 2, 3, 4, 5]。 * **Middle English（中英語）**: 2026年春学期に担当しています[1]。 * **Special Japanese Kanji 1（日本語特別教育 漢字1）**: 2026年冬学期に担当しています[2]。 * **J2: Japanese（日本語J2）**: 2026年春学期、秋学期、冬学期に担当しています[3, 5]。 この授業は、話しことばおよび書きことばのCEFR A2. 1レベルを目標としており、「日本語J1」または同等のレベルを既修であることが前提条件です[3, 5]。

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `7.686`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages [1], [2], and [8] indicate that MIURA, Ayano teaches the J2: Japanese course, which targets the CEFR A2.1 level.

Answer:

MIURA先生は、「J2: Japanese」という日本語の授業を担当しています [1], [2], [3], [4]。この授業は、日本語の話しことばと書きことばについて、CEFR A2.1レベルを目標としており、他者との関わりにおける言語活動に焦点を当てています [1], [2], [4]。また、「日本語J1」または同等のレベルを既修であることが前提条件です [1], [2], [4]。 さらに、MIURA先生は「Vocabulary and Kanji for Intermediate Learners of Japanese 2」という授業でも担当しており、この授業では講義、読解資料、試験、ディスカッションなど、すべて日本語が使用されます [5]。

Retrieved / selected chunks:
- [1] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [2] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.097048` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0000`)
- [4] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [5] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)

### google/gemma-4-E2B-it / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `1.367`
Answer mode: `remote_model`

Answer:

履修登録や登録変更を行った後は、必ずRegistration Websiteの「Registration Results」で登録結果を確認してください。 また、アドヴァイザーによるオンライン承認が下りているかも必ず確認してください[1], [4], [5]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `7.901`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The text advises checking the 'Registration Result' on the Registration Website after registration or changes, and confirming advisor approval, which directly addresses the user's concern about registration completion.

Answer:

履修登録が完了したか不安な場合は、以下の点を確認してください。 * **登録結果の確認:** 履修登録の翌日、またはLate Registration後は、Registration Websiteの「Registration Result」で登録結果と、アドヴァイザーによるオンライン承認を受けていることを必ず確認してください[1], [2], [3]。登録変更を行った後も、登録結果を必ず確認する必要があります[1], [2], [3]。 * **アドヴァイザーの承認:** 履修登録は、アドヴァイザーからオンラインによる承認を受けて初めて完了します[4]。アドヴァイザーにオンライン承認されるまで、登録手続きは完了していません[4]。 履修登録および登録の確認は学生本人の責任であり、定められた期間を過ぎて履修登録または登録変更を申請しても一切受理されません[1], [3]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `3.515`
Answer mode: `remote_model`

Answer:

To purchase textbooks for the Spring Term AY2026, you should check the "Spring AY2026 Textbook Purchase" information [3]. Details regarding the purchase include: * Textbooks will be on sale from Monday, April 6 to Monday, April 20 [3], [4]. * You can complete the purchase using a smartphone or another device via a 2D code or URL provided in the guidance document [3], [4]. * You can pick up your textbooks at an on-campus location for this semester; refer to the guidance document for specific pickup dates, times, and locations [3], [4]. * Textbooks are sold at a 10% discount off the list price (excluding digital textbooks) [3], [4]. * Shipping fees apply for home delivery [3], [4]. You should not expect the chatbot to know the specific details of the guidance document, pickup dates, locations, or the list of textbooks [3], [4].

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `8.129`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] provide information about when textbooks will be on sale for Spring AY2026 and how to purchase them, which addresses the first part of the question.

Answer:

To purchase textbooks for the Spring Term AY2026, you should check the provided guidance document for details on how to complete the purchase using a smartphone or other device via the 2D code or URL [1], [2]. Details you should not expect the chatbot to know include: * Textbooks will be on sale from Monday, April 6 to Monday, April 20 [1], [2]. * You can pick up textbooks at an on-campus location, and specific pickup dates, times, and locations can be found in the guidance document [1], [2]. * Textbooks are sold at a 10% discount off the list price (excluding digital textbooks) [1], [2]. * Shipping fees apply for home delivery [1], [2]. * Contact information for inquiries is available through the OnSMaRT desk (MARUZEN-YUSHODO Co., Ltd.) at smarts@maruzen.co.jp [1], [2].

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.003136` `ehandbook_page` ehandbook - March 29,2024 Important Information from Educational Affairs Group (Spring) (`DOC-000106::structural_fallback_v1::P0000`)
- [4] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)
- [5] `0.021492` `portal_notice` 一般教育ハンドブック 2026 (`DOC-001050::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `1.25`
Answer mode: `remote_model`

Answer:

The provided evidence lists several courses, such as Global Governance [1], Introduction to Business Administration [2], Introduction to Capital Markets [3], X: Introduction to Christianity [4], and English Communication [5]. However, the evidence does not specify which of these are mandatory courses you need to take after coming to ICU.

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `7.639`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved documents discuss general admission requirements, specific mandatory courses for certain entry types (e.g., language programs), and graduation requirements, but do not explicitly list the mandatory courses required immediately after coming to ICU.

Answer:

4月入学の学生は、入学後の語学要件として「リベラルアーツ英語（ELA）」が必修となります[2]。 また、4月入学では主として日本語を母語とする学生を受け入れているため、日本語による入学試験が実施されます[2]。 卒業要件として、一般教育科目のうち人文科学、社会科学、自然科学の3系列からそれぞれ1科目3単位以上履修することが定められており、これに全学必修の人文科学系列である「キリスト教概論」の単位を加えて合計21単位を取得することが卒業要件となります[5]。

Retrieved / selected chunks:
- [1] `0.959078` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0108`)
- [2] `0.821474` `pdf_document` 自己点検・評価報告書（2016年） (`PDF-ee9dc38849ee842f8d::structural_fallback_v1::P0056`)
- [3] `0.570511` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [4] `0.508514` `ehandbook_page` ehandbook - 1年次に入学した学生 (`DOC-000190::structural_fallback_v1::P0000`)
- [5] `0.622287` `pdf_document` 自己点検・評価報告書（2009年） (`PDF-49a3e05f4c1ecc7e15::structural_fallback_v1::P0022`)

### google/gemma-4-E2B-it / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `0.534`
Answer mode: `remote_model`

Answer:

The provided evidence does not state what the mandatory course is after entering ICU.

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `7.259`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [5] explicitly states that the required language program after enrollment is the Japanese Language Program (JLP).

Answer:

The mandatory language program after enrollment depends on the admission route: * For April entry, the required language program after enrollment is the Japanese Language Program (JLP) [1]. * For September entry, the required language program after enrollment is the English Language Based Admissions (ELA) [1]. * From the 2025 academic year, students who meet certain requirements may choose the JLP [1].

Retrieved / selected chunks:
- [1] `0.544953` `pdf_document` PDF (`PDF-27b914f67bf91c7384::structural_fallback_v1::P0008`)
- [2] `0.826011` `pdf_document` 自己点検・評価報告書（2016年） (`PDF-ee9dc38849ee842f8d::structural_fallback_v1::P0056`)
- [3] `0.649467` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [4] `0.704567` `pdf_document` 自己点検・評価報告書（2009年） (`PDF-49a3e05f4c1ecc7e15::structural_fallback_v1::P0022`)
- [5] `0.554893` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)

### google/gemma-4-E2B-it / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `4.03`
Answer mode: `remote_model`

Answer:

ICUに入学した後、保健体育プログラムでは、卒業のための必修要件として「健康科学（Health Science）」（1科目・1単位）と実技科目である「PEエクササイズⅠ・Ⅱ・Ⅲ (Physical Education Exercise Ⅰ・Ⅱ・Ⅲ)」（3種目・1単位、各種目は1/3単位）を履修する必要があります[1]。 また、教員免許状を取得し、将来教師になることを志望している学生は、教職課程の必修科目として「体育理論（Physical Education）」を履修します[1]。 どの公式ページを見るべきかについては、履修要件に関する情報は保健体育のページに記載されています[1]。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### google/gemma-4-E2B-it / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `7.613`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The text explicitly states the required courses for graduation: '健康科学（Health Science）' and 'PEエクササイズⅠ・Ⅱ・Ⅲ'.

Answer:

ICUでは、卒業のための必修要件として、「健康科学（Health Science）」（1科目・1単位）と実技科目である「PEエクササイズⅠ・Ⅱ・Ⅲ (Physical Education Exercise Ⅰ・Ⅱ・Ⅲ)」（3種目・1単位、各種目は1/3単位）を履修する必要があります[1]。 これらの科目は、大学生活を送る中での「健康」や「安全」について学ぶだけでなく、生涯にわたるQuality of Life（生活の質）の向上につながる知識や技術を学ぶこと、また、実技科目では集団活動におけるコミュニケーション力やリーダーシップ性などを体験を通して身につけることを目指します[1]。 履修に関する詳細は、保健体育のページを確認することが推奨されます[1]。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### google/gemma-4-E2B-it / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `3.004`
Answer mode: `remote_model`

Answer:

As a graduation requirement, ICU students must take one course of Health Science (worth one credit), which includes lectures on health and physical education, along with three courses in Physical Education Exercise I, II, and III (worth one credit in total, meaning one-third of a credit per course), which involve practical exercises [1], [2]. For more details, you should visit the ICU Career Support Office [3].

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### google/gemma-4-E2B-it / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `8.632`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] detail the required courses for graduation, and the question about the official page is answered by the context of the retrieved documents which are from the ICU website.

Answer:

ICUの卒業要件として、学生は以下の科目を履修する必要があります[1], [2]： * **健康科学 (Health Science)**：1科目・1単位 [1], [2] * **PEエクササイズⅠ・Ⅱ・Ⅲ (Physical Education Exercise Ⅰ・Ⅱ・Ⅲ)**：3種目・1単位（各種目は1/3単位）[1], [2] これらの科目を通じて、学生は健康や安全について学び、生涯にわたる生活の質の向上につながる知識や技術を得ます[1], [2]。また、実技科目では、集団活動におけるコミュニケーション力、リーダーシップ性、フォロアーシップ性などを体験を通して身につけることができます[1], [2]。 これらの必修要件に関する公式ページは、ICUのウェブサイトの「Physical Education」または「保健体育」のページで確認できます[1], [2]。

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.509`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### google/gemma-4-E2B-it / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `10.366`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: ICUの方針として、生成系AIの使用を全面的に否定するものではないが、成績評価のための提出物に使用し、あたかも自分自身が作成したかのように振る舞うことは問題視される、と記載されているため。

Answer:

大学の卒論にチャットGPTを使用することについて、国際基督教大学（ICU）の学問的インテグリティの方針に基づき、以下の点が重要です。 * **生成系AIの使用について:** ICUは生成系AIの使用を全面的に否定するものではありません [1], [2]。 * **成績評価のための提出物について:** 生成系AIが作成したものを、本学における成績評価のための提出物に使用し、あたかも自分自身が作成したかのように振る舞うことは、アカデミック・インテグリティの方針が定義する「剽窃」に相当します [1], [2]。 * **剽窃の定義:** アカデミック・インテグリティの方針では、「他人の研究に使われている考え方や言葉、文章や調査研究をあたかも自分自身のものであるかのように偽ることは、学問的倫理基準を侵すことになります」とされています [1], [2]。 * **提出物の要件:** 教員の評価を受けるための学生の提出物（レポート、試験の答案など）は、自分自身のもの（オリジナル作品）でなければなりません [1]。学生は自分自身で考え、調査研究したものでない情報の出典は、明らかにし、正しく引用することが求められます [1], [2]。 * **AIの懸念点:** 生成系AIが使用しているデータが他人の著作物などから成り立っているため、AIが出力する回答自体が著作権侵害や剽窃である可能性があるという懸念もあります [1], [2]。 要するに、チャットGPTなどの生成系AIを利用することは可能ですが、その成果物を成績評価のための提出物として提出する際には、**自分自身のオリジナル作品として偽らない**ことが求められます [1], [2]。

Retrieved / selected chunks:
- [1] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)
- [2] `0.000566` `web_page` 教育の特徴：大学院｜国際基督教大学（ICU） (`DOC-001744::structural_fallback_v1::P0008`)
- [3] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [4] `0.000469` `web_page` Undergraduate｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001646::structural_fallback_v1::P0008`)
- [5] `0.000451` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0004`)

### google/gemma-4-E2B-it / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.218`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### google/gemma-4-E2B-it / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `10.256`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: Evidence mentions abiding by ICU Generative AI policies for the senior thesis, but does not explicitly state whether ChatGPT is permitted.

Answer:

Students must abide by the ICU Generative AI policies when writing their senior thesis [1], [2], [3]. The unauthorized and unspecified use of generative AI in any stage of writing the senior thesis, and presenting work produced by others, including generative AI, as entirely your own work is considered a breach of ICU policy on academic integrity and may result in an E grade [1], [2], [3].

Retrieved / selected chunks:
- [1] `0.431764` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0012`)
- [2] `0.430566` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0012`)
- [3] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [4] `0.846324` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)
- [5] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)

### google/gemma-4-E2B-it / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `4.19`
Answer mode: `remote_model`

Answer:

ICU의 졸업 논문에 ChatGPT를 사용할 수 있는지에 대한 명확한 정보는 제공된 증거에서 찾을 수 없습니다. 다만, 다음과 같은 관련 정책이 있습니다. * 졸업 논문(Senior Thesis)의 경우, 생성형 AI의 무단 및 비특정적 사용, 또는 생성형 AI가 생성한 결과물을 전적으로 본인의 결과물인 것처럼 제시하는 것은 ICU의 학문적 정직성 정책 위반이며 E 학점을 받을 수 있습니다 [2]. * 학생들은 ICU의 생성형 AI 사용에 관한 정책을 준수해야 합니다 [2]. * 일반적으로 수업은 ICU의 생성형 AI 사용에 관한 정책을 따르며, 예외 사항은 수업 시간에 논의될 수 있습니다 [3].

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `12.96`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved documents discuss the use of generative AI in general policies but do not explicitly state whether ChatGPT can be used in ICU graduation theses.

Answer:

在ICU的毕业论文中，学生必须遵守ICU的生成式人工智能政策。未经授权和未指明的生成式人工智能在撰写毕业论文的任何阶段的使用，以及将由生成式人工智能产生的作品（包括生成式人工智能的作品）作为完全由自己完成的作品提交，构成违反ICU学术诚信政策，并可能导致E等级 [1]。 ICU强调批判性思维，要求学生以自己的话思考、研究、反思并组织他们的回答 [3]。生成式人工智能生成的文本，即使经过一些修改，也不被视为自己的作品，并可能被视为违反学术诚信政策 [3]。对于需要自己完成的任务，不应使用生成式人工智能 [4, 5]。在使用生成式人工智能时，需要进行适当的审慎，细致的关注和专业知识，并且有必要批判性地审查输出并更正任何问题 [3]。依赖生成式人工智能可能意味着放弃人类创作词语和句子的努力，阻碍在创造力、批判性思维以及信息收集、组织、讨论、写作和语言学习等方面的成长 [3]。

Retrieved / selected chunks:
- [1] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.595316` `web_page` Policies｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001610::structural_fallback_v1::P0014`)
- [3] `0.395718` `web_page` Policies｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001610::structural_fallback_v1::P0026`)
- [4] `0.363534` `web_page` Vision, Policies & Pledge｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001618::structural_fallback_v1::P0004`)
- [5] `0.363534` `web_page` Vision, Policies & Pledge｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001574::structural_fallback_v1::P0004`)

### google/gemma-4-E2B-it / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `7.136`
Answer mode: `remote_model`

Answer:

鏑木先生が担当している授業には、以下のものがあります[1, 2, 5]。 * Robotics（ロボット工学）[1, 4] * Operating Systems（オペレーティングシステム）[2] * Quantum Information Science（量子情報科学）[5][1] Course No: ISC342 Registration No: 31207 Title: Robotics / ロボット工学 / 2/W,2/F Term: Winter 2026 Language: J Section: Instructor: KABURAGI, Takashi Credits: 2 Mode of instruction: Face to Face [2] Course No: ISC224 Registration No: 11209 Title: Operating Systems / オペレーティングシステム / 1/TU,2/TU / I-212 Term: Spring 2026 Language: J Section: Instructor: KABURAGI, Takashi Credits: 2 Mode of instruction: (63) [5] Course No: QNMS502 Registration No: 32406 Title: Quantum Information Science / 量子情報科学 / 2/TU,3/TU Term: Winter 2026 Language: J Section: Instructor: YAMAZAKI, Rekishu/KABURAGI, Takashi Credits: 2 Mode of instruction: Face to Face

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `15.345`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages list several courses taught by KABURAGI, Takashi.

Answer:

鏑木先生が担当している授業には、以下のものがあります[1, 2, 3, 4, 5]。 * **Robotics** (ISC342) [1, 3] * **N2: Multimedia Communication Literacy** (GEN063) [2] * **Numerical Methods in Science** (ISC314) [4] * **Operating Systems** (ISC224) [5]

Retrieved / selected chunks:
- [1] `0.580114` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0001`)
- [2] `0.557574` `course_record` N2: Multimedia Communication Literacy (`COURSE-2026-Autumn-20323-GEN063::structural_fallback_v1::P0001`)
- [3] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [4] `0.481256` `course_record` Numerical Methods in Science (`COURSE-2026-Spring-11210-ISC314::structural_fallback_v1::P0001`)
- [5] `0.455289` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `2.459`
Answer mode: `remote_model`

Answer:

鏑木先生が担当する授業は以下の通りです。 * Robotics（ロボット工学）[1] * Operating Systems（オペレーティングシステム）[2][1], [2]

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### google/gemma-4-E2B-it / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `18.897`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages list several courses taught by KABURAGI, Takashi.

Answer:

鏑木先生が教える授業は以下の通りです。 * Robotics（ロボット工学）[1] * N2: Multimedia Communication Literacy（Ｎ２：理解のためのマルチメディア）[2] * Numerical Methods in Science（数値解析入門）[3] * Operating Systems（オペレーティングシステム）[4] * Senior Seminar in Information Science I（情報科学四年次セミナー I）[5]

Retrieved / selected chunks:
- [1] `0.772531` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0001`)
- [2] `0.755997` `course_record` N2: Multimedia Communication Literacy (`COURSE-2026-Autumn-20323-GEN063::structural_fallback_v1::P0001`)
- [3] `0.743541` `course_record` Numerical Methods in Science (`COURSE-2026-Spring-11210-ISC314::structural_fallback_v1::P0001`)
- [4] `0.712632` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0001`)
- [5] `0.679923` `course_record` Senior Seminar in Information Science I (`COURSE-2026-Winter-31206-ISC315::structural_fallback_v1::P0001`)

### google/gemma-4-E2B-it / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `1.369`
Answer mode: `remote_model`

Answer:

After selecting courses on the registration website, you must check the registration results on the "Registration Result" section of the Registration Website to confirm that your registration is complete and that you have received online approval from your advisor [1, 2, 5]. You should also check the results after making any changes to your registration [1, 3].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### google/gemma-4-E2B-it / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `6.544`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The passages explicitly state that students must check the 'Registration Result' on the Registration Website after registration or registration changes.

Answer:

履修登録の翌日またはLate Registration後は、Registration Websiteの「Registration Result」で登録結果とアドヴァイザーによるオンライン承認を受けていることを必ず確認してください[1], [2], [5]。また、登録変更を行った後も、登録結果を必ず確認する必要があります[1], [2], [3]。

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [4] `0.39129` `ehandbook_page` ehandbook - Winter Term (`DOC-000078::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `18.355`
Answer mode: `remote_model`

Answer:

Students will be placed into the appropriate course based on the result of the placement test [1]. Additionally, an additional evaluation of Japanese proficiency may be conducted during the first class sessions, and the course level placement could change based on this in-class assessment [3]. For more information regarding the JLP program and course offerings, you can refer to the ICU website and the JLP website [3].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [3] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [4] `0.424889` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### google/gemma-4-E4B-it / agentic / s30_001

Question: I'm a new student and I plan to take JLP, but I don't know which Japanese level I will be placed into. How is the level decided, and where should I check the official information?

HTTP status: `200`; seconds: `10.936`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] states that students will be placed in the appropriate course based on the result of the placement test. Passage [6] confirms that students must take the JLP placement test and register for the assigned course. Passage [3] provides links to the official ICU and JLP websites for further information.

Answer:

Students will be placed into the appropriate course based on the result of the placement test [1]. Additionally, course level placement may be subject to change based on an in-class assessment conducted during the first class sessions [2]. For official information, you can refer to the ICU website and the JLP website [2], or the Japanese Language Program (JLP) page on the ICU website [3].

Retrieved / selected chunks:
- [1] `0.813905` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0001`)
- [2] `0.467727` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.095687` `web_page` Japanese Language Program (JLP)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001611::structural_fallback_v1::P0000`)
- [4] `0.518546` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0026`)
- [5] `0.369998` `pdf_document` View in PDF Format (`PDF-47178c18d79af5cd22::structural_fallback_v1::P0010`)

### google/gemma-4-E4B-it / single_shot / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `3.323`
Answer mode: `remote_model`

Answer:

If you miss the normal registration day, you should complete registration during the registration change period [3, 4]. After the registration change period ends, registration will not be accepted for any reason, and you must take a leave of absence or withdraw from the university [3, 4]. When making a registration change, you must click the "SAVE" button to finalize the procedure; otherwise, the process is not complete even if you input the data [3, 4]. Additionally, after registration or registration change, you should confirm that the courses you wish to add or cancel are correctly reflected on the Registration Website "Registration Results" [5].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `6.0` `course_record` Seminar in Clinical Psychology (`COURSE-2026-Autumn-22102-QEFD417::structural_fallback_v1::P0000`)
- [3] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [4] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [5] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / agentic / s30_002

Question: I missed the normal course registration day because I was sick. Can I still register or change my courses, and what part of the procedure should I pay attention to?

HTTP status: `200`; seconds: `9.915`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages directly address late registration, the registration change period, and the consequences of missing deadlines, which covers the user's query.

Answer:

If you cannot register on the registration day, you should complete the Late Registration during the registration change period [3]. After the registration change period ends, no registrations will be accepted for any reason, and those who do not complete registration during the designated time must take a leave of absence or withdraw from the university [2, 3, 4]. When making a registration change, you must click the "SAVE" button to finalize the procedure; otherwise, the process is not complete even if you input the data [2, 3, 4]. After registration or registration change, confirm that the courses you wish to take are reflected correctly [2, 3, 4].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Mental Health (`COURSE-2026-Spring-11316-PSY273::structural_fallback_v1::P0000`)
- [2] `0.881411` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0007`)
- [3] `0.866019` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0001`)
- [4] `0.703549` `ehandbook_page` ehandbook - August 25, 2023 Important Information from Educational Affairs Group (`DOC-000110::structural_fallback_v1::P0001`)
- [5] `0.608594` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `6.734`
Answer mode: `remote_model`

Answer:

If you cannot continue your studies for an ongoing term due to an illness or an unavoidable reason recognized by the University, you may be able to receive permission for Registration Withdrawal from the CLA Dean or GS Dean [1, 3]. Key points regarding Registration Withdrawal: * Registration Withdrawal means withdrawing from **all** course registrations for the ongoing term; partial withdrawal is not possible [3]. * An application for Registration Withdrawal must be submitted to the Educational Affairs Group along with documents explaining the reasonable reasons, such as a medical certificate [3]. * The application must be submitted one month prior to the last day of classes [3]. * If approved, no grades will be given for the registered courses; instead, "W" will be recorded for all courses registered for that term [3].

Retrieved / selected chunks:
- [1] `0.046987` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0002`)
- [2] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [3] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [4] `0.007149` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0003`)
- [5] `0.006745` `ehandbook_page` ehandbook - FAQ (`DOC-000097::structural_fallback_v1::P0007`)

### google/gemma-4-E4B-it / agentic / s30_003

Question: If I want to withdraw from a course after seeing my workload, what rules or deadlines should I check before I make the decision?

HTTP status: `200`; seconds: `17.868`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss general withdrawal procedures, deadlines for term withdrawal, and registration changes, but none specifically address the rules or deadlines for withdrawing from a course *after* assessing one's workload.

Answer:

If you wish to withdraw from the University, you should obtain the prescribed form, "Application for Withdrawal," from the Educational Affairs Group [3]. After completing outstanding bill payments, you must fill out the form, ensuring signatures from the Library, Financial Affairs Group, Student Affairs Group, your guarantor, and your academic advisor [3]. The completed form, along with your ID Card, must then be submitted to the Educational Affairs Group for the Dean's approval [3]. Specific official dates for withdrawal are: * **Spring Term:** August 31 [1] * **Autumn Term:** November 30 [1] * **Winter Term:** March 31 [1] Deadlines for submitting the application for withdrawal are: * **Spring Term:** March 31 [1] * **Autumn Term:** August 31 [1] * **Winter Term:** November 30 [1] If the stipulated date falls on a Saturday, Sunday, or national holiday, the deadline is the previous Friday [1]. If you are referring to withdrawing from *all* course registration for the ongoing term, this is called Registration Withdrawal. This must be submitted to the Educational Affairs Group with documents explaining the reasonable reasons, such as a medical certificate, and must be submitted one month prior to the last day of classes [2].

Retrieved / selected chunks:
- [1] `0.017309` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0001`)
- [2] `0.016403` `ehandbook_page` ehandbook - Registration Withdrawal (`DOC-000040::structural_fallback_v1::P0000`)
- [3] `0.444685` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0000`)
- [4] `0.315314` `ehandbook_page` ehandbook - Withdrawal and Readmission (`DOC-000087::structural_fallback_v1::P0002`)
- [5] `0.185799` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0004`)

### google/gemma-4-E4B-it / single_shot / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `4.395`
Answer mode: `remote_model`

Answer:

To confirm if courses or credits from study abroad will count toward your ICU requirements, you should look at the guidelines regarding the transfer of credits from other universities [1]. Specifically: * Students who participated in ICU-approved summer programs and completed coursework at other universities may transfer credits if they are approved to count toward ICU's graduation requirements [1]. * A maximum of 40 credits may be transferred from study abroad programs, and these transferred credits will count toward Elective Course requirements [1]. * For students who participated in a Study Abroad Program, credits earned at partner institutions, up to a maximum of 40 credits, are recognized as part of the credit unit requirements for graduation from ICU [3]. * ICU students can take selected courses at Sophia University and have the credits earned counted toward graduation requirements through a reciprocal credit system [4, 5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.539468` `pdf_document` Study Abroad Program Brochure (`PDF-a2e6a01599ea3260e6::structural_fallback_v1::P0007`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [5] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)

### google/gemma-4-E4B-it / agentic / s30_004

Question: I am trying to plan my major requirements and study abroad at the same time. Where should I look to confirm whether courses or credits will count toward my ICU requirements?

HTTP status: `200`; seconds: `13.095`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages provide specific information regarding the transfer and counting of credits from study abroad programs and other institutions towards ICU graduation requirements.

Answer:

To confirm if courses or credits from study abroad or other institutions will count toward your ICU requirements, you should look into the specific guidelines for credit transfer. * **Study Abroad (Summer Abroad Programs):** Students who participated in approved summer programs and completed coursework at other universities may transfer credits if they are approved for ICU's graduation requirements. A maximum of 40 credits can be transferred, and these will count toward Elective Course requirements [1]. * **University Partners:** ICU students can take selected courses at Sophia University and have the credits counted toward graduation requirements through a review process [3, 4]. Similarly, students can take selected courses at the University of Tsukuba and have those credits counted toward graduation requirements through a review process [3, 4]. * **Transfer Students (General):** For courses taken at other universities before entering ICU, credits may be transferred if the courses are equivalent to ICU courses, are approved for ICU graduation requirements, and the grades received were 70 points or higher out of 100. However, the exact number and courses that are transferable will not be confirmed until after you complete the required procedures upon entering ICU [5].

Retrieved / selected chunks:
- [1] `0.856573` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [2] `0.797872` `web_page` Eligibility Criteria｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001590::structural_fallback_v1::P0005`)
- [3] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001627::structural_fallback_v1::P0008`)
- [4] `0.493519` `web_page` University/Community Partners of ICU｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001600::structural_fallback_v1::P0008`)
- [5] `0.476808` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `2.598`
Answer mode: `remote_model`

Answer:

For the official schedule, detailed instructions and the deadline for senior thesis submission will be updated on the ICU Portal [3]. Regarding deadlines, you should expect to check the Senior Thesis Submission Deadline, as a PDF file must be submitted to the designated place before the prescribed deadline, and no thesis will be accepted after that time [3]. Specifically, no thesis will be accepted after 4:00 p. m. on the deadline date, under any circumstances [3].

Retrieved / selected chunks:
- [1] `0.017111` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [2] `0.018511` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [3] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [4] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [5] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_005

Question: I am worried about senior thesis deadlines. Where can I find the official schedule, and what kind of thesis-related deadlines should I expect to check?

HTTP status: `200`; seconds: `8.722`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] mentions the Senior Thesis Submission Deadline and directs users to the ICU Portal for detailed instructions and deadlines. Passages [4], [5], and [6] indicate that schedules are available via a URL accessible to those with an ICU Net ID.

Answer:

For detailed instructions and the Senior Thesis Submission Deadline, you should check the ICU Portal [1]. You should refer to the Senior Thesis Guidelines on the eHANDBOOK [1]. The guidelines for students graduating in July 2025 will be posted in late March [3]. Schedules are available via a URL accessible to those with an ICU Net ID [4].

Retrieved / selected chunks:
- [1] `0.615261` `ehandbook_page` ehandbook - Senior Thesis (`DOC-000033::structural_fallback_v1::P0000`)
- [2] `0.113973` `ehandbook_page` ehandbook - Candidacy for Senior Thesis Research (`DOC-000026::structural_fallback_v1::P0003`)
- [3] `0.075721` `ehandbook_page` ehandbook - Senior Thesis Guidelines (`DOC-000034::structural_fallback_v1::P0000`)
- [4] `0.100525` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / single_shot / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `2.122`
Answer mode: `remote_model`

Answer:

The provided ICU evidence does not specify the procedure or office information you should check before planning your courses after returning from a leave of absence. However, the ehandbook mentions the Educational Affairs Group (EAG) for those who do not hold Japanese citizenship and need a Certificate of Eligibility (CoE) for a "student" visa [4].

Retrieved / selected chunks:
- [1] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [2] `5.6` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0001`)
- [3] `0.238284` `web_page` ICU Health Care Office for Students - 感染症が疑われた時の流れIf you have an infectious disease (`DOC-001496::structural_fallback_v1::P0005`)
- [4] `0.114963` `ehandbook_page` ehandbook - Leave of Absence and Reenrolment (`DOC-000086::structural_fallback_v1::P0003`)
- [5] `0.09187` `web_page` ICU Health Care Office for Students - 医療機関情報 Medical Institution Information (`DOC-001455::structural_fallback_v1::P0002`)

### google/gemma-4-E4B-it / agentic / s30_006

Question: If I take a leave of absence and later return to ICU, what procedure or office information should I check before planning my courses again?

HTTP status: `200`; seconds: `21.137`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 3 and 4 provide specific dates for returning after a leave of absence (休学からの復学), which is relevant to planning courses again.

Answer:

If you are returning after a leave of absence, you should check the following based on when you are returning: * **Returning from the 1st (Spring) semester:** The return period is from December 1st to the end of March. The application deadline is November 30th [1], [2]. * **Returning from the 2nd (Autumn) semester:** The return period is from April 1st to the end of August. The application deadline is March 31st [1], [2]. * **Returning from the 3rd (Winter) semester:** The return period is from September 1st to the end of November. The application deadline is August 31st [1], [2]. Additionally, if you do not hold a valid visa for residence in Japan and require a Certificate of Eligibility (CoE) for a "Study" visa, you should notify the university via email at gakuseki@icu.ac.jp for guidance on procedures [1], [2]. Please submit the application for the Certificate of Eligibility with plenty of time, as it typically takes about 1.5 to 2 months after applying to the Immigration Services Agency [1], [2]. If your leave of absence was due to illness, you must submit a doctor's certificate to the Academic Affairs Group proving you are in a health condition that does not impede your studies for the semester you wish to return [2]. If this is not submitted, you cannot participate in course registration [2].

Retrieved / selected chunks:
- [1] `0.989055` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0002`)
- [2] `0.984396` `ehandbook_page` ehandbook - 休学および復学 (`DOC-000223::structural_fallback_v1::P0001`)
- [3] `6.0` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0000`)
- [4] `0.926968` `ehandbook_page` ehandbook - 退学および再入学 (`DOC-000224::structural_fallback_v1::P0001`)
- [5] `0.906818` `ehandbook_page` ehandbook - 留学・休学・復学・退学・再入学・身分変更・身分延長・除籍 (`DOC-000222::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `3.361`
Answer mode: `remote_model`

Answer:

You can find information about counseling and mental health support at the ICU Health Care Office for Students [3]. This resource lists various consultation options, including: * ICU Counseling Center for general mental health counseling [3]. * Consultation for friends and career paths [3]. * Support for sharing feelings after a loss [3]. * Addiction Support [3]. The ICU Counseling Center also has a consultation line available for residents of Mitaka City, regardless of gender [3]. Additionally, the International Befrienders Tokyo Suicide Prevention Center offers anonymous phone support [3].

Retrieved / selected chunks:
- [1] `0.000205` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0000`)
- [2] `0.000478` `course_record` Counseling (`COURSE-2026-Winter-31296-PSY272::structural_fallback_v1::P0001`)
- [3] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [4] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [5] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / agentic / s30_007

Question: I feel overwhelmed and want to talk to someone, but I am worried about privacy. Where can I find official information about counseling or student support at ICU?

HTTP status: `200`; seconds: `12.399`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages mention counseling services, student support, and health care offices at ICU, which directly addresses the user's request for official information on these topics.

Answer:

You can find information regarding counseling, human rights consultation, health management, and support for students with disabilities through the following resources: * **Counseling, Human Rights Consultation, Health Management, and Disability Student Support:** ICU provides support for these areas [3]. * **ICU Counseling Center:** This center offers general mental health counseling, consultation about friends and career paths, and support for sharing feelings after a loss [1]. * **Health Care Office:** This office supports the health of students, faculty, and staff. Nurses provide first aid and health consultation daily, and the physician provides consultation and referral letters twice a week [2]. The Health Care Office also provides health management support for students and faculty, including first aid and health consultations from health staff, and annual health check-ups for all students and faculty [5]. * **Learning Accessibility Services (LAS) office:** This office provides reasonable accommodations for students with various disabilities, including physical, health, learning, developmental, and psychological disabilities [2], [5]. For more details on counseling, you can check the dedicated on-campus site [5].

Retrieved / selected chunks:
- [1] `0.850965` `web_page` ICU Health Care Office for Students - 心の健康 Mental Health (`DOC-001423::structural_fallback_v1::P0003`)
- [2] `0.614047` `web_page` Counseling, Human Rights Consultation and Health Services｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001616::structural_fallback_v1::P0010`)
- [3] `0.612715` `web_page` お問い合わせ｜国際基督教大学（ICU） (`DOC-001696::structural_fallback_v1::P0001`)
- [4] `0.595845` `web_page` Researchers Information System｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001571::structural_fallback_v1::P0003`)
- [5] `0.59131` `web_page` カウンセリング・人権相談・健康管理・障害学生支援｜国際基督教大学（ICU） (`DOC-001782::structural_fallback_v1::P0003`)

### google/gemma-4-E4B-it / single_shot / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `2.101`
Answer mode: `remote_model`

Answer:

If you have a disability or chronic illness and require reasonable accommodations for a course, you should consult with your course instructor and the Learning Accessibility Services [1, 2, 4, 5]. The Learning Accessibility Services office acts as an intermediary between a student and an instructor to arrange necessary accommodations for exams and assignments [3].

Retrieved / selected chunks:
- [1] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [2] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.121373` `course_record` Principles of Macroeconomics (`COURSE-2026-Spring-11167-ECO101::structural_fallback_v1::P0016`)
- [5] `0.119305` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_008

Question: If I need exam accommodations because of a disability or health condition, where should I start, and what kind of official support page should I look for?

HTTP status: `200`; seconds: `10.139`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [2] directly outlines the starting steps for requesting academic accommodations, which includes meeting with LAS staff, and mentions submitting necessary documents. Passage [1] also directs users to the LAS office for more information regarding accommodations for exams and assignments.

Answer:

To start if you need academic accommodations, you should first meet with a Learning Accessibility Services (LAS) staff member to discuss your needs [1]. After that, you must submit the required documents, which may include a medical certificate or a letter from a counselor or specialist, a Request for Academic Accommodations Form signed by your advisor, and any documentation of previous support received [1]. For more information specific to your needs, you should contact the LAS office [2]. The LAS office acts as an intermediary between you and an instructor to arrange accommodations for exams and assignments, such as extended exam time limits or arranging a separate exam room [2, 3].

Retrieved / selected chunks:
- [1] `0.093347` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0000`)
- [2] `0.105395` `web_page` For Students | CTL English (`DOC-000272::structural_fallback_v1::P0001`)
- [3] `0.127544` `pdf_document` LAS leaflet 2024.pdf (`PDF-17b531f94fe26152f7::structural_fallback_v1::P0001`)
- [4] `0.146209` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0013`)
- [5] `0.145601` `course_record` Senior Thesis (`COURSE-2026-Spring-11001-STH391::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / single_shot / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `3.402`
Answer mode: `remote_model`

Answer:

If you are an undergraduate student who is continuing to ICU graduate school, new accounts will be issued after Matriculation day [4]. For students graduating, your account (including ICU Net ID, ICU Portal, Mail, and Google Workspace) will expire on March 31, 2026 [1]. If you still need to access emails after graduation, it is recommended that you use an email address you can use after graduation, rather than a @icu. ac. jp address, because email forwarding will stop [1]. You should also back up any necessary files from Gmail and Google Drive before graduation [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### google/gemma-4-E4B-it / agentic / s30_009

Question: I am graduating from undergraduate school but continuing to ICU graduate school. What should I know about my IT account or services after graduation?

HTTP status: `200`; seconds: `10.363`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage DOC-001520 directly addresses account expiration for graduating students, which is relevant to the user's question about IT accounts after graduation.

Answer:

If you are an undergraduate student graduating but continuing to ICU graduate school, new accounts will be issued after Matriculation day [4]. For students graduating, your account (including ICU Net ID, ICU Portal, Mail, and Google Workspace) will expire on March 31, 2026 [1]. If you need to keep exchanging emails after graduation, it is recommended that you use an email address that you can use after graduation, rather than a @icu.ac.jp email address, because email forwarding will stop [1]. You should also back up any necessary files from Gmail and Google Drive before graduation [1]. When your account is deleted, you will be unable to log in to Google (@icu.ac.jp) or view information such as the Joining ceremony announcement or Graduate school information [1].

Retrieved / selected chunks:
- [1] `0.954223` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0000`)
- [2] `0.529522` `web_page` IT Center For ALL Users - Account and system used in ICU (`DOC-001476::structural_fallback_v1::P0000`)
- [3] `0.526601` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)
- [4] `0.501995` `web_page` IT Center For ALL Users - To Students Graduating (`DOC-001520::structural_fallback_v1::P0002`)
- [5] `0.277767` `web_page` Privacy Policy｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001640::structural_fallback_v1::P0008`)

### google/gemma-4-E4B-it / single_shot / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `6.756`
Answer mode: `remote_model`

Answer:

JLPプログラムの詳細や履修方法に関する公式情報は、ICUのウェブサイトおよびJLPのウェブサイトで確認できます [2]。 * **JLPプログラムとコース提供に関する詳細:** [2] * **ICUウェブサイト:** https://www. icu. ac. jp/academics/undergraduate/jlp/ [2] * **JLPウェブサイト:** https://sites. google. com/info. jp/jlp/ [2] * **JLP事務室への問い合わせ:** JLP Office (ERB II Rm. 104) へ、メール (jlp@icu. jp) またはオフィスアワー (月～金 9:00–11:45 および 12:45–16:00) で連絡が取れます [2]。 また、ELA生がJLP科目を履修する場合、JLP Placement Test (PT) を受け、その結果によって履修できる科目レベルが決定されます [1]。 PTは毎年2回（3月・8月）実施され、履修希望学期に対応する時期のPTを受験する必要があります [1]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### google/gemma-4-E4B-it / agentic / s30_010

Question: 日本語プログラムを履修したいのですが、JLPのレベル分けや履修方法について、どこで公式情報を確認できますか？

HTTP status: `200`; seconds: `13.842`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages provide information on JLP programs, placement tests, and reference external websites for more details, which addresses the user's request for official information regarding JLP levels and enrollment methods.

Answer:

JLPのレベル分けや履修方法に関する公式情報は、以下の情報源で確認できます。 * **JLPプログラムの詳細とコース提供について:** ICUのウェブサイトおよびJLPのウェブサイトを参照してください [2]。 * **JLPのレベル記述:** JLPは、各コースの学習目標をCEFR（Common European Framework of Reference for Languages）の指標を用いて記述しており、CEFRは言語能力をA1からC2までの6つのレベルに整理し、これらをBasic User、Independent User、Proficient Userの3つの大分類にまとめることができます [4]。 * **履修要件:** 9月入学の学生で日本語の知識がない場合、45単位分のJLPを履修する必要があります。日本語能力が高い場合は、JLPの履修要件の一部が免除されることがあります [5]。 特定の状況（例：ELA生がJLP科目を履修する場合）では、JLP Placement Test（PT）を受け、その結果によって履修できる科目レベルが決定されます [1]。 より詳細な情報については、JLPオフィス（ERB II Rm.104）に連絡するか、提供されているウェブサイトを参照してください [2]。

Retrieved / selected chunks:
- [1] `0.795499` `portal_notice` ELA生のためのJLP科目について (`DOC-001149::structural_fallback_v1::P0000`)
- [2] `0.714429` `portal_notice` Notes for graduate school students who wish to take the JLP courses (`DOC-000935::structural_fallback_v1::P0002`)
- [3] `0.706089` `pdf_document` PDF版入学案内[46M]を見る (`PDF-d0324ad9f2eb5d6c26::structural_fallback_v1::P0025`)
- [4] `0.644225` `pdf_document` JLP Leaflet (`PDF-efa8228506c28aee5f::structural_fallback_v1::P0002`)
- [5] `0.637144` `pdf_document` Liberal Arts Self-Study Report (2005) (`PDF-4b4b8e9f6dc1d1d555::structural_fallback_v1::P0031`)

### google/gemma-4-E4B-it / single_shot / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `1.629`
Answer mode: `remote_model`

Answer:

Christianity Week is a public event within the university calendar [5]. Chapel Hour is a weekly service held for students, faculty, and staff [2, 4]. For schedules, you should check the university calendar [5].

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [3] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [4] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)
- [5] `0.166404` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0009`)

### google/gemma-4-E4B-it / agentic / s30_011

Question: I saw something about Chapel Hour and Christianity Week, but I am not sure whether these are academic events or campus-life events. Where should I check the schedule?

HTTP status: `200`; seconds: `10.11`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages mention Chapel Hour and Christianity Week, and one passage suggests checking the university calendar for events.

Answer:

Chapel Hour and Christianity Week are activities related to the university's Christian commitment [3]. * **Chapel Hour:** This service is held weekly and is a time for prayer and sharing messages about Christian faith from university ministers, faculty, staff, students, and guests [1], [3], [5]. * **Christianity Week (C-Week):** This occurs every May and involves various events related to Christianity for the entire university, such as early-hour services and open houses [1], [3]. For schedules, you can check the Academic Calendar [2].

Retrieved / selected chunks:
- [1] `0.472866` `pdf_document` Self-Study/Evaluation Report 2023 (`PDF-1e027f360ece17e0a5::structural_fallback_v1::P0013`)
- [2] `0.096877` `web_page` Academic Calendar｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001599::structural_fallback_v1::P0003`)
- [3] `0.356671` `web_page` Commitments and History｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001551::structural_fallback_v1::P0003`)
- [4] `0.233881` `web_page` Disclosure｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001547::structural_fallback_v1::P0008`)
- [5] `0.19853` `web_page` 宗務センター Religious Center - CHAPEL HOUR (`DOC-001488::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `4.833`
Answer mode: `remote_model`

Answer:

For the AY2026 Spring Term, the following dates are provided for registration and advisor interviews: * **Registration Period (Online Input):** April 9 (Thu) 9:00 to April 10 (Fri) 14:30 [1, 2]. * **Advisor Interview Timing:** April 9 (Thu) 10:00 to 16:00, and April 10 (Fri) 9:00 to 15:30 [1, 2]. Newly enrolled students from the AY2026 Autumn Term should check "Campus Pathfinder" in Moodle instead of this announcement [1, 2]. For Late Registration, the period for online input and interview with the advisor is April 11 (Sat) 9:00 to April 20 (Mon) 10:00 [2, 3].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.402099` `portal_calendar_event` Registration for Spring Term and Interview with Advisors第1学期履修登録・アドヴァイジング面談 (`DOC-000494::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_012

Question: For Spring 2026, I need to know both the registration period and the advisor interview timing. Which official calendar or registration pages should I check?

HTTP status: `200`; seconds: `11.58`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] and [2] provide the specific registration and advisor interview timings for AY2026 Spring Term, and they direct students to check specific locations (Campus Pathfinder in Moodle or the provided notice).

Answer:

For the AY2026 Spring Term, the registration and advisor interview schedules are as follows: * **Online Input:** April 9 (Thu) 9:00 to April 10 (Fri) 14:30 [1] * **Interview with Advisor:** April 9 (Thu) 10:00 to 16:00, and April 10 (Fri) 9:00 to 15:30 [1] Newly enrolled students from the AY2026 Autumn Term should check "Campus Pathfinder" in Moodle [1]. For all students, you should check icuMAP in advance to identify your advisor, and you should receive a message from your advisor with advising method details sometime after April 6 [1].

Retrieved / selected chunks:
- [1] `0.951142` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0000`)
- [2] `0.841826` `portal_notice` 2026年度春学期科目登録について ー 履修登録の手続き方法 (`DOC-001000::structural_fallback_v1::P0000`)
- [3] `0.80147` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0001`)
- [4] `0.460835` `portal_notice` AY2026 Spring Term Registration – Course Registration Procedures (`DOC-000751::structural_fallback_v1::P0002`)
- [5] `0.311322` `portal_notice` AY2025 Spring Term Registration – Course Registration Procedures (`DOC-000811::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `1.516`
Answer mode: `remote_model`

Answer:

The exact number of credits you need to graduate early cannot be determined by the system because the confirmation of how many and which credits are transferable will not happen until after you complete the required procedures after entering ICU [2].

Retrieved / selected chunks:
- [1] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)
- [2] `0.856573` `web_page` Information on Transfer of Credits (for Transfer Student)｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001643::structural_fallback_v1::P0000`)
- [3] `0.800848` `ehandbook_page` ehandbook - Study Abroad (Summer Abroad Programs) (`DOC-000062::structural_fallback_v1::P0000`)
- [4] `0.769427` `ehandbook_page` ehandbook - RYUGAKU (privately funded study abroad) / Exchange (`DOC-000061::structural_fallback_v1::P0000`)
- [5] `0.732209` `ehandbook_page` ehandbook - Credits acquired through reciprocal credits system (`DOC-000063::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_013

Question: I transferred credits before entering ICU. Can the system tell me exactly how many more credits I personally need to graduate early?

HTTP status: `200`; seconds: `13.081`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss credit transfer limits and eligibility for various student types (transfer students, first-year students, etc.), but none provide a mechanism or specific calculation to tell the user exactly how many more credits they need to graduate early.

Answer:

The provided evidence describes the maximum number of credits that can be transferred based on your student status (e.g., transfer student, first-year student) and the specific limits for different types of courses [1, 2, 3, 4, 5]. However, the evidence does not contain a mechanism or specific calculation to tell you exactly how many more credits you need to graduate early [Agent reason].

Retrieved / selected chunks:
- [1] `0.9455` `ehandbook_page` ehandbook - 単位互換制度での取得単位 (`DOC-000193::structural_fallback_v1::P0000`)
- [2] `0.930458` `ehandbook_page` ehandbook - 留学等（夏期留学プログラム） (`DOC-000192::structural_fallback_v1::P0000`)
- [3] `0.924688` `ehandbook_page` ehandbook - 1年次に入学した学生 (`DOC-000190::structural_fallback_v1::P0000`)
- [4] `0.912748` `ehandbook_page` ehandbook - 転編入本科学生 (`DOC-000189::structural_fallback_v1::P0000`)
- [5] `0.896433` `ehandbook_page` ehandbook - Transfer Students (`DOC-000059::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `3.683`
Answer mode: `remote_model`

Answer:

履修登録に関する問い合わせ先として、教務グループのメールアドレスが記載されています [1], [2]。 * 教務グループの問い合わせ先：ea-group@icu. ac. jp [1], [2] また、履修登録の手順や詳細については、ehandbookの「履修登録」のページを参照できます [3]。 申請書による履修登録が必要な場合は、用紙は教務グループ窓口にて登録日の1週間前から配布されます [3]。

Retrieved / selected chunks:
- [1] `0.589716` `ehandbook_page` ehandbook - 2024.3.29 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000126::structural_fallback_v1::P0001`)
- [2] `0.521806` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0001`)
- [3] `0.500783` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [4] `0.478041` `ehandbook_page` ehandbook - 2024.11.27 2024年度第3学期 教務グループからの重要なお知らせ(冬学期登録版) (`DOC-000121::structural_fallback_v1::P0003`)
- [5] `0.476169` `ehandbook_page` ehandbook - 2025.4.1 教務グループからの重要なお知らせ（春学期登録版） (`DOC-000119::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_014

Question: 履修登録について教育事務グループに確認したいです。連絡先や関連する公式ページはどこで確認できますか？

HTTP status: `200`; seconds: `10.942`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage DOC-001356 provides contact information for the Educational Affairs Group regarding registration inquiries.

Answer:

For inquiries regarding registration, grades, and graduation requirements, you can contact the Educational Affairs Group [4]. The contact information provided is: * **Email:** ea-group@icu.ac.jp [4] * **Location:** Administration Building 103 [4] * **Phone:** 0422-33-3155 [4]

Retrieved / selected chunks:
- [1] `0.932083` `ehandbook_page` ehandbook - November 28, 2023 Important Information from Educational Affairs Group (`DOC-000108::structural_fallback_v1::P0002`)
- [2] `0.847842` `ehandbook_page` ehandbook - August 26, 2025 Important Information from Educational Affairs Group (`DOC-000098::structural_fallback_v1::P0000`)
- [3] `0.82755` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0001`)
- [4] `0.719482` `web_page` General Education Handbook AY2026 - Contact (`DOC-001356::structural_fallback_v1::P0000`)
- [5] `0.766294` `ehandbook_page` ehandbook - August 28, 2024 Important Information from Educational Affairs Group (`DOC-000104::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `2.121`
Answer mode: `remote_model`

Answer:

The provided evidence does not contain information on which source to trust if the chatbot answer and the ICU Portal announcement differ regarding a deadline, nor does it specify what action to take in that situation. However, the ICU Portal Manuals advise students and faculty/staff to check the ICU Portal announcements once a day [3, 4].

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.14682` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_015

Question: If the chatbot answer and the ICU Portal announcement seem different about a deadline, which source should I trust and what should I do next?

HTTP status: `200`; seconds: `13.801`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages discuss deadlines for specific loans or general portal usage/notifications, but none directly address what to do when the chatbot and ICU Portal provide conflicting deadline information.

Answer:

The provided evidence does not specify what to do if the chatbot and the ICU Portal announcement give conflicting deadline information [1, 2, 3, 4, 5]. However, the ICU Portal Manuals advise students and faculty/staff to check the ICU Portal announcements once a day [3, 4].

Retrieved / selected chunks:
- [1] `0.366476` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000921::structural_fallback_v1::P0000`)
- [2] `0.332636` `portal_notice` Updated Information for ICU Long-term Loans (`DOC-000933::structural_fallback_v1::P0000`)
- [3] `0.234757` `web_page` ICU Portal Manuals (`DOC-001409::structural_fallback_v1::P0000`)
- [4] `0.234757` `web_page` ICU Portal Manuals (`DOC-001436::structural_fallback_v1::P0000`)
- [5] `0.105948` `web_page` ICU Health Care Office for Students - FAQs (`DOC-001532::structural_fallback_v1::P0020`)

### google/gemma-4-E4B-it / single_shot / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `3.065`
Answer mode: `remote_model`

Answer:

For Logic Programming in Autumn 2026: * **Instructor:** REISEWITZ, TAMMO M. [2, 3, 4, 5] * **Schedule:** 5/TU, 6/TU [2, 3] * **Official Course Information:** You can check the course record for Logic Programming (Course No: ISC321, Registration No: 21219) for Autumn 2026 [2, 5].

Retrieved / selected chunks:
- [1] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)
- [2] `0.882833` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0000`)
- [3] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [4] `0.968261` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0005`)
- [5] `0.968141` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0004`)

### google/gemma-4-E4B-it / agentic / s30_016

Question: I want to take Logic Programming in Autumn 2026. Who teaches it, when is it scheduled, and where should I check the official course information?

HTTP status: `200`; seconds: `12.256`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages provide the instructor's name, the term (Autumn 2026), and scheduling information (e.g., 5/TU, 6/TU, Two periods of lecture weekly). They also mention where to find more information (ICU Net ID access for some fields, and Moodle is mentioned in one passage).

Answer:

For Logic Programming in Autumn 2026 (Course No: ISC321, Registration No: 21219), the instructor is REISEWITZ, TAMMO M. [1, 2, 3, 4]. The schedule is 5/TU, 6/TU [1]. You can find information regarding Moodle usage in the notes for the course [4].

Retrieved / selected chunks:
- [1] `0.979275` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0014`)
- [2] `0.943452` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0003`)
- [3] `0.945197` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0006`)
- [4] `0.935347` `course_record` Logic Programming (`COURSE-2026-Autumn-21219-ISC321::structural_fallback_v1::P0013`)
- [5] `0.023065` `course_record` Logic (`COURSE-2026-Spring-11284-PHR115::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `4.549`
Answer mode: `remote_model`

Answer:

The evaluation methods and required work for "S2: Statistical Information Literacy" vary depending on the term and instructor: * **Spring 2026 (Instructor: KANEKO, Takuya):** The grading policy includes Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. * **Autumn 2026 (Instructor: MARSZALEC, Daniel Janusz):** The grading policy includes Active participation in classes (15%), Apllication workshops (35%), and End of term data analysis project (50%) [2]. The general description for the Autumn 2026 term indicates the course aims to teach basic data analysis skills for social sciences, covering lectures on statistics fundamentals, sampling methods, and data processing methods, with students using computers during the course [4]. é

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.270769` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0005`)
- [4] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [5] `0.183594` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0007`)

### google/gemma-4-E4B-it / agentic / s30_017

Question: I remember there is a class called Statistical Information Literacy. How is the grade evaluated, and what kind of work does the syllabus seem to require?

HTTP status: `200`; seconds: `12.357`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages provide specific grading policies and descriptions of the work/content required for the course.

Answer:

The evaluation methods and required work for "Statistical Information Literacy" vary depending on the specific term and instructor: * **Spring 2026 (Instructor: KANEKO, Takuya):** The grading policy includes Exam (20%), Report (40%), Daily quiz (20%), and Class participation (20%) [1]. The course involves lectures on the basics of statistics, sampling methods, and data processing methods, and students use computers [4]. * **Autumn 2026 (Instructor: MARSZALEC, Daniel Janusz):** The grading policy includes Active participation in classes (15%), Apllication workshops (35%), and End of term data analysis project (50%) [2]. The course aims to teach basic data analysis skills for social sciences, covering statistics fundamentals, sampling methods, and data processing methods, with the use of computers [3].

Retrieved / selected chunks:
- [1] `0.325413` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0009`)
- [2] `0.281603` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0009`)
- [3] `0.210442` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Autumn-20314-GES039::structural_fallback_v1::P0004`)
- [4] `0.166134` `course_record` S2: Statistical Information Literacy (`COURSE-2026-Spring-10316-GES039::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `3.251`
Answer mode: `remote_model`

Answer:

MIURA先生は、以下の日本語関連の授業を担当しています。 * **Special Japanese Kanji 1** (日本語特別教育 漢字1) [2] * **J2: Japanese** [3, 4, 5] J2: Japaneseの授業は、日本語の話しことば、書きことばのCEFR A2. 1レベルを目標としており、「日本語J1」または同等のレベルを既修得していることが前提条件です [3, 5]。

Retrieved / selected chunks:
- [1] `0.037609` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0000`)
- [2] `0.067179` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0000`)
- [3] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [4] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [5] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / agentic / s30_018

Question: MIURA先生って、どの日本語の授業を担当していますか？レベルも少し知りたいです。

HTTP status: `200`; seconds: `15.529`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Multiple passages list MIURA, Ayano as an instructor for various Japanese courses (J2: Japanese, Vocabulary and Kanji for Intermediate Learners of Japanese 2, Special Japanese Kanji 1) and specify the level or target audience for those courses.

Answer:

MIURA, Ayano先生は、以下の日本語の授業を担当しています [1, 2, 3, 4, 5]。 * **J2: Japanese**：CEFR A2.1レベルを目標としています [1, 2, 3]。 * **Vocabulary and Kanji for Intermediate Learners of Japanese 2**：担当しています [4]。 * **Special Japanese Kanji 1**：担当しています [5]。

Retrieved / selected chunks:
- [1] `0.606673` `course_record` J2: Japanese (`COURSE-2026-Spring-10202-JLP012::structural_fallback_v1::P0001`)
- [2] `0.47174` `course_record` J2: Japanese (`COURSE-2026-Autumn-20202-JLP012::structural_fallback_v1::P0001`)
- [3] `0.466511` `course_record` J2: Japanese (`COURSE-2026-Winter-30201-JLP012::structural_fallback_v1::P0001`)
- [4] `0.292393` `course_record` Vocabulary and Kanji for Intermediate Learners of Japanese 2 (`COURSE-2026-Spring-10216-JLP087::structural_fallback_v1::P0008`)
- [5] `0.205934` `course_record` Special Japanese Kanji 1 (`COURSE-2026-Winter-30210-JLP071::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `4.273`
Answer mode: `remote_model`

Answer:

科目を選択した後、登録が完了したか不安な場合は、以下の操作と確認を行ってください。 * **登録結果の確認:** 登録または登録変更を行った後は、必ずRegistration Websiteの「Registration Results」で登録結果を確認してください [4]。 * **アドバイザーの承認確認:** アドバイザーにオンライン承認されるまで、登録手続きは完了していません [1], [2], [3]。 また、登録や変更を行った後は、アドバイザー承認が下りているか自身で確認してください [4]。 なお、登録確認は学生本人の責任であり、定められた期間を過ぎて履修登録または登録変更を申請しても一切受理されません [1], [2]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.764716` `ehandbook_page` ehandbook - よくある質問 (`DOC-000117::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_019

Question: 履修登録サイトで科目を選択したのに登録が完了したか不安です。どの操作や確認をすればよいですか？

HTTP status: `200`; seconds: `13.18`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The passages explicitly state that registration is not complete until the advisor provides online approval, and that the registration result must be confirmed on the Registration Website after registration or changes.

Answer:

履修登録が完了したか不安な場合は、以下の点を確認してください。 * **アドバイザーのオンライン承認の確認:** アドバイザーにオンライン承認されるまで、登録手続きは完了していません [1], [2], [5]。 * **登録結果の確認:** 履修登録の翌日、またはLate Registration後は、Registration Websiteの「Registration Result」で登録結果とアドバイザーによるオンライン承認を受けていることを必ず確認してください [1], [2], [5]。また、登録変更を行った後も登録結果を必ず確認する必要があります [1], [2]。 なお、登録確認は学生本人の責任であり、定められた期間を過ぎて申請しても受理されません [1], [2], [5]。

Retrieved / selected chunks:
- [1] `0.843766` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.842992` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.838415` `ehandbook_page` ehandbook - 科目登録の概要 (`DOC-000161::structural_fallback_v1::P0000`)
- [4] `0.804713` `ehandbook_page` ehandbook - 履修登録 (`DOC-000166::structural_fallback_v1::P0000`)
- [5] `0.71393` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `2.656`
Answer mode: `remote_model`

Answer:

To find official textbook purchase information for the Spring Term AY2026, you should refer to the guidance document, which provides a 2D code or URL for purchasing via smartphone or other devices [3, 4]. Textbooks will be on sale from Monday, April 6 to Monday, April 20 [3, 4]. The retrieved ICU evidence does not specify what details the chatbot should not know regarding textbook purchases. é

Retrieved / selected chunks:
- [1] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [2] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [3] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [4] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_020

Question: I need to buy textbooks for Spring 2026 courses. Where should I check the official textbook purchase information, and what details should I not expect the chatbot to know?

HTTP status: `200`; seconds: `9.634`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passage [1] directly provides the dates, purchase method, and pickup information for Spring AY2026 textbooks, which addresses the first part of the query. The passages do not contain information about what the chatbot should not know, but the available evidence is sufficient to answer the actionable part of the question.

Answer:

For Spring AY2026 textbooks, sales will run from Monday, April 6 to Monday, April 20 [1]. You can complete your purchase using a smartphone or other device via the 2D code or URL found in the guidance document [1]. You can pick up your textbooks at an on-campus location, and specific pickup details are in the guidance document [1]. The provided evidence does not specify what the chatbot should not know.

Retrieved / selected chunks:
- [1] `0.458137` `portal_notice` Spring AY2026 Textbook Purchase (`DOC-000841::structural_fallback_v1::P0000`)
- [2] `0.252937` `portal_notice` 2026年度春学期の教科書販売について (`DOC-001135::structural_fallback_v1::P0000`)
- [3] `0.000118` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0001`)
- [4] `5.1e-05` `course_record` Systems Biology (`COURSE-2026-Autumn-22407-QNLS507::structural_fallback_v1::P0000`)
- [5] `0.032528` `portal_notice` Notice from the Helpdesk (Spring Term, 2026) (`DOC-000850::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `1.258`
Answer mode: `remote_model`

Answer:

The provided evidence does not specify the mandatory courses required after coming to ICU. However, one course mentions referring to the GE Handbook [4].

Retrieved / selected chunks:
- [1] `0.076961` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.039048` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.034359` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.033463` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.030215` `course_record` English Communication (`COURSE-2026-Autumn-20609-TCP101::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_021

Question: What are the mandatory courses I need to take after coming to ICU?

HTTP status: `200`; seconds: `26.209`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages mention mandatory courses like Health Science and PE exercises, and general education requirements, but they do not provide a comprehensive list of *all* mandatory courses required *after* coming to ICU in a general sense.

Answer:

After entering ICU, students study a curriculum where they do not decide on a major immediately; instead, they decide on a major at the end of the second year [1]. After enrollment, students study: * Language education subjects (English/Japanese) [1]. * General education subjects [1]. * Health and physical education subjects [1]. * Basic subjects provided by each major, which exceeds 30 in humanities and sciences [1]. Regarding general education subjects, they are taken over four years and involve mandatory courses such as "Introduction to Christianity" (キリスト教概論), which is the only required course for all students at ICU [2]. Students must complete a total of 18 units from general education subjects, which includes "Introduction to Christianity," courses from the humanities/social sciences, natural sciences, and "Liberal Arts Seminar" or "Special Lecture" courses [2]. The total required units for graduation is 130 units [3].

Retrieved / selected chunks:
- [1] `0.985718` `web_page` 入学から卒業までの流れ｜国際基督教大学（ICU） (`DOC-001728::structural_fallback_v1::P0000`)
- [2] `0.979707` `web_page` 一般教育科目｜国際基督教大学（ICU） (`DOC-001690::structural_fallback_v1::P0000`)
- [3] `0.962603` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [4] `0.959307` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [5] `0.953794` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### google/gemma-4-E4B-it / single_shot / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `1.44`
Answer mode: `remote_model`

Answer:

The provided ICU evidence does not state a mandatory course that must be taken after entering ICU [1, 2, 3, 4, 5].

Retrieved / selected chunks:
- [1] `0.116161` `course_record` Global Governance (`COURSE-2026-Autumn-21204-GLS101::structural_fallback_v1::P0013`)
- [2] `0.056757` `course_record` Introduction to Business Administration (`COURSE-2026-Winter-31144-BUS102::structural_fallback_v1::P0013`)
- [3] `0.051942` `course_record` Introduction to Capital Markets (`COURSE-2026-Autumn-21159-BUS206::structural_fallback_v1::P0013`)
- [4] `0.044101` `course_record` X: Introduction to Christianity (`COURSE-2026-Winter-30302-GEX001::structural_fallback_v1::P0013`)
- [5] `0.036839` `course_record` Introduction to Business Administration (`COURSE-2026-Autumn-21158-BUS102::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_022

Question: What is the mandatory course I need to take after entering ICU?

HTTP status: `200`; seconds: `26.054`
Answer mode: `agentic_remote_model`
Evidence sufficient: `False`
Sufficiency reason: The retrieved passages mention mandatory courses like Health Science/PE (DOC-001762), general education courses (DOC-001690), and language programs (DOC-001728, DOC-001759, DOC-001555), but none explicitly state a single, mandatory course required immediately after entering ICU.

Answer:

After entering ICU, students study a curriculum where they do not decide on a major immediately; instead, they decide on their major at the end of the second year [1]. Upon entering, students study subjects such as language education courses (English/Japanese), general education courses, and health and physical education courses, in addition to foundational subjects offered by various majors [1]. Specifically, the following are mentioned regarding required courses: * **General Education Courses:** Multiple areas are required, including "Introduction to Christianity" (which is the only mandatory course for all students at ICU), as well as courses from the humanities/social sciences, natural sciences, and "Liberal Arts Seminar" or "Special Lecture" courses [2]. * **Language Education:** Depending on the selection process for admission, the mandatory language course may be the "Liberal Arts English Program" (ELA) or the "Japanese Language Program" (JLP) [5].

Retrieved / selected chunks:
- [1] `0.985043` `web_page` 入学から卒業までの流れ｜国際基督教大学（ICU） (`DOC-001728::structural_fallback_v1::P0000`)
- [2] `0.975012` `web_page` 一般教育科目｜国際基督教大学（ICU） (`DOC-001690::structural_fallback_v1::P0000`)
- [3] `0.964589` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.959383` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [5] `0.953188` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### google/gemma-4-E4B-it / single_shot / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `8.477`
Answer mode: `remote_model`

Answer:

ICUに入学後に必ず履修しなければならない科目は、専攻や入学した選抜によって異なります。 * **保健体育**の分野では、卒業のための必修要件として「健康科学（Health Science）」（1科目・1単位）と実技科目である「PEエクササイズⅠ・Ⅱ・Ⅲ (Physical Education Exercise Ⅰ・Ⅱ・Ⅲ)」（3種目・1単位、各種目は1/3単位）を履修します [1]。 * 教員免許状の取得を志望する学生は、教職課程の必修科目として「体育理論（Physical Education）」を履修します [1]。 * 卒業要件上の必修語学科目は、受験する選抜によって異なり、一般選抜や総合型選抜<4月入学専願>の場合は「リベラルアーツ英語プログラム」（ELA: English for Liberal Arts Program）が必修となります [5]。 総合型選抜<4月/9月入学>English Language Based Admissionsの場合は「日本語教育プログラム」（JLP: Japanese Language Program）が必修となります [5]。 どの公式ページを見るべきかについては、具体的な情報として、**「学生募集要項」**や**「アドミッションズ・センターのホームページ」**を確認することが推奨されています [2, 5]。

Retrieved / selected chunks:
- [1] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [2] `0.879561` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0001`)
- [3] `0.875574` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0003`)
- [4] `0.6488` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001735::structural_fallback_v1::P0009`)
- [5] `0.468699` `web_page` ICUの入試について｜国際基督教大学（ICU） (`DOC-001759::structural_fallback_v1::P0003`)

### google/gemma-4-E4B-it / agentic / s30_023

Question: ICUに入学した後、必ず履修しなければならない科目は何ですか？どの公式ページを見るべきですか？

HTTP status: `200`; seconds: `15.416`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages mention graduation requirements, credit requirements, and specific required courses (like Health Science and Physical Education) for ICU students, and point to official resources like the e-handbook for details.

Answer:

For graduation, ICU students must earn at least 130 credits [1, 2]. Specific required courses include: * "健康科学 (Health Science)" (1 course, 1 credit) and "PEエクササイズⅠ・Ⅱ・Ⅲ (Physical Education Exercise Ⅰ・Ⅱ・Ⅲ)" (3 types, 1 credit each) as part of the Health and Physical Education program [3]. For students enrolling in or before September 2024, the graduation requirements are different, and you should check the e-handbook for details [1, 2]. For other students, you should check the e-handbook for current students [1, 2].

Retrieved / selected chunks:
- [1] `0.948728` `web_page` Graduation Requirements｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001623::structural_fallback_v1::P0000`)
- [2] `0.921074` `web_page` 卒業要件｜国際基督教大学（ICU） (`DOC-001676::structural_fallback_v1::P0000`)
- [3] `0.910545` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [4] `0.976175` `web_page` Admissions Requirements by Country/Region｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001586::structural_fallback_v1::P0001`)
- [5] `0.976038` `web_page` ELBA Admissions for Recommendees｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001580::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `4.742`
Answer mode: `remote_model`

Answer:

As a graduation requirement at ICU, students must take one course of Health Science (worth one credit) and three courses of Physical Education Exercise I, II, and III (together worth one credit, or one-third of a credit per course) [1, 2]. After completing the required physical education exercise courses, students may choose to enroll in various exercise courses [1, 2]. For general academic information, you can explore the "ACADEMICS" section of the ICU website, which includes details on "Undergraduate" studies, "General Education Courses," and "Physical Education" [3].

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.063599` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0007`)

### google/gemma-4-E4B-it / agentic / s30_024

Question: 进入ICU以后必须修哪些课程？我应该看哪个官方页面？

HTTP status: `200`; seconds: `12.262`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages [1] and [2] detail the required courses for graduation, which directly addresses the first part of the user's question. Passage [3] mentions 'General Education Courses' and 'Physical Education' under 'ACADEMICS', which might point to an official page, but [1] and [2] are more specific regarding requirements.

Answer:

As a graduation requirement at ICU, students must take: * One course of Health Science (worth one credit), which includes lectures on health and physical education [1], [2]. * Three courses of Physical Education Exercise I, II, and III (together worth one credit, or one-third of a credit per course), which consist of practical exercises [1], [2]. After completing the required physical education exercise courses, students may choose to enroll in various exercise courses based on their interests [1], [2]. For official pages, the evidence mentions sections related to "Physical Education" and "General Education Courses" under "ACADEMICS" [3].

Retrieved / selected chunks:
- [1] `0.712032` `web_page` Physical Education｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001626::structural_fallback_v1::P0000`)
- [2] `0.534947` `web_page` 保健体育｜国際基督教大学（ICU） (`DOC-001762::structural_fallback_v1::P0000`)
- [3] `0.293303` `web_page` Graduate School Overview｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001570::structural_fallback_v1::P0013`)
- [4] `0.072112` `web_page` ICU Official Social Media Account｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001651::structural_fallback_v1::P0006`)
- [5] `0.053899` `web_page` 学部・大学院案内｜国際基督教大学（ICU） (`DOC-001753::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `0.512`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] レポート・卒論に役立つコンテンツ | CTL and [2] FD Newsletter Vol. 29. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [2] `0.001032` `pdf_document` FD Newsletter Vol. 29 (`PDF-b4481c0b13988d87b1::structural_fallback_v1::P0012`)
- [3] `0.000735` `portal_notice` 2026 年 3 月卒業・修了予定の皆さんへ (`DOC-000957::structural_fallback_v1::P0000`)
- [4] `0.000649` `pdf_document` 中期計画（2021年度～2025年度） (`PDF-a28d87ee690b93b391::structural_fallback_v1::P0003`)
- [5] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)

### google/gemma-4-E4B-it / agentic / s30_025

Question: 大学の卒論にチャットGPTを使っても大丈夫ですか？

HTTP status: `200`; seconds: `12.646`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages discuss the university's stance on generative AI usage, specifically mentioning that using AI-generated content as one's own in graded submissions is against academic integrity policy.

Answer:

生成系AIが作成したものを、成績評価のための提出物としてあたかも自分で作成したかのように使用することは、ICUのアカデミック・インテグリティーの方針が定める「剽窃」に該当します [1], [2]。 ICUのアカデミック・インテグリティーの方針では、「教員の評価を受けるための学生の提出物（レポート、試験の答案など）は、自分自身のもの（オリジナル作品）でなければなりません」と定められています [1], [2]。また、学生は自分で考え、調査研究したものでない情報の出典を明らかにし、正しく引用することが求められます [1], [2]。 生成系AIが使用するデータが他人の著作物や発表物から成り立っているため、AIが出力する回答自体が著作権侵害や剽窃である可能性も懸念されています [1], [2]。 生成系AIの使用を全面的に否定するものではありませんが、成績評価のための提出物として使用する場合は、ご自身のオリジナル作品である必要があります [1], [2]。

Retrieved / selected chunks:
- [1] `0.000636` `web_page` 学部 教育方針｜国際基督教大学（ICU） (`DOC-001737::structural_fallback_v1::P0003`)
- [2] `0.000566` `web_page` 教育の特徴：大学院｜国際基督教大学（ICU） (`DOC-001744::structural_fallback_v1::P0008`)
- [3] `0.001138` `web_page` レポート・卒論に役立つコンテンツ | CTL (`DOC-000423::structural_fallback_v1::P0000`)
- [4] `0.000469` `web_page` Undergraduate｜ICU - INTERNATIONAL CHRISTIAN UNIVERSITY (`DOC-001646::structural_fallback_v1::P0008`)
- [5] `0.000451` `web_page` Q&A｜国際基督教大学（ICU） (`DOC-001700::structural_fallback_v1::P0004`)

### google/gemma-4-E4B-it / single_shot / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `0.222`
Answer mode: `conservative_policy_guard`

Answer:

The retrieved ICU evidence is not sufficient to answer this as a clear yes/no policy judgment. The closest retrieved sources are [1] Senior Thesis and [3] PDF. Please check the official ICU policy page or ask the relevant office before relying on this.

Retrieved / selected chunks:
- [1] `0.000439` `course_record` Senior Thesis (`COURSE-2026-Winter-31001-STH391::structural_fallback_v1::P0000`)
- [2] `0.000451` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0000`)
- [3] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [4] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [5] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)

### google/gemma-4-E4B-it / agentic / s30_026

Question: Can I use ChatGPT for my senior thesis at ICU?

HTTP status: `200`; seconds: `9.388`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly mention ICU's policies regarding the use of generative AI in senior thesis writing.

Answer:

The unauthorized and unspecified use of generative AI in any stage of writing your senior thesis, and presenting work produced by others, including generative AI, as entirely your own, is considered a breach of ICU policy on academic integrity and will result in an E grade [1]. Students must also abide by the ICU Generative AI policies [1].

Retrieved / selected chunks:
- [1] `0.442516` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.69233` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0014`)
- [3] `0.561275` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0003`)
- [4] `0.440951` `pdf_document` PDF (`PDF-d548f7d5388f5e0661::structural_fallback_v1::P0006`)

### google/gemma-4-E4B-it / single_shot / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `7.075`
Answer mode: `remote_model`

Answer:

For the Senior Thesis, unauthorized and unspecified use of generative AI in any stage of writing and presenting work produced by others, including generative AI, as entirely your own constitutes a breach of ICU policy on academic integrity and will receive an E grade [2]. For the Global Attitudes course, the course generally adheres to the policy outlined in ICU's Perspective on the Use of Generative AI by Students [3]. The retrieved ICU evidence is not sufficient to provide a definitive answer regarding the use of ChatGPT in a general ICU graduation thesis. ={ "answer": "For the Senior Thesis, constitutes a breach of ICU policy on academic integrity and will receive an E grade [2]. ", "citations": [ "[2]", "[3]" ] }

Retrieved / selected chunks:
- [1] `0.029987` `course_record` Middle English (`COURSE-2026-Spring-12117-QELE507::structural_fallback_v1::P0017`)
- [2] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [3] `0.013742` `course_record` Global Attitudes (`COURSE-2026-Winter-32204-QPPI505::structural_fallback_v1::P0013`)
- [4] `0.011642` `course_record` Techniques for Researchers II - Research Grant Writing (`COURSE-2026-Autumn-22502-QADT602::structural_fallback_v1::P0012`)
- [5] `0.011597` `course_record` Qualitative Research Methods in Anthropology (`COURSE-2026-Winter-31124-ANT213::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_027

Question: 我可以在ICU的毕业论文里使用ChatGPT吗？如果资料不够，请明确告诉我。

HTTP status: `200`; seconds: `9.824`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: One passage explicitly mentions ICU Generative AI policies regarding senior theses, which directly addresses the user's question about using ChatGPT in a graduation thesis.

Answer:

在撰寫畢業論文時，必須遵守 ICU 的生成式 AI 政策 [1]。未經授權且未指明的生成式 AI 在撰寫畢業論文的任何階段的使用，以及將由生成式 AI 等他人產出的作品呈現為完全由自己完成的作品，構成違反 ICU 學術誠信政策，將被給予 E 等級 [1]。

Retrieved / selected chunks:
- [1] `0.024054` `course_record` Senior Thesis (`COURSE-2026-Autumn-21001-STH391::structural_fallback_v1::P0012`)
- [2] `0.008156` `web_page` IT Center For ALL Users - ICUで使用するアカウント・システム (`DOC-001382::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / single_shot / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `2.067`
Answer mode: `remote_model`

Answer:

鏑木先生は、「Robotics」（ロボット工学）[1, 4]と「Operating Systems」（オペレーティングシステム）[2]の授業を担当しています。 また、「Quantum Information Science」（量子情報科学）の授業にも関わっています[5]。

Retrieved / selected chunks:
- [1] `0.000602` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000337` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [4] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [5] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_028

Question: 鏑木先生が担当している授業は何ですか？

HTTP status: `200`; seconds: `10.761`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Passages 2, 3, and 4 explicitly list 'KABURAGI, Takashi' as an instructor for specific courses.

Answer:

鏑木先生が担当している授業は以下の通りです。 * Robotics [1] * Quantum Information Science [2] * Operating Systems [3]

Retrieved / selected chunks:
- [1] `0.000997` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0009`)
- [2] `0.000886` `course_record` Quantum Information Science (`COURSE-2026-Winter-32406-QNMS502::structural_fallback_v1::P0000`)
- [3] `0.000869` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0009`)
- [4] `0.001274` `course_record` Extra-Curricular Activities and Teaching Methods for the Integrated Studies Period (`COURSE-2026-Spring-11187-EDU228::structural_fallback_v1::P0004`)
- [5] `0.000833` `course_record` Elements of Discrete Mathematics (`COURSE-2026-Winter-31200-ISC102::structural_fallback_v1::P0008`)

### google/gemma-4-E4B-it / single_shot / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `2.81`
Answer mode: `remote_model`

Answer:

鏑木先生は、「Robotics / ロボット工学」[1]と「Operating Systems / オペレーティングシステム」[2]を教えています。

Retrieved / selected chunks:
- [1] `0.000298` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0000`)
- [2] `0.000602` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0000`)
- [3] `0.119408` `course_record` Japanese Archaeology (`COURSE-2026-Spring-11128-ARC205::structural_fallback_v1::P0013`)
- [4] `0.09401` `course_record` Introduction to Japanese Society (`COURSE-2026-Spring-11325-SOC205::structural_fallback_v1::P0013`)
- [5] `0.078219` `course_record` Curriculum and Instruction (`COURSE-2026-Winter-31173-EDU212::structural_fallback_v1::P0013`)

### google/gemma-4-E4B-it / agentic / s30_029

Question: 鏑木先生教哪些课？请只根据检索到的ICU课程资料回答。

HTTP status: `200`; seconds: `15.48`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: Multiple passages explicitly list Professor KABURAGI, Takashi as the instructor for various courses.

Answer:

鏑木先生が担当している授業は以下の通りです。 * Robotics [1] * Senior Seminar in Information Science I [2] * Advanced Studies in Mathematical Science II [3] * Operating Systems [4] * Numerical Methods in Science [5]

Retrieved / selected chunks:
- [1] `0.555646` `course_record` Robotics (`COURSE-2026-Winter-31207-ISC342::structural_fallback_v1::P0001`)
- [2] `0.520679` `course_record` Senior Seminar in Information Science I (`COURSE-2026-Winter-31206-ISC315::structural_fallback_v1::P0001`)
- [3] `0.51882` `course_record` Advanced Studies in Mathematical Science II (`COURSE-2026-Spring-12404-QNMC506::structural_fallback_v1::P0001`)
- [4] `0.479671` `course_record` Operating Systems (`COURSE-2026-Spring-11209-ISC224::structural_fallback_v1::P0001`)
- [5] `0.445741` `course_record` Numerical Methods in Science (`COURSE-2026-Spring-11210-ISC314::structural_fallback_v1::P0001`)

### google/gemma-4-E4B-it / single_shot / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `3.18`
Answer mode: `remote_model`

Answer:

To check if your registration is complete, you must: * Confirm the results and that you have received online approval from your advisor on the "Registration Result" section of the Registration Website, either the day after course registration or after Late Registration [1, 2, 3, 4, 5]. * Also, confirm the registration results after making any changes to your registration [1, 4]. Note that the registration procedure is not complete until you meet with your advisor and receive their online approval [3, 5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.638272` `ehandbook_page` ehandbook - Course Registration (`DOC-000039::structural_fallback_v1::P0000`)
- [4] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [5] `0.398348` `ehandbook_page` ehandbook - 登録日程 (`DOC-000212::structural_fallback_v1::P0000`)

### google/gemma-4-E4B-it / agentic / s30_030

Question: After I select courses on the registration website, how can I check whether my registration is actually complete?

HTTP status: `200`; seconds: `10.496`
Answer mode: `agentic_remote_model`
Evidence sufficient: `True`
Sufficiency reason: The retrieved passages explicitly state that students must check the 'Registration Result' on the Registration Website to confirm registration and advisor approval after registration.

Answer:

After selecting courses, you must check the "Registration Result" on the Registration Website to confirm both your course registration and approval by your advisor, especially on the day after Registration Day or after Late Registration [1], [2], [3], [4], [5]. You should also check the registration result after making any changes to your registration [1], [2], [3], [4], [5].

Retrieved / selected chunks:
- [1] `0.672547` `ehandbook_page` ehandbook - 第3学期 (`DOC-000214::structural_fallback_v1::P0000`)
- [2] `0.670716` `ehandbook_page` ehandbook - 第2学期 (`DOC-000213::structural_fallback_v1::P0000`)
- [3] `0.421492` `ehandbook_page` ehandbook - Autumn Term (`DOC-000077::structural_fallback_v1::P0000`)
- [4] `0.39129` `ehandbook_page` ehandbook - Winter Term (`DOC-000078::structural_fallback_v1::P0000`)
- [5] `0.269999` `ehandbook_page` ehandbook - Spring Term in Next Academic Year (`DOC-000079::structural_fallback_v1::P0000`)

