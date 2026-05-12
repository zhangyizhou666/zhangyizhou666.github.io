---
permalink: /
title: "Yizhou Zhang"
excerpt: "Information Science student building practical data, automation, and LLM tools."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class="anchor" id="about-me"></span>

<section class="intro-panel" aria-labelledby="intro-title">
  <div class="intro-panel__meta" data-i18n="intro.meta">Tokyo / Information Science / Data, automation, LLM systems</div>
  <div class="intro-panel__layout">
    <div class="intro-panel__main">
      <h1 id="intro-title">Yizhou Zhang</h1>
      <p class="intro-panel__lead" data-i18n="intro.lead">
        I build small, reliable systems for messy workflows - from student-facing products to data pipelines and LLM-assisted research tools.
      </p>
      <p class="intro-panel__note" data-i18n="intro.note">
        Currently a Business Analyst Intern at ByteDance / TikTok Japan. Previously a Research Assistant at Sony CSL. Studying Information Science at ICU Tokyo, with an exchange year at UC Davis.
      </p>
      <div class="intro-panel__actions" aria-label="Primary links">
        <a class="text-link text-link--strong" href="/files/cv_yizhou.pdf" data-i18n="nav.cv">CV</a>
        <a class="text-link" href="https://www.linkedin.com/in/robin-zhang-9ba706188/" target="_blank" rel="noopener" data-i18n="nav.linkedin">LinkedIn</a>
        <a class="text-link" href="https://github.com/zhangyizhou666" target="_blank" rel="noopener">GitHub</a>
      </div>
      <div class="language-switcher" aria-label="Language selector">
        <button type="button" data-lang="en" aria-pressed="true">EN</button>
        <button type="button" data-lang="ja" aria-pressed="false">JP</button>
        <button type="button" data-lang="zh" aria-pressed="false">ZH</button>
      </div>
    </div>
    <aside class="signal-rail" aria-label="Selected signals">
      <div class="signal-rail__item">
        <span class="signal-rail__value">800+</span>
        <span class="signal-rail__label" data-i18n="signals.users">students used my UC Davis scheduling extension</span>
      </div>
      <div class="signal-rail__item">
        <span class="signal-rail__value">+35pp</span>
        <span class="signal-rail__label" data-i18n="signals.scraper">scraper success-rate improvement at Sony CSL</span>
      </div>
      <div class="signal-rail__item">
        <span class="signal-rail__value">EN / JP / ZH</span>
        <span class="signal-rail__label" data-i18n="signals.trilingual">Trilingual in English, Japanese, and Mandarin</span>
      </div>
    </aside>
  </div>
</section>

<span class="anchor" id="-experience"></span>

<section class="section-block" aria-labelledby="experience-title">
  <h2 id="experience-title" class="section-heading" data-i18n="sections.experience">Experience</h2>

  <div class="timeline">
    <article class="timeline-item">
      <div class="timeline-item__date" data-i18n="experience.bytedance.date">Nov 2025 - Present</div>
      <div class="timeline-item__content">
        <h3 data-i18n="experience.bytedance.title">Business Analyst Intern, Global Business Solutions</h3>
        <p class="timeline-item__org" data-i18n="experience.bytedance.org">ByteDance / TikTok Japan - Tokyo</p>
        <ul>
          <li data-i18n="experience.bytedance.point1">Support client solution teams with advertiser performance analysis, optimization diagnosis, and data-backed sales proposals.</li>
          <li data-i18n="experience.bytedance.point2">Work across business questions, reporting workflows, and campaign-level performance signals.</li>
        </ul>
      </div>
    </article>

    <article class="timeline-item">
      <div class="timeline-item__date" data-i18n="experience.sony.date">Aug 2025 - Oct 2025</div>
      <div class="timeline-item__content">
        <h3 data-i18n="experience.sony.title">Research Assistant, LLM & Finance</h3>
        <p class="timeline-item__org" data-i18n="experience.sony.org">Sony Computer Science Laboratories - Tokyo</p>
        <ul>
          <li data-i18n="experience.sony.point1">Assisted with prompt fine-tuning for a customer-service LLM chatbot and data-pipeline optimization for a finance-related project.</li>
          <li data-i18n="experience.sony.point2">Re-engineered Selenium scraping logic and raised success rate from 45% to 80%.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<span class="anchor" id="-education"></span>

