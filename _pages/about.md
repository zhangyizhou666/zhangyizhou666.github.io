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
  <div class="intro-panel__meta">Tokyo / Information Science / Data, automation, LLM systems</div>
  <div class="intro-panel__layout">
    <div class="intro-panel__main">
      <h1 id="intro-title">Yizhou Zhang</h1>
      <p class="intro-panel__lead">
        I build small, reliable systems for messy workflows - from student-facing products to data pipelines and LLM-assisted research tools.
      </p>
      <p class="intro-panel__note">
        Currently a Business Analyst Intern at ByteDance / TikTok Japan. Previously a Research Assistant at Sony CSL. Studying Information Science at ICU Tokyo, with an exchange year at UC Davis.
      </p>
      <div class="intro-panel__actions" aria-label="Primary links">
        <a class="text-link text-link--strong" href="/files/cv_yizhou.pdf">CV</a>
        <a class="text-link" href="https://www.linkedin.com/in/yizhou-zhang-9ba706188/" target="_blank" rel="noopener">LinkedIn</a>
        <a class="text-link" href="https://github.com/zhangyizhou666" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
    <aside class="signal-rail" aria-label="Selected signals">
      <div class="signal-rail__item">
        <span class="signal-rail__value">800+</span>
        <span class="signal-rail__label">students used my UC Davis scheduling extension</span>
      </div>
      <div class="signal-rail__item">
        <span class="signal-rail__value">+35pp</span>
        <span class="signal-rail__label">scraper success-rate improvement at Sony CSL</span>
      </div>
      <div class="signal-rail__item">
        <span class="signal-rail__value">EN / JP / ZH</span>
        <span class="signal-rail__label">working languages across product, analysis, and research</span>
      </div>
    </aside>
  </div>
</section>

<span class="anchor" id="-experience"></span>

<section class="section-block" aria-labelledby="experience-title">
  <h2 id="experience-title" class="section-heading">Experience</h2>

  <div class="timeline">
    <article class="timeline-item">
      <div class="timeline-item__date">Nov 2025 - Present</div>
      <div class="timeline-item__content">
        <h3>Business Analyst Intern, Global Business Solutions</h3>
        <p class="timeline-item__org">ByteDance / TikTok Japan - Tokyo</p>
        <ul>
          <li>Support client solution teams with advertiser performance analysis, optimization diagnosis, and data-backed sales proposals.</li>
          <li>Work across business questions, reporting workflows, and campaign-level performance signals.</li>
        </ul>
      </div>
    </article>

    <article class="timeline-item">
      <div class="timeline-item__date">Aug 2025 - Oct 2025</div>
      <div class="timeline-item__content">
        <h3>Research Assistant, LLM & Finance</h3>
        <p class="timeline-item__org">Sony Computer Science Laboratories - Tokyo</p>
        <ul>
          <li>Assisted with prompt fine-tuning for a customer-service LLM chatbot and data-pipeline optimization for a finance-related project.</li>
          <li>Re-engineered Selenium scraping logic and raised success rate from 45% to 80%.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<span class="anchor" id="-education"></span>

<section class="section-block section-block--compact" aria-labelledby="education-title">
  <h2 id="education-title" class="section-heading">Education</h2>
  <div class="quiet-record">
    <div>
      <h3>International Christian University (ICU)</h3>
      <p>B.S. in Information Science - Tokyo, Japan - Apr 2022 to Jun 2026 expected</p>
    </div>
    <ul class="quiet-record__facts">
      <li>GPA 3.6 / 4.0</li>
      <li>Exchange year: University of California, Davis</li>
      <li>Coursework: Algorithms, AI & LLM basics, Network Security, Data Science</li>
    </ul>
  </div>
</section>

<span class="anchor" id="-projects"></span>

