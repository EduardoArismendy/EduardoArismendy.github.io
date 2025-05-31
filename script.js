document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Change icon based on theme
        const icon = themeToggle.querySelector('.material-symbols-rounded');
        if (document.body.classList.contains('light-mode')) {
            icon.textContent = 'dark_mode';
        } else {
            icon.textContent = 'light_mode';
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change hamburger icon to close icon
        const icon = hamburger.querySelector('.material-symbols-rounded');
        if (navLinks.classList.contains('active')) {
            icon.textContent = 'close';
            
            // Add mobile nav styles dynamically
            if (!document.getElementById('mobile-nav-styles')) {
                const style = document.createElement('style');
                style.id = 'mobile-nav-styles';
                style.textContent = `
                    .nav-links.active {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 80px;
                        left: 0;
                        width: 100%;
                        background: var(--primary-color);
                        padding: 20px;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                        z-index: 1000;
                    }
                `;
                document.head.appendChild(style);
            }
        } else {
            icon.textContent = 'menu';
        }
    });

   /* // Project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });*/

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('.material-symbols-rounded').textContent = 'menu';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Add background to header on scroll
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.background = document.body.classList.contains('light-mode') 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(18, 18, 18, 0.9)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = document.body.classList.contains('light-mode') 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(18, 18, 18, 0.8)';
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulating API call delay
            setTimeout(() => {
                alert('¡Mensaje enviado correctamente! Gracias por contactar.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skill-item, .contact-detail');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Add initial styles for animation
    const style = document.createElement('style');
    style.textContent = `
        .project-card, .skill-item, .contact-detail {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

//Cambios posteriores

// Tarjetas emergentes de los proyectos con la data

const projectData = {
  "BookNest": {
    title: { en: "BookNest", es: "BookNest" },
    description: {
      en: "A simple web app to upload and view books for reading clubs, using Firebase Storage.",
      es: "Una aplicación web sencilla para subir y ver libros para clubes de lectura, usando Firebase Storage."
    },
    image: "/booknest.png",
    video: "https://www.youtube.com/watch?v=ndFA6WPvNA0",
    techs: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/EduardoArismendy",
    category: "web"
  },

  "Buy and Sell App": {
    title: { en: "Buy and Sell App", es: "App de Compra y Venta" },
    description: {
      en: "Full E-commerce with Google GPS services and chat",
      es: "E-commerce completo con servicios de GPS de Google y chat"
    },
    image: "/proyecto2.png",
    video: "https://www.youtube.com/watch?v=AYAyY_Z-gAM",
    techs: ["Kotlin", "Firebase"],
    github: "https://github.com/usuario/proyecto2",
    category: "ecommerce"
  }
};

  let currentLang = 'en'; // idioma inicial

  function convertToEmbedUrl(url) {
    const regex = /(?:\?v=|\.be\/)([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // si ya es embed o no se reconoce, lo deja igual
  }

 function createProjectCard(project, lang) {
  const card = document.createElement("div");
  card.className = `project-card ${project.category}`;

  card.innerHTML = `
    <div class="project-img">
      <img src="${project.image}" alt="${project.title[lang]}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
    <div class="project-info">
      <h3>${project.title[lang]}</h3>
      <p>${project.description[lang]}</p>
      <div class="project-tags">
        ${project.techs.map(tech => `<span>${tech}</span>`).join("")}
      </div>
      <a href="#" class="view-project" data-project="${project.title[lang]}">${lang === 'es' ? 'Ver proyecto' : 'View project'}</a>
    </div>
  `;
  return card;
}

function createModal(data, lang) {
  const modal = document.createElement("div");
  modal.id = "dynamic-modal";
  modal.classList.add("modal-overlay");

  const embedUrl = convertToEmbedUrl(data.video);

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>${data.title[lang]}</h3>
      <p>${data.description[lang]}</p>
      <div class="modal-video">
        <iframe width="100%" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-tags">
        ${data.techs.map(tech => `<span>${tech}</span>`).join("")}
      </div>
      <a class="modal-github-btn" href="${data.github}" target="_blank">${lang === 'es' ? 'Ver en GitHub' : 'View on GitHub'}</a>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

function renderProjects(lang) {
  const container = document.getElementById("projects-container");
  container.innerHTML = ""; // limpiar para re-renderizar

  // Map para buscar proyecto por título en el idioma actual
  const projectMapByTitle = {};
  Object.values(projectData).forEach(proj => {
    projectMapByTitle[proj.title[lang]] = proj;
  });

  Object.values(projectData).forEach(project => {
    const card = createProjectCard(project, lang);
    container.appendChild(card);
  });

  // Listener para abrir modal
  container.onclick = function(e) {
    if (e.target.classList.contains("view-project")) {
      e.preventDefault();
      const projectTitle = e.target.dataset.project;
      const data = projectMapByTitle[projectTitle];
      if (data) createModal(data, lang);
    }
  };
}

// Inicialización cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(currentLang);

  // Filtro (si usas filtro, mantén igual)
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.dataset.filter;
      const cards = document.querySelectorAll(".project-card");

      cards.forEach(card => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
 