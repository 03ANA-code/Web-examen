let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que selecciono una opción
function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

const carouselItems = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselItems.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselItems.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselItems.style.transform = `translateX(${offset}%)`;

}



// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Autocad");
        habilidades[1].classList.add("Keyshot");
        habilidades[2].classList.add("Rinocero 3D");
        habilidades[3].classList.add("Solid");
        habilidades[4].classList.add("Photoshop");

    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 