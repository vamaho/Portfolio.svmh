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