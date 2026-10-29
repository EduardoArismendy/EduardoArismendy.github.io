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
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!(menuToggle instanceof HTMLButtonElement) ||
      !(siteNav instanceof HTMLElement) ||
      !(chatMessages instanceof HTMLElement) ||
      !(chatSuggestions instanceof HTMLElement) ||
      !(currentYear instanceof HTMLElement) ||
      !(agentsRail instanceof HTMLElement) ||
      !(agentSelection instanceof HTMLElement) ||
      !(agentsPrevious instanceof HTMLButtonElement) ||
      !(agentsNext instanceof HTMLButtonElement)) {
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

  agentsPrevious.addEventListener("click", () => {
    agentsRail.scrollBy({ left: -agentsRail.clientWidth * 0.8, behavior: "instant" });
  });

  agentsNext.addEventListener("click", () => {
    agentsRail.scrollBy({ left: agentsRail.clientWidth * 0.8, behavior: "instant" });
  });

  agentsRail.addEventListener("scroll", updateAgentArrows, { passive: true });
  window.addEventListener("resize", updateAgentArrows);

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
