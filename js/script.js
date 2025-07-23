// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);
});
// const { animate } = require("framer-motion");

// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Verificación para asegurar que 'targetLink' no sea null antes de usar 'classList'
            let targetLink = document.querySelector('header nav a[href*=' + id + ']');
            if (targetLink) { // <--- Esta es la corrección clave
                targetLink.classList.add('active');
            } else {
                // Opcional: Para depuración, puedes ver qué ID de sección no tiene un enlace correspondiente
                console.warn(`Advertencia: Enlace de navegación para la sección con ID "${id}" no encontrado.`);
            }
            
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    // Se asume que 'menuIcon' y 'navbar' son encontrados en el DOM.
    // Si aún obtienes errores aquí, asegúrate de que los selectores '#menu-icon' y '.navbar'
    // correspondan a elementos existentes en tu HTML en todo momento.
    if (menuIcon) { // Añadir una verificación defensiva también aquí por si acaso
        menuIcon.classList.remove('bx-x'); 
    }
    if (navbar) { // Añadir una verificación defensiva también aquí por si acaso
        navbar.classList.remove('active');
    }

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    
    // footer
    let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
    let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);

    // footer
    pupilsArr.forEach((curPupil) => {
      curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  })

}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);



const translations = {
    en: {
        pageTitle: "Samuel Valentin Marin | Portfolio",
        noscript: "Please enable Javascript",
        navHome: "Home",
        navAbout: "About Me",
        navEducation: "Education",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        helloText: "Hello, I'm",
        jobTitle: "Software Developer",
        homeParagraph: '"Greetings! I am <span class="highlight">Samuel Valentin Marin Hoyos</span>, a <span class="highlight">software developer</span> with 3 years of experience, standing out for my <span class="highlight">responsibility, commitment, and self-taught ability</span>. My passion for technology has led me to specialize in web and application development, with a solid foundation in <span class="highlight">HTML, CSS, JavaScript, React, Angular, and Golang</span>. I am an expert in database management with <span class="highlight">MySQL and PostgreSQL</span>, and I possess advanced knowledge in <span class="highlight">cybersecurity</span>, including the implementation of <span class="highlight">JWT</span>. My focus is always on delivering high-quality, efficient, and secure solutions. Explore my portfolio to see how I can help you achieve your technological goals."',
        hireMeBtn: "Hire Me",
        myCvBtn: "My CV",
        aboutMeTitlePart1: "About",
        aboutMeTitlePart2: "Me",
        aboutSubtitle: "Software and Web Developer !",
        aboutParagraph: '"I am a <span class="highlight">Software and Web Developer</span> with approximately 3 years of experience, combining a solid academic background with a strong self-taught focus. My journey began with the development of basic websites, mastering <span class="highlight">HTML, CSS, and JavaScript</span>, and then evolving towards advanced technologies such as <span class="highlight">React, Angular, Sass, and Golang development</span>. I possess deep knowledge in database management, specifically <span class="highlight">SQL, MySQL, and PostgreSQL</span>. Throughout my career, I have led and contributed to the creation of various complex systems and applications, including <span class="highlight">complete platforms for cryptocurrency brokers, enterprise SaaS services, and mobile applications with Kotlin</span>. Currently, I work as a <span class="highlight">Developer and Frontend Area Leader</span> in a SaaS project for Occupational Safety and Health Management, and I lead a Cryptocurrency Broker and Virtual Casino project. My commitment to <span class="highlight">cybersecurity</span> is reflected in my experience with implementations like <span class="highlight">JWT</span>, ensuring robust and protected platforms. I am a <span class="highlight">responsible, diligent professional with a great capacity for self-learning</span>, always focused on delivering innovative and high-quality solutions."',
        journeyTitlePart1: "My",
        journeyTitlePart2: "Journey",
        educationTitle: "Education",
        highSchoolTitle: "High School - Colegio Corazonista de Medellín",
        highSchoolDescription: '"I completed my high school education at Colegio Corazonista de Medellín, where I acquired a solid academic foundation and developed my critical thinking."',
        techDegreeTitle: "Software Development Technician - Universidad Pontificia Bolivariana",
        techDegreeDescription: '"At the Universidad Pontificia Bolivariana, I earned my Software Development Technician degree, where I delved into the fundamentals of programming and the software development lifecycle."',
        selfTaughtTitle: "Self-Taught Knowledge",
        selfTaughtDescription: '"Much of my technical skills and knowledge, especially in advanced technologies and programming languages, have been acquired through constant self-learning, keeping me up-to-date with the latest industry trends."',
        experienceTitle: "Experience",
        freelanceTitle: "Freelance Developer",
        freelanceDescription: '"As a freelance developer, I have had the opportunity to work on a wide range of projects, including the creation of complete websites for cryptocurrency brokers, custom SaaS services, and mobile applications. This experience has allowed me to strengthen my skills in various technologies and adapt to different client requirements."',
        saasLeadTitle: "Developer and Frontend Area Leader - SaaS Project (Occupational Safety and Health Management)",
        saasLeadDescription: '"Currently, I lead the frontend area in a SaaS project focused on occupational safety and health management. My responsibilities include the development, optimization, and implementation of robust and scalable user interfaces, as well as the coordination of the frontend team."',
        cryptoLeadTitle: "Project Leader - Cryptocurrency Broker and Virtual Casinos",
        cryptoLeadDescription: '"In this role, I lead the development of a cryptocurrency broker and virtual casino platform. I am in charge of the architecture, design, and implementation of key functionalities, ensuring the security and efficiency of the platform."',
        skillsTitlePart1: "My",
        skillsTitlePart2: "Skills",
        technicalSkillsTitle: "Technical Skills",
        professionalSkillsTitle: "Professional Skills",
        communicationSkill: "Communication",
        leadershipSkill: "Leadership",
        projectManagementSkill: "Project Management",
        cybersecuritySkill: "Cybersecurity (JWT)",
        interfaceDesignSkill: "Interface Design",
        englishSkill: "English",
        aiSkill: "Artificial Intelligence (AI)",
        projectsHeading: "My <span>Projects</span>",
        projectsNote1: "Please note: The projects displayed here are currently in their development phase.",
        projectsNote2: "Additionally, many other projects are not shown due to confidentiality agreements.",
        cryptoBrokerTitle: "Cryptocurrency Broker Platforms",
        cryptoBrokerDescription: "Comprehensive development of platforms for the exchange and management of cryptocurrencies, ensuring secure and efficient transactions.",
        saasSystemsTitle: "SaaS Systems for Businesses",
        saasSystemsDescription: "Creation of customized Software as a Service (SaaS) solutions to optimize business processes and improve productivity.",
        virtualCasinosTitle: "Virtual Casinos",
        virtualCasinosDescription: "Development of virtual gaming platforms, implementing security and a smooth user experience.",
        marketplacesTitle: "Marketplaces",
        marketplacesDescription: "Construction of robust e-commerce platforms, facilitating interaction between buyers and sellers.",
        kotlinAppsTitle: "Mobile Applications with Kotlin",
        kotlinAppsDescription: "Development of native Android applications using Kotlin, focused on usability and performance.",
        otherSystemsTitle: "Other Systems and Applications",
        otherSystemsDescription: "Extensive experience in developing various systems and applications, adapting to the specific requirements of each project.",
        contactMeTitlePart1: "Contact Me",
        contactMeTitlePart2: "Now",
        fullNamePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        phonePlaceholder: "Phone Number",
        subjectPlaceholder: "Message Subject",
        messagePlaceholder: "Your Message",
        sendMessageBtn: "Send Message",
        footerQuote1: "Development,",
        footerQuote2: "Leadership,",
        footerQuote3: "Success",
        footerQuote4: "Guaranteed.",
        footerText: "Developed by Samuel Valentin Marin Hoyos &copy; 2025 | All rights reserved."
    },
    es: {
        pageTitle: "Samuel Valentin Marin | Portafolio",
        noscript: "Por favor, habilita Javascript",
        navHome: "Inicio",
        navAbout: "Sobre Mí",
        navEducation: "Educación",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        navContact: "Contacto",
        helloText: "Hola, soy",
        jobTitle: "Desarrollador de Software",
        homeParagraph: '"¡Saludos! Soy <span class="highlight">Samuel Valentín Marín Hoyos</span>, un <span class="highlight">desarrollador de software</span> con 3 años de experiencia, destacando por mi <span class="highlight">responsabilidad, compromiso y autodidactismo</span>. Mi pasión por la tecnología me ha llevado a especializarme en el desarrollo web y de aplicaciones, con una sólida base en <span class="highlight">HTML, CSS, JavaScript, React, Angular y Golang</span>. Soy experto en gestión de bases de datos con <span class="highlight">MySQL y PostgreSQL</span>, y poseo conocimientos avanzados en <span class="highlight">ciberseguridad</span>, incluyendo la implementación de <span class="highlight">JWT</span>. Mi enfoque siempre está en entregar soluciones de alta calidad, eficientes y seguras. Explora mi portafolio para ver cómo puedo ayudarte a alcanzar tus metas tecnológicas."',
        hireMeBtn: "Contrátame",
        myCvBtn: "Mi CV",
        aboutMeTitlePart1: "Sobre",
        aboutMeTitlePart2: "Mí",
        aboutSubtitle: "¡Desarrollador de Software y Web!",
        aboutParagraph: '"Soy un <span class="highlight">Desarrollador de Software y Web</span> con aproximadamente 3 años de experiencia, combinando una sólida formación académica con un fuerte enfoque autodidacta. Mi trayectoria comenzó con el desarrollo de sitios web básicos, dominando <span class="highlight">HTML, CSS y JavaScript</span>, para luego evolucionar hacia tecnologías avanzadas como <span class="highlight">React, Angular, Sass y desarrollo en Golang</span>. Poseo un profundo conocimiento en gestión de bases de datos, específicamente <span class="highlight">SQL, MySQL y PostgreSQL</span>. A lo largo de mi carrera, he liderado y contribuido a la creación de diversos sistemas y aplicaciones complejos, incluyendo <span class="highlight">plataformas completas para brókers de criptomonedas, servicios SaaS empresariales y aplicaciones móviles con Kotlin</span>. Actualmente, me desempeño como <span class="highlight">Desarrollador y Líder de Área Frontend</span> en un proyecto SaaS de Gestión de Seguridad y Salud en el Trabajo, y lidero un proyecto de Bróker de Criptomonedas y Casinos Virtuales. Mi compromiso con la <span class="highlight">ciberseguridad</span> se refleja en mi experiencia con implementaciones como <span class="highlight">JWT</span>, asegurando plataformas robustas y protegidas. Soy un profesional <span class="highlight">responsable, diligente y con una gran capacidad de autoaprendizaje</span>, siempre enfocado en entregar soluciones innovadoras y de alta calidad."',
        journeyTitlePart1: "Mi",
        journeyTitlePart2: "Trayectoria",
        educationTitle: "Educación",
        highSchoolTitle: "Bachillerato - Colegio Corazonista de Medellín",
        highSchoolDescription: '"Completé mi educación secundaria en el Colegio Corazonista de Medellín, donde adquirí una sólida base académica y desarrollé mi pensamiento crítico."',
        techDegreeTitle: "Técnico en Desarrollo de Software - Universidad Pontificia Bolivariana",
        techDegreeDescription: '"En la Universidad Pontificia Bolivariana, obtuve mi título de Técnico en Desarrollo de Software, donde profundicé en los fundamentos de la programación y el ciclo de vida del desarrollo de software."',
        selfTaughtTitle: "Conocimiento Autodidacta",
        selfTaughtDescription: '"Gran parte de mis habilidades y conocimientos técnicos, especialmente en tecnologías avanzadas y lenguajes de programación, los he adquirido a través de un constante autoaprendizaje, manteniéndome actualizado con las últimas tendencias de la industria."',
        experienceTitle: "Experiencia",
        freelanceTitle: "Desarrollador Freelance",
        freelanceDescription: '"Como desarrollador freelance, he tenido la oportunidad de trabajar en una amplia gama de proyectos, incluyendo la creación de sitios web completos para brókers de criptomonedas, servicios SaaS personalizados y aplicaciones móviles. Esta experiencia me ha permitido fortalecer mis habilidades en diversas tecnologías y adaptarme a los diferentes requisitos de los clientes."',
        saasLeadTitle: "Desarrollador y Líder de Área Frontend - Proyecto SaaS (Gestión de Seguridad y Salud en el Trabajo)",
        saasLeadDescription: '"Actualmente, lidero el área de frontend en un proyecto SaaS enfocado en la gestión de seguridad y salud en el trabajo. Mis responsabilidades incluyen el desarrollo, optimización e implementación de interfaces de usuario robustas y escalables, así como la coordinación del equipo de frontend."',
        cryptoLeadTitle: "Líder de Proyecto - Bróker de Criptomonedas y Casinos Virtuales",
        cryptoLeadDescription: '"En este rol, lidero el desarrollo de una plataforma de bróker de criptomonedas y casinos virtuales. Estoy a cargo de la arquitectura, diseño e implementación de funcionalidades clave, asegurando la seguridad y eficiencia de la plataforma."',
        skillsTitlePart1: "Mis",
        skillsTitlePart2: "Habilidades",
        technicalSkillsTitle: "Habilidades Técnicas",
        professionalSkillsTitle: "Habilidades Profesionales",
        communicationSkill: "Comunicación",
        leadershipSkill: "Liderazgo",
        projectManagementSkill: "Gestión de Proyectos",
        cybersecuritySkill: "Ciberseguridad (JWT)",
        interfaceDesignSkill: "Diseño de Interfaz",
        englishSkill: "Inglés",
        aiSkill: "Inteligencia Artificial (IA)",
        projectsHeading: "Mis <span>Proyectos</span>",
        projectsNote1: "Por favor, ten en cuenta: Los proyectos que se muestran aquí están actualmente en fase de desarrollo.",
        projectsNote2: "Además, muchos otros proyectos no se muestran debido a acuerdos de confidencialidad.",
        cryptoBrokerTitle: "Plataformas de Bróker de Criptomonedas",
        cryptoBrokerDescription: "Desarrollo integral de plataformas para el intercambio y gestión de criptomonedas, garantizando transacciones seguras y eficientes.",
        saasSystemsTitle: "Sistemas SaaS para Empresas",
        saasSystemsDescription: "Creación de soluciones de Software como Servicio (SaaS) personalizadas para optimizar procesos de negocio y mejorar la productividad.",
        virtualCasinosTitle: "Casinos Virtuales",
        virtualCasinosDescription: "Desarrollo de plataformas de juegos virtuales, implementando seguridad y una experiencia de usuario fluida.",
        marketplacesTitle: "Marketplaces",
        marketplacesDescription: "Construcción de plataformas de comercio electrónico robustas, facilitando la interacción entre compradores y vendedores.",
        kotlinAppsTitle: "Aplicaciones Móviles con Kotlin",
        kotlinAppsDescription: "Desarrollo de aplicaciones Android nativas utilizando Kotlin, enfocadas en la usabilidad y el rendimiento.",
        otherSystemsTitle: "Otros Sistemas y Aplicaciones",
        otherSystemsDescription: "Amplia experiencia en el desarrollo de diversos sistemas y aplicaciones, adaptándose a los requerimientos específicos de cada proyecto.",
        contactMeTitlePart1: "Contáctame",
        contactMeTitlePart2: "Ahora",
        fullNamePlaceholder: "Nombre Completo",
        emailPlaceholder: "Correo Electrónico",
        phonePlaceholder: "Número de Teléfono",
        subjectPlaceholder: "Asunto del Mensaje",
        messagePlaceholder: "Tu Mensaje",
        sendMessageBtn: "Enviar Mensaje",
        footerQuote1: "Desarrollo,",
        footerQuote2: "Liderazgo,",
        footerQuote3: "Éxito",
        footerQuote4: "Garantizado.",
        footerText: "Desarrollado por Samuel Valentin Marin Hoyos &copy; 2025 | Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-button');
    const currentLang = localStorage.getItem('lang') || 'en'; // Default to English if not set

    // Set initial language based on local storage or default
    setLanguage(currentLang);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.replace('lang-', '');
            setLanguage(lang);
            localStorage.setItem('lang', lang); // Save selected language
        });
    });

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active class for language buttons
        langButtons.forEach(button => {
            button.classList.remove('active-lang');
            if (button.id === `lang-${lang}`) {
                button.classList.add('active-lang');
            }
        });

        // Update the html lang attribute
        document.documentElement.lang = lang;
    }

    // Existing preloader and scroll/navbar animations
    var preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.display = 'none';
        });
    }

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });

                // active sections for animation on scroll
                sec.classList.add('show-animate');
            }
            // If you want to use animation that repeats on scroll
            else {
                sec.classList.remove('show-animate');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // remove toggle icon and navbar when click navbar links (scroll)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

        // animation footer on scroll
        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    };

});