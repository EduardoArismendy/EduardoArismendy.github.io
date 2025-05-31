

document.addEventListener('DOMContentLoaded', function () {
    const langBtn = document.getElementById('language-toggle');
    let currentLang = 'en';

    const translations = {
        es: {
            home: 'Inicio',
            about: 'Sobre mí',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
            viewProjects: 'Ver Proyectos',
            contactBtn: 'Contacto',
            heroText: 'De la idea a la app — elegante, eficiente, multiplataforma.',
            aboutTitle: 'Sobre <span>mí</span>',
            aboutText1: "Soy desarrollador de aplicaciones móviles con experiencia en la creación de soluciones funcionales y centradas en el usuario. Principalmente trabajo con Kotlin para Android y React Native, lo que me permite desarrollar aplicaciones multiplataforma para Android e iOS. Me especializo en diseño de interfaces limpias, arquitectura eficiente e integración fluida con servicios como Firebase. Actualmente, estoy ampliando mis habilidades con Swift para crear experiencias totalmente nativas en iOS.",
            aboutText2: 'Combino un fuerte conocimiento técnico con una mentalidad estratégica para crear productos digitales de alto impacto.',
            completedProjects: 'Proyectos Completados',
            clients: 'Clientes Satisfechos',
            experience: 'Años de Experiencia',
            myProjects: 'Mis <span>Proyectos</span>',
            all: 'Todos',
            websites: 'Sitios Web',
            ecommerce: 'E-commerce',
            restaurant: 'Restaurantes',
            ia: 'IA',
            mySkills: 'Mis <span>Habilidades</span>',
            getInTouch: 'Contáctame',
        },
        en: {
            home: 'Home',
            about: 'About me',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            viewProjects: 'View Projects',
            contactBtn: 'Contact',
            heroText: 'From idea to app — elegant, efficient, cross-platform.',
            aboutTitle: 'About <span>me</span>',
            aboutText1: "I’m a Mobile Application Developer with experience building functional, user-centered solutions. I primarily work with Kotlin for Android and React Native,  allowing me to develop cross-platform apps for Android and iOS. I specialize in clean UI design, efficient architecture, and seamless integration with services like Firebase. I'm currently expanding my skills with Swift to build fully native iOS experiences.",
            aboutText2: 'I bring together strong technical knowledge with a strategic mindset to create high-impact digital products.',
            completedProjects: 'Completed Projects',
            clients: 'Trusted by Clients',
            experience: 'Years of Experience',
            myProjects: 'My <span>Proyects</span>',
            all: 'All',
            websites: 'Websites',
            ecommerce: 'E-commerce',
            restaurant: 'Restaurant',
            ia: 'AI',
            mySkills: 'My <span>Skills</span>',
            getInTouch: 'Get in <span>Touch</span>',
        }
    };

    function translatePage(lang) {
        const t = translations[lang];

        // Nav
        document.querySelector('a[href="#home"]').textContent = t.home;
        document.querySelector('a[href="#about"]').textContent = t.about;
        document.querySelector('a[href="#projects"]').textContent = t.projects;
        document.querySelector('a[href="#skills"]').textContent = t.skills;
        document.querySelector('a[href="#contact"]').textContent = t.contact;

        // Hero
        document.querySelector('.hero-content p').textContent = t.heroText;
        document.querySelector('.primary-btn').textContent = t.viewProjects;
        document.querySelector('.secondary-btn').textContent = t.contactBtn;

        // About
        document.querySelector('#about .section-header h2').innerHTML = t.aboutTitle;
        document.querySelectorAll('.about-text p')[0].textContent = t.aboutText1;
        document.querySelectorAll('.about-text p')[1].textContent = t.aboutText2;
        document.querySelectorAll('.stat-label')[0].textContent = t.completedProjects;
        document.querySelectorAll('.stat-label')[1].textContent = t.clients;
        document.querySelectorAll('.stat-label')[2].textContent = t.experience;

        // Projects
        document.querySelector('#projects .section-header h2').innerHTML = t.myProjects;
        const filters = document.querySelectorAll('.filter-btn');
        filters[0].textContent = t.all;
        filters[1].textContent = t.websites;
        filters[2].textContent = t.ecommerce;
        filters[3].textContent = t.restaurant;
        filters[4].textContent = t.ia;

        // Skills
        document.querySelector('#skills .section-header h2').innerHTML = t.mySkills;

        // Contact
        document.querySelector('#contact .section-header h2').innerHTML = t.getInTouch;
    }

    langBtn.addEventListener('click', function () {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        //langBtn.textContent = currentLang.toUpperCase();
        translatePage(currentLang);
        renderProjects(currentLang);
    });

   

});
