(function () {
  var translations = {
    en: {
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.languages": "Languages",
      "nav.contact": "Contact",
      "nav.linkedin": "LinkedIn",
      "nav.cv": "CV",
      "sidebar.bio": "Business Analyst Intern @ ByteDance/TikTok Japan · Prev Research Assistant @ Sony CSL",
      "sidebar.description": "Trilingual Information Science student (EN/JP/ZH) @ ICU Tokyo (exchange @ UC Davis).",
      "intro.meta": "Tokyo / Information Science / Data, automation, LLM systems",
      "intro.lead": "I build small, reliable systems for messy workflows - from student-facing products to data pipelines and LLM-assisted research tools.",
      "intro.note": "Currently a Business Analyst Intern at ByteDance / TikTok Japan. Previously a Research Assistant at Sony CSL. Studying Information Science at ICU Tokyo, with an exchange year at UC Davis.",
      "signals.users": "students used my UC Davis scheduling extension",
      "signals.scraper": "scraper success-rate improvement at Sony CSL",
      "signals.trilingual": "Trilingual in English, Japanese, and Mandarin",
      "sections.experience": "Experience",
      "sections.education": "Education",
      "sections.projects": "Selected Work",
      "sections.skills": "Skills",
      "sections.languages": "Languages & Certifications",
      "sections.contact": "Contact",
      "experience.bytedance.date": "Nov 2025 - Present",
      "experience.bytedance.title": "Business Analyst Intern, Global Business Solutions",
      "experience.bytedance.org": "ByteDance / TikTok Japan - Tokyo",
      "experience.bytedance.point1": "Support client solution teams with advertiser performance analysis, optimization diagnosis, and data-backed sales proposals.",
      "experience.bytedance.point2": "Work across business questions, reporting workflows, and campaign-level performance signals.",
      "experience.sony.date": "Aug 2025 - Oct 2025",
      "experience.sony.title": "Research Assistant, LLM & Finance",
      "experience.sony.org": "Sony Computer Science Laboratories - Tokyo",
      "experience.sony.point1": "Assisted with prompt fine-tuning for a customer-service LLM chatbot and data-pipeline optimization for a finance-related project.",
      "experience.sony.point2": "Re-engineered Selenium scraping logic and raised success rate from 45% to 80%.",
      "education.school": "International Christian University (ICU)",
      "education.degree": "B.S. in Information Science - Tokyo, Japan - Apr 2022 to Jun 2026 expected",
      "education.gpa": "GPA 3.6 / 4.0",
      "education.exchange": "Exchange year: University of California, Davis",
      "education.coursework": "Coursework: Algorithms, AI & LLM basics, Network Security, Data Science",
      "projects.aggie.meta": "Chrome Extension / UC Davis / 2024-2025",
      "projects.aggie.summary": "A timetable automation extension for UC Davis students. It reduces the friction between course search, professor context, and calendar planning.",
      "projects.aggie.adoption": "Adoption",
      "projects.aggie.users": "800+ users",
      "projects.aggie.workflow": "Workflow",
      "projects.aggie.workflowValue": "Class pages, RMP signals, ICS export",
      "projects.aggie.distribution": "Distribution",
      "projects.aggie.distributionValue": "Reddit posts reached 35k+ views",
      "projects.aggie.video": "Video demo",
      "projects.aggie.reflection": "Reflection",
      "projects.icu.meta": "LLM Retrieval / Campus Information / 2026",
      "projects.icu.title": "ICU Wiki",
      "projects.icu.summary": "A RAG-based chatbot that answers student questions using content from ICU websites, portals, and related university resources.",
      "projects.icu.core": "Core",
      "projects.icu.coreValue": "Retrieval-augmented generation",
      "projects.icu.pipeline": "Pipeline",
      "projects.icu.pipelineValue": "Chunking, embeddings, vector search",
      "projects.icu.constraint": "Constraint",
      "projects.icu.constraintValue": "Useful answers from university text",
      "projects.icu.website": "Research site",
      "skills.dev": "Developing & Data",
      "skills.dataViz": "Data Visualization",
      "skills.llm": "LLM & AI",
      "skills.prompt": "Prompt Engineering",
      "skills.agents": "Agents",
      "skills.retrieval": "Embeddings & Retrieval",
      "skills.analysis": "Analysis & Tools",
      "skills.statistics": "Statistics",
      "skills.documentation": "Technical Documentation",
      "languages.title": "Languages",
      "languages.body": "Japanese - fluent<br>English - fluent<br>Mandarin Chinese - native",
      "certifications.title": "Certifications",
      "certifications.body": "JLPT N1, The Japan Foundation - Jul 2024<br>IELTS 7.5, British Council - Mar 2024<br>TOEIC Listening & Reading 925, ETS - Sep 2021",
      "contact.email": "Email"
    },
    ja: {
      "nav.experience": "職歴",
      "nav.education": "学歴",
      "nav.projects": "制作",
      "nav.skills": "スキル",
      "nav.languages": "言語",
      "nav.contact": "連絡先",
      "nav.linkedin": "LinkedIn",
      "nav.cv": "CV",
      "sidebar.bio": "ByteDance / TikTok Japan ビジネスアナリストインターン · 元 Sony CSL リサーチアシスタント",
      "sidebar.description": "ICU東京の情報科学専攻。英語・日本語・中国語の三言語で活動。UC Davis交換留学。",
      "intro.meta": "東京 / 情報科学 / データ・自動化・LLMシステム",
      "intro.lead": "複雑なワークフローを、小さく信頼できる仕組みに落とし込むことに関心があります。学生向けプロダクトからデータパイプライン、LLMを使った研究支援まで扱っています。",
      "intro.note": "現在は ByteDance / TikTok Japan の Global Business Solutions でビジネスアナリストインターン。以前は Sony CSL で LLM・金融領域のリサーチアシスタント。ICUで情報科学を学び、UC Davisに交換留学しました。",
      "signals.users": "UC Davis向けスケジューリング拡張機能の利用学生数",
      "signals.scraper": "Sony CSLでのスクレイピング成功率改善",
      "signals.trilingual": "英語・日本語・中国語の三言語で対応",
      "sections.experience": "職歴",
      "sections.education": "学歴",
      "sections.projects": "制作・研究",
      "sections.skills": "スキル",
      "sections.languages": "言語・資格",
      "sections.contact": "連絡先",
      "experience.bytedance.date": "2025年11月 - 現在",
      "experience.bytedance.title": "Business Analyst Intern, Global Business Solutions",
      "experience.bytedance.org": "ByteDance / TikTok Japan - 東京",
      "experience.bytedance.point1": "広告主のパフォーマンス分析、改善施策の整理、データに基づく提案作成を通じて、クライアントソリューションチームを支援。",
      "experience.bytedance.point2": "ビジネス課題、レポーティング業務、キャンペーン単位のパフォーマンス指標を横断して扱う。",
      "experience.sony.date": "2025年8月 - 2025年10月",
      "experience.sony.title": "Research Assistant, LLM & Finance",
      "experience.sony.org": "Sony Computer Science Laboratories - 東京",
      "experience.sony.point1": "カスタマーサービス向けLLMチャットボットのプロンプト調整と、金融関連プロジェクトのデータパイプライン最適化を支援。",
      "experience.sony.point2": "Seleniumベースのスクレイピングロジックを見直し、成功率を45%から80%へ改善。",
      "education.school": "国際基督教大学（ICU）",
      "education.degree": "情報科学専攻 - 東京 - 2022年4月入学 / 2026年6月卒業予定",
      "education.gpa": "GPA 3.6 / 4.0",
      "education.exchange": "交換留学: University of California, Davis",
      "education.coursework": "関連科目: アルゴリズム、AI・LLM基礎、ネットワークセキュリティ、データサイエンス",
      "projects.aggie.meta": "Chrome拡張機能 / UC Davis / 2024-2025",
      "projects.aggie.summary": "UC Davisの学生向けに作った時間割自動化拡張機能。授業検索、教授情報、カレンダー作成の手間を減らすことを目的に開発しました。",
      "projects.aggie.adoption": "利用",
      "projects.aggie.users": "800+ users",
      "projects.aggie.workflow": "機能",
      "projects.aggie.workflowValue": "授業ページ、RMP情報、ICS書き出し",
      "projects.aggie.distribution": "広がり",
      "projects.aggie.distributionValue": "Reddit投稿は35k+ viewsに到達",
      "projects.aggie.video": "デモ動画",
      "projects.aggie.reflection": "振り返り",
      "projects.icu.meta": "LLM検索 / 学内情報 / 2026",
      "projects.icu.title": "ICU Wiki",
      "projects.icu.summary": "ICUの公式サイト、ポータル、関連リソースから取得した情報をもとに、学生の質問に答えるRAGベースのチャットボットです。",
      "projects.icu.core": "中核",
      "projects.icu.coreValue": "Retrieval-augmented generation",
      "projects.icu.pipeline": "パイプライン",
      "projects.icu.pipelineValue": "チャンク化、埋め込み、ベクトル検索",
      "projects.icu.constraint": "制約",
      "projects.icu.constraintValue": "大学テキストから実用的な回答を返すこと",
      "projects.icu.website": "研究サイト",
      "skills.dev": "開発・データ",
      "skills.dataViz": "データ可視化",
      "skills.llm": "LLM・AI",
      "skills.prompt": "プロンプト設計",
      "skills.agents": "エージェント",
      "skills.retrieval": "埋め込み・検索",
      "skills.analysis": "分析・ツール",
      "skills.statistics": "統計",
      "skills.documentation": "技術ドキュメント",
      "languages.title": "言語",
      "languages.body": "日本語 - 流暢<br>英語 - 流暢<br>中国語 - ネイティブ",
      "certifications.title": "資格",
      "certifications.body": "JLPT N1, The Japan Foundation - 2024年7月<br>IELTS 7.5, British Council - 2024年3月<br>TOEIC Listening & Reading 925, ETS - 2021年9月",
      "contact.email": "Email"
    },
    zh: {
      "nav.experience": "经历",
      "nav.education": "教育",
      "nav.projects": "项目",
      "nav.skills": "技能",
      "nav.languages": "语言",
      "nav.contact": "联系",
      "nav.linkedin": "LinkedIn",
      "nav.cv": "简历",
      "sidebar.bio": "ByteDance / TikTok Japan 商业分析实习生 · 曾任 Sony CSL 研究助理",
      "sidebar.description": "ICU 东京信息科学学生，具备中 / 日 / 英三语工作能力，曾赴 UC Davis 交换。",
      "intro.meta": "东京 / 信息科学 / 数据、自动化、LLM 系统",
      "intro.lead": "我喜欢把复杂、零散的工作流做成小而可靠的系统，从学生产品到数据管线，再到 LLM 辅助研究工具。",
      "intro.note": "目前在 ByteDance / TikTok Japan 的 Global Business Solutions 担任商业分析实习生。此前在 Sony CSL 参与 LLM 与金融相关研究项目。本科就读于 ICU 信息科学专业，并曾在 UC Davis 交换学习。",
      "signals.users": "名以上学生使用过我做的 UC Davis 排课扩展",
      "signals.scraper": "在 Sony CSL 将爬虫成功率提升的百分点",
      "signals.trilingual": "具备中文、日语、英语三语工作能力",
      "sections.experience": "经历",
      "sections.education": "教育",
      "sections.projects": "项目与研究",
      "sections.skills": "技能",
      "sections.languages": "语言与证书",
      "sections.contact": "联系",
      "experience.bytedance.date": "2025年11月 - 至今",
      "experience.bytedance.title": "Business Analyst Intern, Global Business Solutions",
      "experience.bytedance.org": "ByteDance / TikTok Japan - 东京",
      "experience.bytedance.point1": "通过广告主表现分析、问题诊断和优化建议，支持客户解决方案团队制定数据驱动的销售提案。",
      "experience.bytedance.point2": "参与业务问题分析、报表流程和 campaign 层面的表现指标整理。",
      "experience.sony.date": "2025年8月 - 2025年10月",
      "experience.sony.title": "Research Assistant, LLM & Finance",
      "experience.sony.org": "Sony Computer Science Laboratories - 东京",
      "experience.sony.point1": "协助客户服务 LLM 聊天机器人的 prompt 调整，并参与金融相关项目的数据管线优化。",
      "experience.sony.point2": "重构 Selenium 爬虫评分逻辑，将成功率从45%提升到80%。",
      "education.school": "国际基督教大学（ICU）",
      "education.degree": "信息科学本科 - 东京 - 2022年4月入学 / 预计2026年6月毕业",
      "education.gpa": "GPA 3.6 / 4.0",
      "education.exchange": "交换学习: University of California, Davis",
      "education.coursework": "相关课程: 算法、AI 与 LLM 基础、网络安全、数据科学",
      "projects.aggie.meta": "Chrome 扩展 / UC Davis / 2024-2025",
      "projects.aggie.summary": "面向 UC Davis 学生的排课自动化扩展。它把课程搜索、教授信息和日历导出整合到一个更顺手的流程里。",
      "projects.aggie.adoption": "使用",
      "projects.aggie.users": "800+ users",
      "projects.aggie.workflow": "流程",
      "projects.aggie.workflowValue": "课程页面、RMP 信息、ICS 导出",
      "projects.aggie.distribution": "传播",
      "projects.aggie.distributionValue": "Reddit 帖文达到 35k+ views",
      "projects.aggie.video": "演示视频",
      "projects.aggie.reflection": "复盘文章",
      "projects.icu.meta": "LLM 检索 / 校园信息 / 2026",
      "projects.icu.title": "ICU Wiki",
      "projects.icu.summary": "一个基于 RAG 的校园问答 chatbot，使用 ICU 官网、portal 和相关校内资源内容来回答学生问题。",
      "projects.icu.core": "核心",
      "projects.icu.coreValue": "检索增强生成（RAG）",
      "projects.icu.pipeline": "管线",
      "projects.icu.pipelineValue": "切分、embedding、向量检索",
      "projects.icu.constraint": "约束",
      "projects.icu.constraintValue": "从学校文本中返回真正有用的回答",
      "projects.icu.website": "研究网站",
      "skills.dev": "开发与数据",
      "skills.dataViz": "数据可视化",
      "skills.llm": "LLM 与 AI",
      "skills.prompt": "Prompt Engineering",
      "skills.agents": "Agents",
      "skills.retrieval": "Embeddings & Retrieval",
      "skills.analysis": "分析与工具",
      "skills.statistics": "统计",
      "skills.documentation": "技术文档",
      "languages.title": "语言",
      "languages.body": "日语 - 流利<br>英语 - 流利<br>中文 - 母语",
      "certifications.title": "证书",
      "certifications.body": "JLPT N1, The Japan Foundation - 2024年7月<br>IELTS 7.5, British Council - 2024年3月<br>TOEIC Listening & Reading 925, ETS - 2021年9月",
      "contact.email": "Email"
    }
  };

  var langCodes = { en: "en", ja: "ja", zh: "zh-CN" };
  var storageKey = "portfolio-language";
  var defaultLang = "en";

  function getSavedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage failures; the switch still works for the current page.
    }
  }

  function setLanguage(language) {
    var dictionary = translations[language] || translations[defaultLang];
    document.documentElement.lang = langCodes[language] || langCodes[defaultLang];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-html");
      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === language;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });

    saveLanguage(language);
  }

  function initLanguageSwitcher() {
    var savedLanguage = getSavedLanguage();
    var language = translations[savedLanguage] ? savedLanguage : defaultLang;
    setLanguage(language);

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