<section class="section-block section-block--compact" aria-labelledby="education-title">
  <h2 id="education-title" class="section-heading" data-i18n="sections.education">Education</h2>
  <div class="quiet-record">
    <div>
      <h3 data-i18n="education.school">International Christian University (ICU)</h3>
      <p data-i18n="education.degree">B.S. in Information Science - Tokyo, Japan - Apr 2022 to Jun 2026 expected</p>
    </div>
    <ul class="quiet-record__facts">
      <li data-i18n="education.gpa">GPA 3.6 / 4.0</li>
      <li data-i18n="education.exchange">Exchange year: University of California, Davis</li>
      <li data-i18n="education.coursework">Coursework: Algorithms, AI & LLM basics, Network Security, Data Science</li>
    </ul>
  </div>
</section>

<span class="anchor" id="-projects"></span>

<section class="section-block" aria-labelledby="projects-title">
  <h2 id="projects-title" class="section-heading" data-i18n="sections.projects">Selected Work</h2>

  <article class="case-study case-study--featured">
    <div class="case-study__body">
      <p class="case-study__eyebrow" data-i18n="projects.aggie.meta">Chrome Extension / UC Davis / 2024-2025</p>
      <h3><a href="https://chromewebstore.google.com/detail/aggie-schedule-mate/ddlinokodanicjgdkomccaadblcdipee" target="_blank" rel="noopener">Aggie Schedule Mate</a></h3>
      <p class="case-study__summary" data-i18n="projects.aggie.summary">
        A timetable automation extension for UC Davis students. It reduces the friction between course search, professor context, and calendar planning.
      </p>
      <dl class="impact-grid">
        <div>
          <dt data-i18n="projects.aggie.adoption">Adoption</dt>
          <dd data-i18n="projects.aggie.users">800+ users</dd>
        </div>
        <div>
          <dt data-i18n="projects.aggie.workflow">Workflow</dt>
          <dd data-i18n="projects.aggie.workflowValue">Class pages, RMP signals, ICS export</dd>
        </div>
        <div>
          <dt data-i18n="projects.aggie.distribution">Distribution</dt>
          <dd data-i18n="projects.aggie.distributionValue">Reddit posts reached 35k+ views</dd>
        </div>
      </dl>
      <div class="case-study__links">
        <a href="https://www.youtube.com/watch?v=4-czek4zTTQ" target="_blank" rel="noopener" data-i18n="projects.aggie.video">Video demo</a>
        <a href="https://www.linkedin.com/posts/robin-zhang-9ba706188_last-quarter-i-built-a-chrome-extension-to-activity-7322020886205579264-N1ly" target="_blank" rel="noopener" data-i18n="projects.aggie.reflection">Reflection</a>
      </div>
    </div>
    <figure class="case-study__media">
      <img src="/images/Screenshot%202026-04-29%20at%2021.16.04.png" alt="Aggie Schedule Mate Chrome Web Store page">
    </figure>
  </article>

  <article class="case-study case-study--quiet">
    <div class="case-study__body">
      <p class="case-study__eyebrow" data-i18n="projects.icu.meta">LLM Retrieval / Campus Information / 2026</p>
      <h3 data-i18n="projects.icu.title">ICU Wiki</h3>
      <p class="case-study__summary" data-i18n="projects.icu.summary">
        A RAG-based chatbot that answers student questions using content from ICU websites, portals, and related university resources.
      </p>
      <dl class="impact-grid">
        <div>
          <dt data-i18n="projects.icu.core">Core</dt>
          <dd data-i18n="projects.icu.coreValue">Retrieval-augmented generation</dd>
        </div>
        <div>
          <dt data-i18n="projects.icu.pipeline">Pipeline</dt>
          <dd data-i18n="projects.icu.pipelineValue">Chunking, embeddings, vector search</dd>
        </div>
        <div>
          <dt data-i18n="projects.icu.constraint">Constraint</dt>
          <dd data-i18n="projects.icu.constraintValue">Useful answers from university text</dd>
        </div>
      </dl>
      <div class="case-study__links">
        <a href="/icu-wiki/" data-i18n="projects.icu.website">Research site</a>
      </div>
    </div>
  </article>
