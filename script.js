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
      !(catalogEmpty instanceof HTMLElement)) {
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
  let selectedIntegrationCategory = "Todas";

  const examples = {
    consultas: {
      prompt: "Quiero organizar las consultas frecuentes.",
      reply: "Podemos agrupar las preguntas habituales, preparar respuestas para revisar y dejar los casos especiales en manos de tu equipo. Primero definiríamos juntos qué consultas incluir."
    },
    recordatorios: {
      prompt: "Me gustaría preparar recordatorios.",
      reply: "Podemos identificar qué eventos necesitan un recordatorio, cuándo enviarlo y quién debe revisarlo. El flujo se ajusta a la forma de trabajar de tu negocio."
    },
    documentos: {
      prompt: "Quiero ordenar tareas y documentos.",
      reply: "Podemos diseñar pasos para clasificar solicitudes, organizar documentos y avisar al equipo cuando algo necesite atención. Las personas mantienen el control del proceso."
    }
  };

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
  agentsRail.innerHTML = agents.map((agent) => `
    <button class="agent-card${agent.available ? " is-available" : " is-flowering"}" type="button" data-agent="${agent.name}" aria-pressed="${agent.available ? "true" : "false"}" aria-label="${agent.name}, ${agent.available ? "disponible como automatizador" : "floreciendo, bloqueado"}">
      ${agent.available ? "" : lockIcon()}
      ${flowerArt(agent)}
      <strong>${agent.name}</strong>
      <span class="agent-state">${agent.available ? "Disponible" : "Floreciendo"}</span>
    </button>
  `).join("");
  }

  function updateAgentArrows() {
    const maxScroll = agentsRail.scrollWidth - agentsRail.clientWidth;
    agentsPrevious.disabled = agentsRail.scrollLeft <= 2;
    agentsNext.disabled = maxScroll <= 2 || agentsRail.scrollLeft >= maxScroll - 2;
  }

  function integrationCard(integration) {
    return `
      <div class="integration-card" role="listitem" aria-label="${integration.name}, ${integration.category}">
        <span class="integration-category">${integration.category}</span>
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
    const categories = ["Todas", ...new Set(integrations.map((integration) => integration.category))];
    catalogFilters.innerHTML = categories.map((category) => `
      <button class="catalog-filter${category === selectedIntegrationCategory ? " is-selected" : ""}" type="button" data-category="${category}" aria-pressed="${category === selectedIntegrationCategory}">
        ${category === "Todas" ? "Todas" : category}
      </button>
    `).join("");
  }

  function renderCatalog() {
    const query = normalizeSearch(integrationSearch.value);
    const filteredIntegrations = integrations.filter((integration) => {
      const matchesCategory = selectedIntegrationCategory === "Todas" || integration.category === selectedIntegrationCategory;
      const searchableText = normalizeSearch(`${integration.name} ${integration.category}`);
      return matchesCategory && searchableText.includes(query);
    });

    catalogGrid.innerHTML = filteredIntegrations.map(integrationCard).join("");
    catalogResults.textContent = `Mostrando ${filteredIntegrations.length} de ${integrations.length} herramientas`;
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
    menuToggle.querySelector(".sr-only").textContent = "Abrir menú";
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
    menuToggle.querySelector(".sr-only").textContent = isOpen ? "Abrir menú" : "Cerrar menú";
  });

  renderAgents();
  updateAgentArrows();
  renderIntegrations();
  updateIntegrationArrows();
  updateCatalog();

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
      ? "Ver todas las herramientas"
      : "Cerrar catálogo";
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

    selectedIntegrationCategory = filter.dataset.category ?? "Todas";
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

    if (selectedAgent.available) {
      agentSelection.classList.remove("is-flowering");
      agentSelection.innerHTML = '<p><strong>Loto</strong> es el automatizador disponible. Puedes explorar su demostración conceptual.</p><a class="text-link" href="#demo">Conocer a Loto <span aria-hidden="true">→</span></a>';
      return;
    }

    agentSelection.classList.add("is-flowering");
    agentSelection.innerHTML = `<p><strong>${selectedAgent.name}</strong> está floreciendo. Por ahora, Loto es el único agente disponible como automatizador.</p>`;
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

    const example = examples[button.dataset.example];
    if (!example) {
      return;
    }

    chatSuggestions.querySelectorAll("button").forEach((suggestion) => {
      suggestion.disabled = true;
    });
    appendMessage("Tú", example.prompt, "user");

    window.setTimeout(() => {
      appendMessage("Loto", example.reply, "agent");
      chatSuggestions.querySelectorAll("button").forEach((suggestion) => {
        suggestion.disabled = false;
      });
    }, 350);
  });

  currentYear.textContent = String(new Date().getFullYear());
});