<section class="section-block" aria-labelledby="projects-title">
  <h2 id="projects-title" class="section-heading">Selected Work</h2>

  <article class="case-study case-study--featured">
    <div class="case-study__body">
      <p class="case-study__eyebrow">Chrome Extension / UC Davis / 2024-2025</p>
      <h3><a href="https://chromewebstore.google.com/detail/aggie-schedule-mate/ddlinokodanicjgdkomccaadblcdipee" target="_blank" rel="noopener">Aggie Schedule Mate</a></h3>
      <p class="case-study__summary">
        A timetable automation extension for UC Davis students. It reduces the friction between course search, professor context, and calendar planning.
      </p>
      <dl class="impact-grid">
        <div>
          <dt>Adoption</dt>
          <dd>800+ users</dd>
        </div>
        <div>
          <dt>Workflow</dt>
          <dd>Class pages, RMP signals, ICS export</dd>
        </div>
        <div>
          <dt>Distribution</dt>
          <dd>Reddit posts reached 35k+ views</dd>
        </div>
      </dl>
      <div class="case-study__links">
        <a href="https://www.youtube.com/watch?v=4-czek4zTTQ" target="_blank" rel="noopener">Video demo</a>
        <a href="https://www.linkedin.com/posts/yizhou-zhang-9ba706188_last-quarter-i-built-a-chrome-extension-to-activity-7322020886205579264-N1ly" target="_blank" rel="noopener">Reflection</a>
      </div>
    </div>
    <figure class="case-study__media">
      <img src="/images/Screenshot%202026-04-29%20at%2021.16.04.png" alt="Aggie Schedule Mate Chrome Web Store page">
    </figure>
  </article>

  <article class="case-study case-study--quiet">
    <div class="case-study__body">
      <p class="case-study__eyebrow">Senior Thesis Proposal / LLM Retrieval / Planned 2026</p>
      <h3>ICU eHandbook Co-pilot</h3>
      <p class="case-study__summary">
        A planned RAG-based chatbot for student handbook questions. The work focuses on chunking long university documents, retrieval quality, and practical evaluation instead of demo-only chat.
      </p>
      <dl class="impact-grid">
        <div>
          <dt>Core</dt>
          <dd>Retrieval-augmented generation</dd>
        </div>
        <div>
          <dt>Pipeline</dt>
          <dd>Chunking, embeddings, vector search</dd>
        </div>
        <div>
          <dt>Constraint</dt>
          <dd>Useful answers from institutional text</dd>
        </div>
      </dl>
    </div>
  </article>
</section>

<span class="anchor" id="-skills"></span>

<section class="section-block" aria-labelledby="skills-title">
  <h2 id="skills-title" class="section-heading">Skills</h2>

  <div class="skill-matrix">
    <div class="skill-group">
      <h3>Developing & Data</h3>
      <div class="skill-list">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">JavaScript / TypeScript</span>
        <span class="skill-tag">HTML / CSS</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Git</span>
        <span class="skill-tag">NumPy / Pandas</span>
        <span class="skill-tag">Data Visualization</span>
      </div>
    </div>
    <div class="skill-group">
      <h3>LLM & AI</h3>
      <div class="skill-list">
        <span class="skill-tag">Prompt Engineering</span>
        <span class="skill-tag">RAG</span>
        <span class="skill-tag">Agents</span>
        <span class="skill-tag">PostgreSQL (pgvector)</span>
        <span class="skill-tag">Embeddings & Retrieval</span>
        <span class="skill-tag">LoRA Fine-tuning</span>
      </div>
    </div>
    <div class="skill-group">
      <h3>Analysis & Tools</h3>
      <div class="skill-list">
        <span class="skill-tag">Excel / Google Sheets</span>
        <span class="skill-tag">Statistics</span>
        <span class="skill-tag">A/B Testing</span>
        <span class="skill-tag">Technical Documentation</span>
      </div>
    </div>
  </div>
</section>

<span class="anchor" id="-certifications--patents"></span>

<section class="section-block section-block--compact" aria-labelledby="languages-title">
  <h2 id="languages-title" class="section-heading">Languages & Certifications</h2>
  <div class="credential-grid">
    <div>
      <h3>Languages</h3>
      <p>Japanese - fluent<br>English - fluent<br>Mandarin Chinese - native</p>
    </div>
    <div>
      <h3>Certifications</h3>
      <p>JLPT N1, The Japan Foundation - Jul 2024<br>IELTS 7.5, British Council - Mar 2024<br>TOEIC Listening & Reading 925, ETS - Sep 2021</p>
    </div>
  </div>
</section>

<span class="anchor" id="-contact"></span>

<section class="section-block contact-strip" aria-labelledby="contact-title">
  <div>
    <h2 id="contact-title" class="section-heading">Contact</h2>
  </div>
  <div class="contact-strip__links">
    <a href="mailto:c261768s@icu.ac.jp">Email</a>
    <a href="/files/cv_yizhou.pdf">CV</a>
    <a href="https://www.linkedin.com/in/yizhou-zhang-9ba706188/" target="_blank" rel="noopener">LinkedIn</a>
  </div>
</section>
