document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");
  const chatMessages = document.querySelector("#chat-messages");
  const chatSuggestions = document.querySelector("#chat-suggestions");
  const currentYear = document.querySelector("#current-year");
  const agentsRail = document.querySelector("#agents-rail");
  const agentSelection = document.querySelector("#agent-selection");
  const agentsPrevious = document.querySelector("#agents-previous");
  const agentsNext = document.querySelector("#agents-next");
  const integrationsRail = document.querySelector("#integrations-rail");
  const integrationsPrevious = document.querySelector("#integrations-previous");
  const integrationsNext = document.querySelector("#integrations-next");
  const catalogToggle = document.querySelector("#catalog-toggle");
  const integrationCatalog = document.querySelector("#integration-catalog");
  const integrationSearch = document.querySelector("#integration-search");
  const catalogFilters = document.querySelector("#catalog-filters");
  const catalogGrid = document.querySelector("#catalog-grid");
  const catalogResults = document.querySelector("#catalog-results");
  const catalogEmpty = document.querySelector("#catalog-empty");
  const languageToggle = document.querySelector("#language-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!(menuToggle instanceof HTMLButtonElement) ||
      !(siteNav instanceof HTMLElement) ||
      !(chatMessages instanceof HTMLElement) ||
      !(chatSuggestions instanceof HTMLElement) ||
      !(currentYear instanceof HTMLElement) ||
      !(agentsRail instanceof HTMLElement) ||
      !(agentSelection instanceof HTMLElement) ||
      !(agentsPrevious instanceof HTMLButtonElement) ||
      !(agentsNext instanceof HTMLButtonElement) ||
      !(integrationsRail instanceof HTMLElement) ||
      !(integrationsPrevious instanceof HTMLButtonElement) ||
      !(integrationsNext instanceof HTMLButtonElement) ||
      !(catalogToggle instanceof HTMLButtonElement) ||
      !(integrationCatalog instanceof HTMLElement) ||
      !(integrationSearch instanceof HTMLInputElement) ||
      !(catalogFilters instanceof HTMLElement) ||
      !(catalogGrid instanceof HTMLElement) ||
      !(catalogResults instanceof HTMLElement) ||
      !(catalogEmpty instanceof HTMLElement) ||
      !(languageToggle instanceof HTMLButtonElement)) {
    throw new Error("No se pudieron inicializar los elementos principales de Gardenia.");
  }

  const agents = [
    { name: "Loto", color: "#FFB3D9", available: true },
    { name: "Margarita", color: "#FFFFFF" },
    { name: "Girasol", color: "#FFC93C" },
    { name: "Rosa", color: "#FF8FA3" },
    { name: "Gardenia", color: "#FFFEFA" },
    { name: "Amapola", color: "#FF6B5E" },
    { name: "Violeta", color: "#A7B3FF" },
    { name: "Flor de cerezo", color: "#FFC4D6" },
    { name: "Tulipán", color: "#FF7F96" },
    { name: "Hortensia", color: "#A7B3FF" },
    { name: "Dalia", color: "#FF9F43" },
    { name: "Nomeolvides", color: "#7CC8FF" },
    { name: "Cosmos", color: "#FF8AD0" },
    { name: "Clavel", color: "#E8556D" },
    { name: "Pensamiento", color: "#8E7CFF" },
    { name: "Peonía", color: "#FFA5AF" },
    { name: "Jazmín", color: "#FFFFFF" },
    { name: "Lirio", color: "#FF9F7A" }
  ];

  const translations = {
    es: {
      skipLink: "Saltar al contenido", brandTagline: "Automatización inteligente", openMenu: "Abrir menú",
      closeMenu: "Cerrar menú", mainNavigation: "Navegación principal", brandHome: "Gardenia, inicio",
      footerBrandHome: "Gardenia, volver al inicio", navSolutions: "Qué automatizamos", navIntegrations: "Integraciones",
      navAgents: "Agentes", navHowItWorks: "Cómo funciona", navDemo: "Ver demostración",
      heroEyebrow: "Automatización útil, hecha para personas", heroTitleFirst: "Menos tareas repetidas.",
      heroTitleSecond: "Más espacio para crecer.", heroIntro: "Gardenia ayuda a empresas y negocios de cualquier índole a automatizar procesos cotidianos para que su equipo pueda enfocarse en lo que realmente importa.",
      heroPrimaryCta: "Explora una demostración", heroSecondaryCta: "Descubre cómo funciona", heroProofLead: "Un proceso a la vez.",
      heroProofText: "Automatizaciones adaptadas al ritmo de tu negocio.", heroArt: "Loto, agente de automatización de Gardenia",
      heroArtLabel: "Tareas en movimiento", orbitLabel: "Herramientas que Loto puede conectar",
      lotoImageTitle: "Loto saludando: flor de loto rosa, rostro sonriente y hojas verdes", lotoGreeting: "Hola, soy Loto",
      heroBottomLead: "Un sistema de automatizaciones para", businessSmallTeams: "Equipos pequeños",
      businessCompanies: "Empresas", businessAllTypes: "Negocios de cualquier índole", businessTypes: "Distintos tipos de negocios",
      agentsEyebrow: "Un jardín de posibilidades", agentsTitle: "Elige un agente",
      agentsIntro: "es el automatizador disponible. Los demás están floreciendo.",
      previousAgents: "Ver agentes anteriores", selectAgent: "Selecciona un agente", moreAgents: "Ver más agentes",
      agentSelected: "es el automatizador disponible. Puedes explorar su demostración conceptual.",
      meetLoto: "Conocer a Loto", solutionsEyebrow: "El trabajo que se repite, puede fluir mejor",
      solutionsTitle: "Tu equipo merece dedicar su tiempo<br class=\"desktop-break\"> a tareas más importantes.",
      solutionsIntro: "Gardenia conecta pasos y organiza actividades repetitivas, con automatizaciones pensadas alrededor de cómo trabaja cada negocio.",
      featureSupportTitle: "Atención y seguimiento", featureSupportText: "Organiza consultas frecuentes, recordatorios y próximos pasos para que nada se quede en el aire.",
      featureDocsTitle: "Documentos y tareas", featureDocsText: "Reduce el trabajo manual de organizar información, preparar borradores y mantener procesos al día.",
      featureFlowsTitle: "Flujos entre herramientas", featureFlowsText: "Conecta actividades de tu operación para evitar pasos duplicados y traspasos innecesarios.",
      sectionNote: "Cada flujo se define contigo. La automatización apoya a las personas; no reemplaza su criterio.",
      integrationsEyebrow: "Conexiones de Loto", integrationsTitle: "Tus herramientas, trabajando en equipo.",
      integrationsIntro: "Estas son algunas herramientas que Loto puede conectar en flujos a medida. Cada conexión depende del servicio, los permisos y la configuración.",
      previousConnections: "Ver conexiones destacadas anteriores", featuredConnections: "Conexiones destacadas de Loto",
      moreConnections: "Ver más conexiones destacadas", also: "También:", builtInTools: "conexiones por API y webhooks, horarios, almacenamiento, tablas, PDF y CSV, imágenes, SMTP, QR, subflujos y aprobaciones.",
      showAllTools: "Ver todas las herramientas", closeCatalog: "Cerrar catálogo", searchTools: "Busca una herramienta",
      searchPlaceholder: "Ej. Gmail, ventas, IA…", filterCategory: "Filtrar por categoría",
      connectableTools: "Herramientas conectables con Loto",
      catalogEmpty: "No encontramos herramientas con esa búsqueda. Prueba otro nombre o categoría.",
      catalogNote: "La presencia en este catálogo no significa que la conexión esté activa. Loto se configura según las herramientas, accesos y necesidades de cada negocio.",
      workflowEyebrow: "Simple desde el primer paso", workflowTitle: "Una forma más clara de trabajar, empieza escuchando.",
      workflowIntro: "Primero entendemos cómo funciona tu negocio. Después proponemos una automatización concreta, que puedas revisar y ajustar con tu equipo.",
      workflowCta: "Mira a Loto en acción", stepOneTitle: "Conversamos",
      stepOneText: "Identificamos tareas repetitivas y lo que más tiempo consume.",
      stepTwoTitle: "Diseñamos el flujo", stepTwoText: "Definimos qué automatizar, qué información hace falta y dónde revisar.",
      stepThreeTitle: "Probamos y mejoramos", stepThreeText: "Tu equipo valida el proceso antes de incorporarlo a su rutina.",
      demoEyebrow: "Una demostración conceptual", demoTitle: "Conoce a Loto.",
      demoIntro: "Loto es la agente de Gardenia que ayuda a convertir tareas repetitivas en procesos más ordenados. Elige un ejemplo ficticio para ver cómo podría empezar una conversación.",
      demoDisclaimer: "Esta muestra no está conectada a sistemas ni utiliza datos reales.",
      demoCta: "Conoce el enfoque de Gardenia", chatLabel: "Demostración interactiva de Loto",
      chatRole: "Agente de automatización", chatDemo: "Demostración",
      chatWelcome: "¡Hola! Puedo enseñarte algunos ejemplos de tareas que se pueden automatizar. ¿Cuál te interesa?",
      chooseExample: "Elige un ejemplo", suggestionQueries: "Organizar consultas frecuentes",
      suggestionReminders: "Preparar recordatorios", suggestionDocuments: "Ordenar tareas y documentos",
      chatFootnote: "Ejemplos ilustrativos, sin información de clientes.",
      lotusEyebrow: "Una flor, un propósito", lotusTitle: "Loto crece contigo.",
      lotusText: "Gardenia es un sistema de automatizaciones para empresas y negocios de cualquier índole. Hoy, Loto es la flor disponible: una guía cercana para explorar cómo hacer que el trabajo repetitivo fluya mejor.",
      tagClear: "Clara", tagCollaborative: "Colaborativa", tagPractical: "Práctica",
      faqEyebrow: "Preguntas frecuentes", faqTitle: "Automatizar con intención.",
      faqIntro: "La tecnología debe adaptarse a las personas y procesos de tu negocio.",
      faqOneQuestion: "¿Qué es Gardenia?",
      faqOneAnswer: "Un sistema de automatizaciones que ayuda a empresas y negocios de cualquier índole a reducir trabajo repetitivo y ordenar sus procesos.",
      faqTwoQuestion: "¿Qué tareas se pueden automatizar?",
      faqTwoAnswer: "Depende de cada operación. Algunos ejemplos son organizar consultas frecuentes, preparar recordatorios o coordinar pasos entre tareas y documentos.",
      faqThreeQuestion: "¿Loto toma decisiones por mi equipo?",
      faqThreeAnswer: "No. La automatización puede ayudar con tareas y flujos, pero las personas mantienen el criterio y la supervisión de su trabajo.",
      faqFourQuestion: "¿La demostración usa información real?",
      faqFourAnswer: "No. La conversación es una muestra local con escenarios ficticios; no solicita ni envía información personal o empresarial.",
      footerPitch: "Automatiza lo repetitivo. Haz espacio para lo importante.", backToTop: "Volver arriba",
      footerNote: "Una demostración conceptual, creada para explorar ideas.",
      allCategories: "Todas", allCategoriesCount: (shown, total) => `Mostrando ${shown} de ${total} herramientas`,
      noResults: "No encontramos herramientas", available: "Disponible", blooming: "Floreciendo",
      availableAgentLabel: "disponible como automatizador", bloomingAgentLabel: "floreciendo, bloqueado",
      bloomingMessage: (name) => `está floreciendo. Por ahora, Loto es el único agente disponible como automatizador.`,
      userName: "Tú"
    },
    en: {
      skipLink: "Skip to content", brandTagline: "Intelligent automation", openMenu: "Open menu",
      closeMenu: "Close menu", mainNavigation: "Main navigation", brandHome: "Gardenia, home",
      footerBrandHome: "Gardenia, back to home", navSolutions: "What we automate", navIntegrations: "Integrations",
      navAgents: "Agents", navHowItWorks: "How it works", navDemo: "See a demo",
      heroEyebrow: "Useful automation, made for people", heroTitleFirst: "Fewer repetitive tasks.",
      heroTitleSecond: "More room to grow.", heroIntro: "Gardenia helps businesses of every kind automate everyday processes so their teams can focus on what matters most.",
      heroPrimaryCta: "Explore a demo", heroSecondaryCta: "See how it works", heroProofLead: "One process at a time.",
      heroProofText: "Automations tailored to the pace of your business.", heroArt: "Loto, Gardenia's automation agent",
      heroArtLabel: "Tasks in motion", orbitLabel: "Tools Loto can connect",
      lotoImageTitle: "Loto waving: a pink lotus flower with a smiling face and green leaves", lotoGreeting: "Hi, I'm Loto",
      heroBottomLead: "An automation system for", businessSmallTeams: "Small teams",
      businessCompanies: "Companies", businessAllTypes: "Businesses of every kind", businessTypes: "Different types of businesses",
      agentsEyebrow: "A garden of possibilities", agentsTitle: "Choose an agent",
      agentsIntro: "is the available automation agent. The others are still blooming.",
      previousAgents: "View previous agents", selectAgent: "Choose an agent", moreAgents: "View more agents",
      agentSelected: "is the available automation agent. Explore its conceptual demo.",
      meetLoto: "Meet Loto", solutionsEyebrow: "Repetitive work can flow better",
      solutionsTitle: "Your team deserves to spend its time<br class=\"desktop-break\"> on more important work.",
      solutionsIntro: "Gardenia connects steps and organizes repetitive activities with automations designed around how each business works.",
      featureSupportTitle: "Customer care and follow-up", featureSupportText: "Organize common inquiries, reminders, and next steps so nothing falls through the cracks.",
      featureDocsTitle: "Documents and tasks", featureDocsText: "Reduce manual work organizing information, preparing drafts, and keeping processes up to date.",
      featureFlowsTitle: "Workflows across tools", featureFlowsText: "Connect activities across your operations to avoid duplicate steps and unnecessary handoffs.",
      sectionNote: "Every workflow is defined with you. Automation supports people; it doesn't replace their judgment.",
      integrationsEyebrow: "Loto's connections", integrationsTitle: "Your tools, working together.",
      integrationsIntro: "Here are some tools Loto can connect in custom workflows. Each connection depends on the service, permissions, and configuration.",
      previousConnections: "View previous featured connections", featuredConnections: "Featured connections for Loto",
      moreConnections: "View more featured connections", also: "Also:", builtInTools: "API and webhook connections, schedules, storage, tables, PDF and CSV, images, SMTP, QR codes, subflows, and approvals.",
      showAllTools: "See all tools", closeCatalog: "Close catalog", searchTools: "Search for a tool",
      searchPlaceholder: "E.g. Gmail, sales, AI…", filterCategory: "Filter by category",
      connectableTools: "Tools that can connect with Loto",
      catalogEmpty: "No tools found. Try another name or category.",
      catalogNote: "A listing here does not mean a connection is active. Loto is configured for each business's tools, access, and needs.",
      workflowEyebrow: "Simple from the very first step", workflowTitle: "A clearer way to work starts with listening.",
      workflowIntro: "First, we learn how your business works. Then we suggest a specific automation your team can review and adjust.",
      workflowCta: "See Loto in action", stepOneTitle: "We talk",
      stepOneText: "We identify repetitive tasks and what takes the most time.",
      stepTwoTitle: "We design the workflow", stepTwoText: "We define what to automate, what information is needed, and where to review it.",
      stepThreeTitle: "We test and improve", stepThreeText: "Your team validates the process before adding it to its routine.",
      demoEyebrow: "A conceptual demo", demoTitle: "Meet Loto.",
      demoIntro: "Loto is Gardenia's agent that helps turn repetitive tasks into more organized processes. Choose a fictional example to see how a conversation might begin.",
      demoDisclaimer: "This demo is not connected to systems and does not use real data.",
      demoCta: "Discover Gardenia's approach", chatLabel: "Interactive demo of Loto",
      chatRole: "Automation agent", chatDemo: "Demo",
      chatWelcome: "Hi! I can show you some examples of tasks that can be automated. Which one interests you?",
      chooseExample: "Choose an example", suggestionQueries: "Organize common inquiries",
      suggestionReminders: "Prepare reminders", suggestionDocuments: "Organize tasks and documents",
      chatFootnote: "Illustrative examples, with no customer information.",
      lotusEyebrow: "One flower, one purpose", lotusTitle: "Loto grows with you.",
      lotusText: "Gardenia is an automation system for businesses of every kind. For now, Loto is the available flower: a friendly guide to exploring how repetitive work can flow better.",
      tagClear: "Clear", tagCollaborative: "Collaborative", tagPractical: "Practical",
      faqEyebrow: "Frequently asked questions", faqTitle: "Automation with intention.",
      faqIntro: "Technology should adapt to the people and processes in your business.",
      faqOneQuestion: "What is Gardenia?",
      faqOneAnswer: "An automation system that helps businesses of every kind reduce repetitive work and organize their processes.",
      faqTwoQuestion: "What tasks can be automated?",
      faqTwoAnswer: "It depends on each operation. Examples include organizing common inquiries, preparing reminders, or coordinating steps across tasks and documents.",
      faqThreeQuestion: "Does Loto make decisions for my team?",
      faqThreeAnswer: "No. Automation can help with tasks and workflows, but people retain judgment and oversight of their work.",
      faqFourQuestion: "Does the demo use real information?",
      faqFourAnswer: "No. The conversation is a local sample with fictional scenarios; it does not request or send personal or business information.",
      footerPitch: "Automate repetitive work. Make room for what matters.", backToTop: "Back to top",
      footerNote: "A conceptual demo, created to explore ideas.",
      allCategories: "All", allCategoriesCount: (shown, total) => `Showing ${shown} of ${total} tools`,
      noResults: "No tools found", available: "Available", blooming: "Blooming",
      availableAgentLabel: "available as an automation agent", bloomingAgentLabel: "blooming, locked",
      bloomingMessage: (name) => `is still blooming. For now, Loto is the only available automation agent.`,
      userName: "You"
    }
  };
  const categoryLabels = {
    "IA": "AI", "IA / protocolo": "AI / protocol", "Productividad": "Productivity",
    "Archivos": "Files", "Documentos": "Documents", "Formularios": "Forms",
    "Microsoft 365": "Microsoft 365", "Comunicación": "Communication",
    "CRM y ventas": "CRM and sales", "Marketing": "Marketing", "Desarrollo": "Developer tools",
    "Datos": "Data", "Comercio": "E-commerce", "Contabilidad": "Accounting",
    "Soporte": "Customer support", "Recursos humanos": "Human resources", "Google": "Google"
  };
  const categoryLabelsEs = Object.fromEntries(Object.keys(categoryLabels).map((category) => [category, category]));
  const categoryOptions = ["IA", "IA / protocolo", "Google", "Productividad", "Archivos", "Documentos", "Formularios", "Microsoft 365", "Comunicación", "CRM y ventas", "Marketing", "Desarrollo", "Datos", "Comercio", "Contabilidad", "Soporte", "Recursos humanos"];
  const localeCategories = (language) => language === "en" ? categoryLabels : categoryLabelsEs;
  const examples = {
    consultas: {
      es: { prompt: "Quiero organizar las consultas frecuentes.", reply: "Podemos agrupar las preguntas habituales, preparar respuestas para revisar y dejar los casos especiales en manos de tu equipo. Primero definiríamos juntos qué consultas incluir." },
      en: { prompt: "I'd like to organize common inquiries.", reply: "We can group common questions, prepare responses for review, and leave special cases to your team. First, we'd define together which inquiries to include." }
    },
    recordatorios: {
      es: { prompt: "Me gustaría preparar recordatorios.", reply: "Podemos identificar qué eventos necesitan un recordatorio, cuándo enviarlo y quién debe revisarlo. El flujo se ajusta a la forma de trabajar de tu negocio." },
      en: { prompt: "I'd like to prepare reminders.", reply: "We can identify which events need a reminder, when to send it, and who should review it. The workflow can fit the way your business works." }
    },
    documentos: {
      es: { prompt: "Quiero ordenar tareas y documentos.", reply: "Podemos diseñar pasos para clasificar solicitudes, organizar documentos y avisar al equipo cuando algo necesite atención. Las personas mantienen el control del proceso." },
      en: { prompt: "I'd like to organize tasks and documents.", reply: "We can design steps to classify requests, organize documents, and notify the team when something needs attention. People stay in control of the process." }
    }
  };
  let language = document.documentElement.lang === "en" ? "en" : "es";
  let selectedAgentName = "Loto";

  const integrations = [
    { name: "OpenAI", slug: "openai", category: "IA" },
    { name: "Google Gemini", slug: "google-gemini", category: "IA" },
    { name: "Claude", slug: "claude", category: "IA" },
    { name: "Groq", slug: "groq", category: "IA" },
    { name: "Perplexity", slug: "perplexity-ai", category: "IA" },
    { name: "MCP", category: "IA / protocolo" },
    { name: "Gmail", slug: "gmail", category: "Google" },
    { name: "Google Sheets", slug: "google-sheets", category: "Productividad" },
    { name: "Google Drive", slug: "google-drive", category: "Archivos" },
    { name: "Google Docs", slug: "google-docs", category: "Documentos" },
    { name: "Google Calendar", slug: "google-calendar", category: "Productividad" },
    { name: "Google Forms", slug: "google-forms", category: "Formularios" },
    { name: "Notion", slug: "notion", category: "Productividad" },
    { name: "Airtable", slug: "airtable", category: "Productividad" },
    { name: "Trello", slug: "trello", category: "Productividad" },
    { name: "Asana", slug: "asana", category: "Productividad" },
    { name: "ClickUp", slug: "clickup", category: "Productividad" },
    { name: "Monday.com", slug: "monday", category: "Productividad" },
    { name: "Microsoft Outlook", slug: "microsoft-outlook", category: "Microsoft 365" },
    { name: "Microsoft Teams", slug: "microsoft-teams", category: "Microsoft 365" },
    { name: "Slack", slug: "slack", category: "Comunicación" },
    { name: "Discord", slug: "discord", category: "Comunicación" },
    { name: "Telegram", slug: "telegram-bot", category: "Comunicación" },
    { name: "WhatsApp", slug: "whatsapp", category: "Comunicación" },
    { name: "X", slug: "twitter", category: "Comunicación" },
    { name: "LinkedIn", slug: "linkedin", category: "Comunicación" },
    { name: "HubSpot", slug: "hubspot", category: "CRM y ventas" },
    { name: "Pipedrive", slug: "pipedrive", category: "CRM y ventas" },
    { name: "Salesforce", slug: "salesforce", category: "CRM y ventas" },
    { name: "Zoho CRM", slug: "zoho-crm", category: "CRM y ventas" },
    { name: "Mailchimp", slug: "mailchimp", category: "Marketing" },
    { name: "ActiveCampaign", slug: "activecampaign", category: "Marketing" },
    { name: "Google Ads", slug: "google-ads", category: "Marketing" },
    { name: "GitHub", slug: "github", category: "Desarrollo" },
    { name: "GitLab", slug: "gitlab", category: "Desarrollo" },
    { name: "Jira", slug: "jira", category: "Desarrollo" },
    { name: "Dropbox", slug: "dropbox", category: "Archivos" },
    { name: "Google Cloud Storage", slug: "google-cloud-storage", category: "Archivos" },
    { name: "BigQuery", slug: "google-bigquery", category: "Datos" },
    { name: "Metabase", slug: "metabase", category: "Datos" },
    { name: "Stripe", slug: "stripe", category: "Comercio" },
    { name: "Shopify", slug: "shopify", category: "Comercio" },
    { name: "WooCommerce", slug: "woocommerce", category: "Comercio" },
    { name: "Typeform", slug: "typeform", category: "Formularios" },
    { name: "QuickBooks", slug: "quickbooks", category: "Contabilidad" },
    { name: "Xero", slug: "xero", category: "Contabilidad" },
    { name: "Intercom", slug: "intercom", category: "Soporte" },
    { name: "Freshdesk", slug: "freshdesk", category: "Soporte" },
    { name: "BambooHR", slug: "bamboohr", category: "Recursos humanos" }
  ];
  const featuredIntegrationNames = new Set([
    "OpenAI",
    "Google Gemini",
    "Gmail",
    "Google Sheets",
    "Slack",
    "WhatsApp",
    "HubSpot",
    "Notion",
    "GitHub",
    "Stripe"
  ]);
  let selectedIntegrationCategory = "__all__";

  try {
    const savedLanguage = window.localStorage.getItem("gardenia-language");
    if (savedLanguage === "es" || savedLanguage === "en") {
      language = savedLanguage;
    }
  } catch (error) {
    console.warn("No se pudo leer la preferencia de idioma guardada.", error);
  }

  function applyLanguage() {
    const strings = translations[language];
    document.documentElement.lang = language;
    document.title = language === "es"
      ? "Gardenia | Automatización inteligente para tu negocio"
      : "Gardenia | Intelligent automation for your business";

    const description = document.querySelector("#page-description");
    if (description instanceof HTMLMetaElement) {
      description.content = language === "es"
        ? "Gardenia automatiza tareas repetitivas para empresas y negocios. Conoce a Loto, tu agente de automatización."
        : "Gardenia automates repetitive tasks for businesses. Meet Loto, your automation agent.";
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && strings[key]) {
        element.textContent = strings[key];
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (key && strings[key]) {
        element.innerHTML = strings[key];
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      if (key && strings[key]) {
        element.setAttribute("aria-label", strings[key]);
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (key && strings[key] && element instanceof HTMLInputElement) {
        element.placeholder = strings[key];
      }
    });

    languageToggle.textContent = language === "es" ? "EN" : "ES";
    languageToggle.lang = language === "es" ? "en" : "es";
    languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
    menuToggle.querySelector(".sr-only").textContent =
      menuToggle.getAttribute("aria-expanded") === "true" ? strings.closeMenu : strings.openMenu;
    catalogToggle.querySelector(".catalog-toggle-label").textContent =
      catalogToggle.getAttribute("aria-expanded") === "true" ? strings.closeCatalog : strings.showAllTools;

    renderAgents();
    renderAgentSelection();
    renderIntegrations();
    updateCatalog();
    chatMessages.innerHTML = `<div class="chat-message message-agent"><span class="message-name">Loto</span><span>${strings.chatWelcome}</span></div>`;
    chatSuggestions.querySelectorAll("button").forEach((suggestion) => {
      suggestion.disabled = false;
    });

    try {
      window.localStorage.setItem("gardenia-language", language);
    } catch (error) {
      console.warn("No se pudo guardar la preferencia de idioma.", error);
    }
  }

  function renderAgentSelection() {
    const strings = translations[language];
    if (selectedAgentName === "Loto") {
      agentSelection.classList.remove("is-flowering");
      agentSelection.innerHTML = `<p><strong>Loto</strong> ${strings.agentSelected}</p><a class="text-link" href="#demo">${strings.meetLoto} <span aria-hidden="true">→</span></a>`;
      return;
    }
    agentSelection.classList.add("is-flowering");
    const selectedAgent = agents.find((agent) => agent.name === selectedAgentName);
    const message = document.createElement("p");
    const name = document.createElement("strong");
    name.textContent = selectedAgent?.name ?? "Loto";
    message.append(name, document.createTextNode(` ${strings.bloomingMessage(selectedAgent?.name ?? "Loto")}`));
    agentSelection.replaceChildren(message);
  }

  function flowerArt(agent) {
  const stem = '<path d="M42 45Q41 62 42 82" fill="none" stroke="#10172A" stroke-width="2.4" stroke-linecap="round"/><path d="M42 68Q30 65 26 71Q33 78 42 74ZM42 73Q53 66 59 71Q53 80 42 78Z" fill="#9BF0E8" stroke="#10172A" stroke-width="1.2"/>';
  const face = '<g transform="translate(0 0)" stroke="#10172A" stroke-width="1.5" fill="none"><path d="M35 37q3 3 6 0M43 37q3 3 6 0"/><path d="M39 46q3 2 6 0"/></g>';

  if (!agent.available) {
    const paleColor = agent.color === "#FFFFFF" || agent.color === "#FFFEFA" ? "#FFF3D6" : agent.color;
    return `<svg viewBox="0 0 84 94" aria-hidden="true">${stem}<ellipse cx="42" cy="35" rx="14" ry="20" fill="${paleColor}" fill-opacity=".72" stroke="#10172A" stroke-width="1.6"/>${face}</svg>`;
  }

  const petals = Array.from({ length: 7 }, (_, index) => {
    const angle = (index - 3) * 20;
    return `<path d="M0 0C10-8 10-24 0-34C-10-24-10-8 0 0Z" transform="rotate(${angle})" fill="${agent.color}"/>`;
  }).join("");
  const hands = '<path d="M36 72Q24 62 18 51M48 72Q62 60 66 44" fill="none" stroke="#10172A" stroke-width="2.2" stroke-linecap="round"/><circle cx="17" cy="50" r="4" fill="#FFF3D6" stroke="#10172A"/><circle cx="67" cy="43" r="4" fill="#FFF3D6" stroke="#10172A"/>';

  return `<svg viewBox="0 0 84 94" aria-hidden="true">${stem}${hands}<g transform="translate(42 35)" stroke="#10172A" stroke-width="1.2" stroke-linejoin="round">${petals}<circle cy="-4" r="13" fill="#FFFFFF"/><g transform="translate(0 -4) scale(.929)"><circle cx="-5.5" cy="-2" r="1.9" fill="#10172A" stroke="none"/><circle cx="5.5" cy="-2" r="1.9" fill="#10172A" stroke="none"/><path d="M-4.5 3.5Q0 8.5 4.5 3.5" fill="none"/><circle cx="-9.5" cy="3" r="2.4" fill="#FF8FA3" stroke="none"/><circle cx="9.5" cy="3" r="2.4" fill="#FF8FA3" stroke="none"/></g></g></svg>`;
  }

  function lockIcon() {
  return '<svg class="agent-lock" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.7"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
  }

  function renderAgents() {
  const strings = translations[language];
  agentsRail.innerHTML = agents.map((agent) => `
    <button class="agent-card${agent.available ? " is-available" : " is-flowering"}" type="button" data-agent="${agent.name}" aria-pressed="${agent.name === selectedAgentName}" aria-label="${agent.name}, ${agent.available ? strings.availableAgentLabel : strings.bloomingAgentLabel}">
      ${agent.available ? "" : lockIcon()}
      ${flowerArt(agent)}
      <strong>${agent.name}</strong>
      <span class="agent-state">${agent.available ? strings.available : strings.blooming}</span>
    </button>
  `).join("");
  }

  function updateAgentArrows() {
    const maxScroll = agentsRail.scrollWidth - agentsRail.clientWidth;
    agentsPrevious.disabled = agentsRail.scrollLeft <= 2;
    agentsNext.disabled = maxScroll <= 2 || agentsRail.scrollLeft >= maxScroll - 2;
  }

  function integrationCard(integration) {
    const category = localeCategories(language)[integration.category] ?? integration.category;
    return `
      <div class="integration-card" role="listitem" aria-label="${integration.name}, ${category}">
        <span class="integration-category">${category}</span>
        ${integration.slug
          ? `<img src="assets/integrations/${integration.slug}.png" alt="" width="38" height="38" loading="lazy" decoding="async">`
          : '<span class="integration-mark" aria-hidden="true">MCP</span>'}
        <strong>${integration.name}</strong>
      </div>
    `;
  }

  function renderIntegrations() {
    integrationsRail.innerHTML = integrations
      .filter((integration) => featuredIntegrationNames.has(integration.name))
      .map(integrationCard)
      .join("");
  }

  function normalizeSearch(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();
  }

  function renderCatalogFilters() {
    const strings = translations[language];
    const categories = ["__all__", ...categoryOptions];
    catalogFilters.innerHTML = categories.map((category) => `
      <button class="catalog-filter${category === selectedIntegrationCategory ? " is-selected" : ""}" type="button" data-category="${category}" aria-pressed="${category === selectedIntegrationCategory}">
        ${category === "__all__" ? strings.allCategories : localeCategories(language)[category]}
      </button>
    `).join("");
  }

  function renderCatalog() {
    const query = normalizeSearch(integrationSearch.value);
    const filteredIntegrations = integrations.filter((integration) => {
      const matchesCategory = selectedIntegrationCategory === "__all__" || integration.category === selectedIntegrationCategory;
      const localizedCategory = localeCategories(language)[integration.category] ?? integration.category;
      const searchableText = normalizeSearch(`${integration.name} ${integration.category} ${localizedCategory}`);
      return matchesCategory && searchableText.includes(query);
    });

    catalogGrid.innerHTML = filteredIntegrations.map(integrationCard).join("");
    catalogResults.textContent = translations[language].allCategoriesCount(filteredIntegrations.length, integrations.length);
    catalogEmpty.hidden = filteredIntegrations.length > 0;
  }

  function updateCatalog() {
    renderCatalogFilters();
    renderCatalog();
  }

  function updateIntegrationArrows() {
    const maxScroll = integrationsRail.scrollWidth - integrationsRail.clientWidth;
    integrationsPrevious.disabled = integrationsRail.scrollLeft <= 5;
    integrationsNext.disabled = maxScroll <= 2 || integrationsRail.scrollLeft >= maxScroll - 2;
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    menuToggle.querySelector(".sr-only").textContent = translations[language].openMenu;
  }

  function appendMessage(label, message, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${sender === "user" ? "message-user" : "message-agent"}`;

    const name = document.createElement("span");
    name.className = "message-name";
    name.textContent = label;

    bubble.append(name, document.createTextNode(message));
    chatMessages.append(bubble);
    chatMessages.scrollTo({
      top: chatMessages.scrollHeight,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    menuToggle.querySelector(".sr-only").textContent = isOpen
      ? translations[language].openMenu
      : translations[language].closeMenu;
  });

  languageToggle.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    applyLanguage();
  });

  applyLanguage();
  updateIntegrationArrows();
  updateAgentArrows();

  agentsPrevious.addEventListener("click", () => {
    agentsRail.scrollBy({ left: -agentsRail.clientWidth * 0.8, behavior: "instant" });
  });

  agentsNext.addEventListener("click", () => {
    agentsRail.scrollBy({ left: agentsRail.clientWidth * 0.8, behavior: "instant" });
  });

  agentsRail.addEventListener("scroll", updateAgentArrows, { passive: true });
  window.addEventListener("resize", updateAgentArrows);

  integrationsPrevious.addEventListener("click", () => {
    integrationsRail.scrollBy({ left: -integrationsRail.clientWidth * 0.8, behavior: reducedMotion ? "instant" : "smooth" });
  });

  integrationsNext.addEventListener("click", () => {
    integrationsRail.scrollBy({ left: integrationsRail.clientWidth * 0.8, behavior: reducedMotion ? "instant" : "smooth" });
  });

  integrationsRail.addEventListener("scroll", updateIntegrationArrows, { passive: true });
  window.addEventListener("resize", updateIntegrationArrows);

  catalogToggle.addEventListener("click", () => {
    const isOpen = catalogToggle.getAttribute("aria-expanded") === "true";
    catalogToggle.setAttribute("aria-expanded", String(!isOpen));
    integrationCatalog.hidden = isOpen;
    catalogToggle.querySelector(".catalog-toggle-label").textContent = isOpen
      ? translations[language].showAllTools
      : translations[language].closeCatalog;
    catalogToggle.querySelector("[aria-hidden='true']").textContent = isOpen ? "＋" : "−";
    if (!isOpen) {
      integrationSearch.focus();
    }
  });

  integrationSearch.addEventListener("input", renderCatalog);
  catalogFilters.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const filter = event.target.closest("button[data-category]");
    if (!(filter instanceof HTMLButtonElement)) {
      return;
    }

    selectedIntegrationCategory = filter.dataset.category ?? "__all__";
    updateCatalog();
  });

  agentsRail.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const card = event.target.closest("button[data-agent]");
    if (!(card instanceof HTMLButtonElement)) {
      return;
    }

    const selectedAgent = agents.find((agent) => agent.name === card.dataset.agent);
    if (!selectedAgent) {
      return;
    }

    agentsRail.querySelectorAll(".agent-card").forEach((agentCard) => {
      agentCard.setAttribute("aria-pressed", String(agentCard === card));
    });

    selectedAgentName = selectedAgent.name;
    renderAgentSelection();
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  chatSuggestions.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest("button[data-example]");
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const example = examples[button.dataset.example]?.[language];
    if (!example) {
      return;
    }

    chatSuggestions.querySelectorAll("button").forEach((suggestion) => {
      suggestion.disabled = true;
    });
    const responseLanguage = language;
    appendMessage(translations[language].userName, example.prompt, "user");

    window.setTimeout(() => {
      if (language !== responseLanguage) {
        return;
      }
      appendMessage("Loto", example.reply, "agent");
      chatSuggestions.querySelectorAll("button").forEach((suggestion) => {
        suggestion.disabled = false;
      });
    }, 350);
  });

  currentYear.textContent = String(new Date().getFullYear());
});
