/* ==================== MOSTRAR/OCULTAR MENÚ MÓVIL ==================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Mostrar menú */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Ocultar menú */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/* Cerrar menú al hacer clic en un enlace */
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


/* ==================== CAMBIAR COLOR DEL HEADER AL HACER SCROLL ==================== */
function scrollHeader(){
    const header = document.querySelector('.header');
    // Cuando el scroll es mayor a 50 viewport height, añade la clase 'scrolled' al header
    if(this.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);