let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//Fondo con proyectos y tecnologías
// Updated tech stack focused on mobile development and common tools
/*const techStack = [
  // Mobile Development
  { name: 'React Native', icon: '<i class="fab fa-react"></i>' },
  { name: 'Flutter', icon: '<i class="fas fa-mobile-alt"></i>' },
  { name: 'Swift', icon: '<i class="fab fa-swift"></i>' },
  { name: 'Kotlin', icon: '<i class="fab fa-android"></i>' },
  { name: 'Ionic', icon: '<i class="fas fa-mobile"></i>' },
  { name: 'Xamarin', icon: '<i class="fas fa-mobile-screen"></i>' },
  
  // Common Development Tools
  { name: 'Git', icon: '<i class="fab fa-git-alt"></i>' },
  { name: 'GitHub', icon: '<i class="fab fa-github"></i>' },
  { name: 'VS Code', icon: '<i class="fas fa-code"></i>' },
  { name: 'Docker', icon: '<i class="fab fa-docker"></i>' },
  { name: 'Jenkins', icon: '<i class="fab fa-jenkins"></i>' },
  { name: 'Jira', icon: '<i class="fab fa-jira"></i>' },
  { name: 'NPM', icon: '<i class="fab fa-npm"></i>' },
  { name: 'Terminal', icon: '<i class="fas fa-terminal"></i>' },
  
  // Essential Technologies
  { name: 'JavaScript', icon: '<i class="fab fa-js"></i>' },
  { name: 'TypeScript', icon: '<i class="fas fa-code"></i>' },
  { name: 'HTML5', icon: '<i class="fab fa-html5"></i>' },
  { name: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>' },
  { name: 'Firebase', icon: '<i class="fas fa-fire"></i>' },
  { name: 'AWS', icon: '<i class="fab fa-aws"></i>' },
  { name: 'MongoDB', icon: '<i class="fas fa-database"></i>' },
  { name: 'Redux', icon: '<i class="fas fa-code-branch"></i>' },
  { name: 'REST API', icon: '<i class="fas fa-exchange-alt"></i>' },
  { name: 'GraphQL', icon: '<i class="fas fa-project-diagram"></i>' }
];

// Updated projects focused on mobile development
const projects = [
  {
    id: 1,
    name: "Cross-platform Delivery App",
    icon: '<i class="fas fa-truck"></i>',
    description: "A React Native delivery application with real-time tracking and push notifications. Features include route optimization, real-time order tracking, and integration with multiple payment gateways.",
    technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
    github: "https://github.com/username/delivery-app",
    playStore: "https://play.google.com/store/apps/details?id=com.delivery",
    appStore: "https://apps.apple.com/app/delivery-app/id123456789",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      downloads: "50K+",
      rating: "4.8",
      activeUsers: "10K+"
    }
  },
  {
    id: 2,
    name: "Social Media Mobile App",
    icon: '<i class="fas fa-users"></i>',
    description: "Flutter-based social media app with real-time chat, story sharing, and advanced media editing capabilities. Includes AR filters and live streaming features.",
    technologies: ["Flutter", "Dart", "Firebase", "CloudKit"],
    github: "https://github.com/username/social-app",
    playStore: "https://play.google.com/store/apps/details?id=com.social",
    appStore: "https://apps.apple.com/app/social-app/id123456789",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      downloads: "100K+",
      rating: "4.9",
      activeUsers: "50K+"
    }
  },
  {
    id: 3,
    name: "IoT Control Center",
    icon: '<i class="fas fa-microchip"></i>',
    description: "Mobile app for controlling smart home devices with voice commands.",
    technologies: ["Kotlin", "IoT Protocol", "Firebase", "ML Kit"],
    github: "https://github.com/username/iot-app",
    playStore: "https://play.google.com/store/apps/details?id=com.iot",
    appStore: "https://apps.apple.com/app/iot-app/id123456789",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      downloads: "20K+",
      rating: "4.7",
      activeUsers: "5K+"
    }
  },
  {
    id: 4,
    name: "Fintech Wallet",
    icon: '<i class="fas fa-wallet"></i>',
    description: "Secure mobile banking application with biometric authentication.",
    technologies: ["Swift", "Core Data", "Stripe API", "Face ID"],
    github: "https://github.com/username/fintech-app",
    playStore: "https://play.google.com/store/apps/details?id=com.fintech",
    appStore: "https://apps.apple.com/app/fintech-app/id123456789",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      downloads: "30K+",
      rating: "4.8",
      activeUsers: "10K+"
    }
  },
  {
    id: 5,
    name: "Health & Fitness Tracker",
    icon: '<i class="fas fa-heartbeat"></i>',
    description: "Cross-platform health monitoring app with wearable device integration.",
    technologies: ["Ionic", "Angular", "HealthKit", "Google Fit"],
    github: "https://github.com/username/health-app",
    playStore: "https://play.google.com/store/apps/details?id=com.health",
    appStore: "https://apps.apple.com/app/health-app/id123456789",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: {
      downloads: "40K+",
      rating: "4.9",
      activeUsers: "15K+"
    }
  }
];

function createFloatingIcon(icon, x, y) {
  const element = document.createElement('div');
  element.className = 'tech-icon';
  element.style.position = 'absolute';
  element.style.left = x + 'px';
  element.style.top = y + 'px';
  element.innerHTML = icon;
  
  // Add physics properties
  element.velocity = {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2
  };
  
  return element;
}

function createProjectIcon(project, x, y) {
  const element = document.createElement('div');
  element.className = 'project-icon';
  element.style.position = 'absolute';
  element.style.left = x + 'px';
  element.style.top = y + 'px';
  element.innerHTML = project.icon;
  element.setAttribute('data-project-id', project.id);
  element.setAttribute('title', project.name);
  
  // Add velocity properties for physics-based movement
  element.velocity = {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2
  };
  
  element.style.cursor = 'pointer';
  
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    showProjectCard(project);
  });
  
  return element;
}

function showProjectCard(project) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const stats = project.stats;
  
  card.innerHTML = `
    <button class="btn-close">
      <i class="fas fa-times"></i>
    </button>
    <div class="header">
      <div class="project-logo">
        ${project.icon}
      </div>
      <h3>${project.name}</h3>
    </div>
    <p>${project.description}</p>
    
    <div class="video-container">
      <iframe src="${project.demoVideo}" allowfullscreen></iframe>
    </div>
    
    <div class="project-stats">
      <div class="stat-item">
        <span class="stat-value">${stats.downloads}</span>
        <span class="stat-label">Downloads</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">${stats.rating}</span>
        <span class="stat-label">Rating</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">${stats.activeUsers}</span>
        <span class="stat-label">Active Users</span>
      </div>
    </div>
    
    <div class="technologies">
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    
    <div class="button-group">
      <button class="btn-github" onclick="window.open('${project.github}', '_blank')">
        <i class="fab fa-github"></i> View Code
      </button>
      <button class="btn-download" onclick="window.open('${project.playStore}', '_blank')">
        <i class="fab fa-google-play"></i> Play Store
      </button>
      <button class="btn-download" onclick="window.open('${project.appStore}', '_blank')">
        <i class="fab fa-app-store-ios"></i> App Store
      </button>
      <button class="btn-demo" onclick="window.open('${project.demoVideo}', '_blank')">
        <i class="fab fa-youtube"></i> Watch Demo
      </button>
    </div>
  `;
  
  document.body.appendChild(overlay);
  document.body.appendChild(card);
  
  setTimeout(() => {
    overlay.classList.add('active');
    card.classList.add('active');
  }, 10);
  
  const closeCard = () => {
    overlay.remove();
    card.remove();
  };
  
  overlay.addEventListener('click', closeCard);
  card.querySelector('.btn-close').addEventListener('click', closeCard);
}

function addFloatingAnimation(icon) {
  // Remove previous animation in favor of physics-based movement
  updateIconPosition(icon);
}

function updateIconPosition(icon) {
  const rect = icon.getBoundingClientRect();
  const padding = 20; // Add padding from borders
  const x = parseInt(icon.style.left);
  const y = parseInt(icon.style.top);
  
  // Update position based on velocity
  let newX = x + icon.velocity.x;
  let newY = y + icon.velocity.y;
  
  // Bounce off window boundaries with padding
  if (newX <= padding || newX >= window.innerWidth - rect.width - padding) {
    icon.velocity.x *= -1;
    newX = newX <= padding ? padding : window.innerWidth - rect.width - padding;
  }
  
  if (newY <= padding || newY >= window.innerHeight - rect.height - padding) {
    icon.velocity.y *= -1;
    newY = newY <= padding ? padding : window.innerHeight - rect.height - padding;
  }
  
  icon.style.left = `${newX}px`;
  icon.style.top = `${newY}px`;
}

function checkCollisions(icons) {
  for (let i = 0; i < icons.length; i++) {
    const icon1 = icons[i];
    const rect1 = icon1.getBoundingClientRect();
    const center1 = {
      x: rect1.left + rect1.width/2,
      y: rect1.top + rect1.height/2
    };
    
    for (let j = i + 1; j < icons.length; j++) {
      const icon2 = icons[j];
      const rect2 = icon2.getBoundingClientRect();
      const center2 = {
        x: rect2.left + rect2.width/2,
        y: rect2.top + rect2.height/2
      };
      
      // Calculate distance between centers
      const dx = center2.x - center1.x;
      const dy = center2.y - center1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Minimum distance before collision (sum of radii)
      const minDistance = 70; // Icon diameter
      
      if (distance < minDistance) {
        // Collision detected! Calculate collision response
        
        // Normal vector of collision
        const nx = dx / distance;
        const ny = dy / distance;
        
        // Relative velocity
        const dvx = icon2.velocity.x - icon1.velocity.x;
        const dvy = icon2.velocity.y - icon1.velocity.y;
        
        // Relative velocity along normal
        const velAlongNormal = dvx * nx + dvy * ny;
        
        // Don't resolve if objects are moving apart
        if (velAlongNormal > 0) continue;
        
        // Restitution (bounciness)
        const restitution = 0.8;
        
        // Collision impulse
        const j = -(1 + restitution) * velAlongNormal;
        
        // Equal mass assumption
        const impulseX = j * nx;
        const impulseY = j * ny;
        
        // Update velocities
        icon1.velocity.x -= impulseX * 0.5;
        icon1.velocity.y -= impulseY * 0.5;
        icon2.velocity.x += impulseX * 0.5;
        icon2.velocity.y += impulseY * 0.5;
        
        // Positional correction to prevent sinking
        const percent = 0.8; // Penetration percentage to correct
        const slop = 0.01; // Penetration allowance
        const penetration = minDistance - distance;
        
        if (penetration > slop) {
          const correctionMagnitude = (penetration * percent) / 2;
          const correctionX = nx * correctionMagnitude;
          const correctionY = ny * correctionMagnitude;
          
          // Apply position corrections
          const pos1X = parseInt(icon1.style.left);
          const pos1Y = parseInt(icon1.style.top);
          const pos2X = parseInt(icon2.style.left);
          const pos2Y = parseInt(icon2.style.top);
          
          icon1.style.left = `${pos1X - correctionX}px`;
          icon1.style.top = `${pos1Y - correctionY}px`;
          icon2.style.left = `${pos2X + correctionX}px`;
          icon2.style.top = `${pos2Y + correctionY}px`;
        }
        
        // Add some random variation to prevent icons from getting stuck
        icon1.velocity.x += (Math.random() - 0.5) * 0.2;
        icon1.velocity.y += (Math.random() - 0.5) * 0.2;
        icon2.velocity.x += (Math.random() - 0.5) * 0.2;
        icon2.velocity.y += (Math.random() - 0.5) * 0.2;
        
        // Limit maximum velocity
        const maxVelocity = 5;
        const limitVelocity = (vel) => {
          const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
          if (speed > maxVelocity) {
            const ratio = maxVelocity / speed;
            vel.x *= ratio;
            vel.y *= ratio;
          }
        };
        
        limitVelocity(icon1.velocity);
        limitVelocity(icon2.velocity);
      }
    }
  }
}

function updateAnimations() {
  const techIcons = document.querySelectorAll('.tech-icon');
  const projectIcons = document.querySelectorAll('.project-icon');
  
  techIcons.forEach(updateIconPosition);
  projectIcons.forEach(updateIconPosition);
  
  const allIcons = [...Array.from(techIcons), ...Array.from(projectIcons)];
  checkCollisions(allIcons);
  
  requestAnimationFrame(updateAnimations);
}

document.addEventListener('mousemove', (e) => {
  const techIcons = document.querySelectorAll('.tech-icon');
  const projectIcons = document.querySelectorAll('.project-icon');
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  // Handle tech icons - repel from cursor
  techIcons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();
    const iconX = rect.left + rect.width / 2;
    const iconY = rect.top + rect.height / 2;
    
    const dx = mouseX - iconX;
    const dy = mouseY - iconY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const radius = 200;
    
    if (distance < radius) {
      const force = (1 - distance / radius) * 2;
      
      icon.velocity.x -= (dx / distance) * force;
      icon.velocity.y -= (dy / distance) * force;
      
      const scale = 1 + (1 - distance / radius) * 0.5;
      icon.style.transform = `scale(${scale})`;
      const glow = (1 - distance / radius) * 30;
      icon.style.boxShadow = `0 0 ${glow}px var(--primary-color)`;
    } else {
      icon.style.transform = 'scale(1)';
      icon.style.boxShadow = 'none';
    }
  });
  
  // Handle project icons - attract to cursor
  projectIcons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();
    const iconX = rect.left + rect.width / 2;
    const iconY = rect.top + rect.height / 2;
    
    const dx = mouseX - iconX;
    const dy = mouseY - iconY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const attractRadius = 300;
    
    if (distance < attractRadius) {
      const force = 0.8 * (1 - distance / attractRadius);
      
      icon.velocity.x += (dx / distance) * force;
      icon.velocity.y += (dy / distance) * force;
      
      const scale = 1 + force * 0.5;
      icon.style.transform = `scale(${scale})`;
      const glow = force * 30;
      icon.style.boxShadow = `0 0 ${glow}px #2196F3`;
    } else {
      icon.style.transform = 'scale(1)';
      icon.style.boxShadow = 'none';
    }
    
    // Add some random movement
    icon.velocity.x += (Math.random() - 0.5) * 0.2;
    icon.velocity.y += (Math.random() - 0.5) * 0.2;
    
    // Limit maximum velocity
    const maxVelocity = 5;
    const currentSpeed = Math.sqrt(
      icon.velocity.x * icon.velocity.x + 
      icon.velocity.y * icon.velocity.y
    );
    
    if (currentSpeed > maxVelocity) {
      const reduction = maxVelocity / currentSpeed;
      icon.velocity.x *= reduction;
      icon.velocity.y *= reduction;
    }
    
    // Add friction
    icon.velocity.x *= 0.98;
    icon.velocity.y *= 0.98;
  });
});

/*function animateBackground() {
  const background = document.querySelector('.floating-background');
  background.innerHTML = '';
  
  const padding = 20; // Add padding from borders
  const numIcons = Math.min(50, Math.floor(window.innerWidth * window.innerHeight / 40000)); 
  const numProjects = projects.length; 
  
  for (let i = 0; i < numIcons - numProjects; i++) {
    const randomTech = techStack[Math.floor(Math.random() * techStack.length)];
    // Adjust initial positions to respect padding
    const x = padding + Math.random() * (window.innerWidth - 100 - padding * 2);
    const y = padding + Math.random() * (window.innerHeight - 100 - padding * 2);
    
    const icon = createFloatingIcon(randomTech.icon, x, y);
    icon.setAttribute('title', randomTech.name);
    background.appendChild(icon);
  }
  
  projects.forEach((project) => {
    // Adjust initial positions to respect padding
    const x = padding + Math.random() * (window.innerWidth - 100 - padding * 2);
    const y = padding + Math.random() * (window.innerHeight - 100 - padding * 2);
    
    const icon = createProjectIcon(project, x, y);
    background.appendChild(icon);
  });
  
  requestAnimationFrame(updateAnimations);
}

document.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousemove', {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  document.dispatchEvent(mouseEvent);
}, { passive: false });

window.addEventListener('scroll', () => {
  const padding = 20; // Add padding from borders
  
  document.querySelectorAll('.project-icon').forEach((icon, index) => {
    const x = padding + Math.random() * (window.innerWidth - 100 - padding * 2);
    const y = padding + Math.random() * (window.innerHeight - 100 - padding * 2);
    
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  animateBackground();
});

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(animateBackground, 300);
});*/

   
// Función para expandir o contraer la descripción del curso
  /*  function toggleDescripcion(id) {
        var descripcion = document.getElementById(id);
        descripcion.classList.toggle('expandido');
    }*/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".descripcion-curso").forEach(function(parrafo) {
        parrafo.addEventListener("click", function() {
            this.classList.toggle("expandido");
        });
    });
});