</section>

<span class="anchor" id="-skills"></span>

<section class="section-block" aria-labelledby="skills-title">
  <h2 id="skills-title" class="section-heading" data-i18n="sections.skills">Skills</h2>

  <div class="skill-matrix">
    <div class="skill-group">
      <h3 data-i18n="skills.dev">Developing & Data</h3>
      <div class="skill-list">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">JavaScript / TypeScript</span>
        <span class="skill-tag">HTML / CSS</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Git</span>
        <span class="skill-tag">NumPy / Pandas</span>
        <span class="skill-tag" data-i18n="skills.dataViz">Data Visualization</span>
      </div>
    </div>
    <div class="skill-group">
      <h3 data-i18n="skills.llm">LLM & AI</h3>
      <div class="skill-list">
        <span class="skill-tag" data-i18n="skills.prompt">Prompt Engineering</span>
        <span class="skill-tag">RAG</span>
        <span class="skill-tag" data-i18n="skills.agents">Agents</span>
        <span class="skill-tag">PostgreSQL (pgvector)</span>
        <span class="skill-tag" data-i18n="skills.retrieval">Embeddings & Retrieval</span>
        <span class="skill-tag">LoRA Fine-tuning</span>
      </div>
    </div>
    <div class="skill-group">
      <h3 data-i18n="skills.analysis">Analysis & Tools</h3>
      <div class="skill-list">
        <span class="skill-tag">Excel / Google Sheets</span>
        <span class="skill-tag" data-i18n="skills.statistics">Statistics</span>
        <span class="skill-tag">A/B Testing</span>
        <span class="skill-tag" data-i18n="skills.documentation">Technical Documentation</span>
      </div>
    </div>
  </div>
</section>

<span class="anchor" id="-certifications--patents"></span>

<section class="section-block section-block--compact" aria-labelledby="languages-title">
  <h2 id="languages-title" class="section-heading" data-i18n="sections.languages">Languages & Certifications</h2>
  <div class="credential-grid">
    <div>
      <h3 data-i18n="languages.title">Languages</h3>
      <p data-i18n-html="languages.body">Japanese - fluent<br>English - fluent<br>Mandarin Chinese - native</p>
    </div>
    <div>
      <h3 data-i18n="certifications.title">Certifications</h3>
      <p data-i18n-html="certifications.body">JLPT N1, The Japan Foundation - Jul 2024<br>IELTS 7.5, British Council - Mar 2024<br>TOEIC Listening & Reading 925, ETS - Sep 2021</p>
    </div>
  </div>
</section>

<span class="anchor" id="-contact"></span>

<section class="section-block contact-strip" aria-labelledby="contact-title">
  <div>
    <h2 id="contact-title" class="section-heading" data-i18n="sections.contact">Contact</h2>
  </div>
  <div class="contact-strip__links">
    <a href="mailto:c261768s@icu.ac.jp" data-i18n="contact.email">Email</a>
    <a href="/files/cv_yizhou.pdf" data-i18n="nav.cv">CV</a>
    <a href="https://www.linkedin.com/in/robin-zhang-9ba706188/" target="_blank" rel="noopener" data-i18n="nav.linkedin">LinkedIn</a>
  </div>
</section>
