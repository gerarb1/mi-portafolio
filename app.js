// ==========================================================================
// GERARDO BURGOS - MINIMAL TECH PORTFOLIO SCRIPT
// i18n Dictionary, Theme Switcher, Copy Email, Project Modals & TaskNote Demo
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. i18n Translations Dictionary ---
  const translations = {
    es: {
      nav_about: 'Sobre Mí',
      nav_skills: 'Habilidades',
      nav_projects: 'Proyectos',
      nav_contact: 'Contacto',
      
      hero_status: 'Estudiante de Último Año • Disponible para Oportunidades',
      hero_title_prefix: 'Hola, soy',
      hero_subtitle: 'Estudiante de 25 años en el último año de Sistemas Informáticos. Apasionado por construir software eficiente que resuelva problemas reales del entorno, enfocado en el desarrollo backend, arquitectura web y gestión de bases de datos SQL.',
      btn_email: 'Enviar Correo',
      btn_copy_email: 'Copiar Email',
      avatar_badge_title: 'Backend & SQL Focus',
      avatar_badge_sub: '25 Años • Sistemas Informáticos',
      
      about_tag: 'Conóceme',
      about_title: 'Sobre Mí',
      about_heading: 'Estudiante de Sistemas con visión orientada a soluciones',
      about_p1: 'Tengo 25 años y me encuentro cursando el último año de la carrera de Sistemas Informáticos. Mi verdadera motivación radica en diseñar y construir aplicaciones de software que transformen problemas complejos en herramientas útiles y eficaces.',
      about_p2: 'Mi enfoque actual está fuertemente orientado al desarrollo web backend y a la gestión de bases de datos relacionales con SQL. Mantengo una mentalidad de aprendizaje continuo, buscando constantemente profundizar en arquitectura de software, rendimiento de consultas, APIs RESTful y mejores prácticas de entrega.',
      
      hl1_title: 'Bases de Datos & Backend SQL',
      hl1_desc: 'Diseño de modelos relacionales, consultas estructuradas, integridad de datos y lógica de servidor en Node.js.',
      hl2_title: 'Software con Impacto Real',
      hl2_desc: 'Desarrollo de proyectos funcionales como ERPs empresariales y aplicaciones móviles orientadas a resolver necesidades operativas.',
      hl3_title: 'Aprendizaje Continuo',
      hl3_desc: 'Adaptabilidad constante a nuevas tecnologías, integrando TypeScript, Astro, React y metodologías CI/CD modernas.',
      
      skills_tag: 'Stack Tecnológico',
      skills_title: 'Habilidades & Herramientas',
      cat_backend: 'Backend & Runtime',
      cat_db: 'Gestión de Bases de Datos',
      cat_lang: 'Lenguaje de Programación',
      cat_devops: 'Control de Versiones & CI/CD',
      cat_frontend: 'Frontend UI & Frameworks',
      cat_styling: 'Diseño & Estilos',
      
      desc_node: 'Creación de servidores web, APIs RESTful, middlewares y procesamiento asíncrono.',
      desc_sql: 'Modelado de tablas relacionales, consultas complejas, índices y optimización de datos.',
      desc_ts: 'Desarrollo seguro con tipado estático, interfaces robustas y menor margen de error.',
      desc_js: 'Programación asíncrona, promesas, manipulación eficiente del DOM y lógica avanzada.',
      desc_github: 'Flujos de trabajo colaborativo, automatización de integraciones con GitHub Actions.',
      desc_react: 'Arquitectura basada en componentes, hooks interactivos y estado reactivo.',
      desc_astro: 'Sitios estáticos ultra veloces con arquitectura de islas de componentes.',
      desc_tailwind: 'Estilizado rápido utility-first para interfaces modernas y responsivas.',
      
      projects_tag: 'Portafolio',
      projects_title: 'Proyectos Destacados',
      p1_badge: 'Enterprise Backend & SQL',
      p1_title: 'ERP Avícola',
      p1_desc: 'Sistema de gestión empresarial integral desarrollado para optimizar el control de producción, inventarios, trazabilidad avícola, costos operativos y generación de reportes estratégicos mediante backend Node.js y estructura de base de datos SQL.',
      
      p2_badge: 'Mobile & Frontend API',
      p2_title: 'Chocolates Para Ti - Mobile App',
      p2_desc: 'Aplicación móvil moderna orientada a la experiencia del usuario para la marca "Chocolates Para Ti". Incluye catálogo de productos, carrito de compras, pedidos interactivos y sincronización fluida con servicios web backend.',
      
      p3_badge: 'DevOps & Automation',
      p3_title: 'TaskNote CI/CD Pipeline',
      p3_desc: 'Aplicación de gestión de notas y tareas integrada con un flujo automatizado de CI/CD mediante GitHub Actions, permitiendo pruebas automáticas y despliegue directo sin intervención manual en GitHub Pages.',
      
      demo_box_title: 'Demo en Vivo (Prueba de TaskNote)',
      btn_add: 'Agregar',
      btn_details: 'Ver Detalles Arquitectónicos',
      
      contact_tag: '¿Hablamos?',
      contact_title: 'Construyamos algo genial juntos',
      contact_sub: 'Estoy disponible para incorporarme a equipos de desarrollo backend, proyectos web o pasantías/puestos profesionales. ¡Escríbeme!',
      ci_edu_title: 'Educación',
      ci_edu_desc: 'Último año - Sistemas Informáticos (25 Años)',
      btn_send_email: 'Enviar Correo Electrónico',
      footer_rights: 'Todos los derechos reservados. Estudiante de Sistemas Informáticos.',
      toast_email_copied: '¡Correo gerardoburgos1232@gmail.com copiado al portapapeles!'
    },
    en: {
      nav_about: 'About Me',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      
      hero_status: 'Senior Student • Available for Opportunities',
      hero_title_prefix: 'Hi, I am',
      hero_subtitle: '25-year-old Computer Systems senior student. Passionate about building efficient software that solves real-world problems, focused on backend development, web architecture, and SQL database management.',
      btn_email: 'Send Email',
      btn_copy_email: 'Copy Email',
      avatar_badge_title: 'Backend & SQL Focus',
      avatar_badge_sub: '25 Years Old • Computer Systems',
      
      about_tag: 'Get to know me',
      about_title: 'About Me',
      about_heading: 'Systems Student with a solution-oriented mindset',
      about_p1: 'I am 25 years old and currently in my final year of Computer Systems Engineering. My real drive is designing and building software applications that turn complex challenges into useful, effective tools.',
      about_p2: 'My current focus is strongly oriented towards web backend development and relational SQL database management. I maintain a continuous learning mindset, constantly striving to deepen my knowledge in software architecture, query performance, RESTful APIs, and delivery best practices.',
      
      hl1_title: 'Databases & Backend SQL',
      hl1_desc: 'Relational schema design, structured queries, data integrity, and server logic in Node.js.',
      hl2_title: 'Software with Real Impact',
      hl2_desc: 'Building functional projects like enterprise ERPs and mobile apps aimed at solving operational needs.',
      hl3_title: 'Continuous Learning',
      hl3_desc: 'Constant adaptability to new tech stacks, integrating TypeScript, Astro, React, and modern CI/CD pipelines.',
      
      skills_tag: 'Tech Stack',
      skills_title: 'Skills & Tools',
      cat_backend: 'Backend & Runtime',
      cat_db: 'Database Management',
      cat_lang: 'Programming Language',
      cat_devops: 'Version Control & CI/CD',
      cat_frontend: 'Frontend UI & Frameworks',
      cat_styling: 'Design & Styling',
      
      desc_node: 'Building web servers, RESTful APIs, custom middlewares, and asynchronous workflows.',
      desc_sql: 'Relational table modeling, complex queries, indexing, and data optimization.',
      desc_ts: 'Type-safe development with static typing, robust interfaces, and fewer runtime errors.',
      desc_js: 'Async programming, promises, DOM manipulation, and modern web logic.',
      desc_github: 'Collaborative Git workflows and GitHub Actions CI/CD automation.',
      desc_react: 'Component-driven architecture, custom hooks, and reactive UI state.',
      desc_astro: 'Ultra-fast static web applications with component islands architecture.',
      desc_tailwind: 'Fast utility-first styling for modern responsive user interfaces.',
      
      projects_tag: 'Portfolio',
      projects_title: 'Featured Projects',
      p1_badge: 'Enterprise Backend & SQL',
      p1_title: 'Poultry ERP (ERP Avícola)',
      p1_desc: 'Comprehensive enterprise resource planning system built to optimize poultry production tracking, inventory, feed control, operational costs, and strategic analytics reports using a Node.js backend and SQL database structure.',
      
      p2_badge: 'Mobile & Frontend API',
      p2_title: 'Chocolates Para Ti - Mobile App',
      p2_desc: 'Modern mobile app focused on user experience for the emblem chocolate brand "Chocolates Para Ti". Features product catalog, shopping cart, interactive ordering, and backend REST API synchronization.',
      
      p3_badge: 'DevOps & Automation',
      p3_title: 'TaskNote CI/CD Pipeline',
      p3_desc: 'Task & note management application integrated with automated CI/CD workflow via GitHub Actions, enabling automated testing and zero-touch static deployment on GitHub Pages.',
      
      demo_box_title: 'Live Interactive Demo (TaskNote Test)',
      btn_add: 'Add Task',
      btn_details: 'View Architectural Details',
      
      contact_tag: 'Let\'s Connect',
      contact_title: 'Let\'s build something great together',
      contact_sub: 'I am available for backend developer positions, full-stack projects, or software engineering internships. Drop me a line!',
      ci_edu_title: 'Education',
      ci_edu_desc: 'Final Year - Computer Systems (25 Years Old)',
      btn_send_email: 'Send Email Directly',
      footer_rights: 'All rights reserved. Computer Systems Student.',
      toast_email_copied: 'Email gerardoburgos1232@gmail.com copied to clipboard!'
    }
  };

  let currentLang = localStorage.getItem('gb_portfolio_lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gb_portfolio_lang', lang);
    document.getElementById('lang-label').textContent = lang === 'es' ? 'EN' : 'ES';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // --- 2. Dark / Light Theme Switcher ---
  const themeBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('theme-icon-sun');
  const iconMoon = document.getElementById('theme-icon-moon');

  let currentTheme = localStorage.getItem('gb_portfolio_theme') || 'light';

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('gb_portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    } else {
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // Apply saved theme & language on load
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // --- 3. Copy Email to Clipboard & Toast Notification ---
  const emailText = 'gerardoburgos1232@gmail.com';
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function copyEmail() {
    navigator.clipboard.writeText(emailText).then(() => {
      toastMessage.textContent = translations[currentLang].toast_email_copied || '¡Correo copiado al portapapeles!';
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }).catch(err => {
      console.error('Copy error:', err);
    });
  }

  const copyBtn1 = document.getElementById('copy-email-btn');
  const copyBtn2 = document.getElementById('copy-email-btn-2');
  if (copyBtn1) copyBtn1.addEventListener('click', copyEmail);
  if (copyBtn2) copyBtn2.addEventListener('click', copyEmail);

  // --- 4. Project Modals Control ---
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const modalCloseBtns = document.querySelectorAll('.modal-close');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
      }
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-backdrop').classList.remove('active');
    });
  });

  modalBackdrops.forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  // --- 5. Interactive TaskNote Demo Widget Logic ---
  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');

  if (form && input && list) {
    const initialTask = document.createElement('li');
    initialTask.textContent = 'Configurar GitHub Actions Pipeline (CI/CD)';
    initialTask.addEventListener('click', () => {
      initialTask.classList.toggle('completed');
    });
    list.appendChild(initialTask);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      const li = document.createElement('li');
      li.textContent = text;
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      list.appendChild(li);
      input.value = '';
    });
  }
});
