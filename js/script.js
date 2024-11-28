// Seleção dos elementos do DOM
const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('.cart-items-container');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');

// Função para fechar os menus ao rolar a página
const closeMenusOnScroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Toggle do menu da navbar
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};
// Fechar menus ao rolar a página
window.onscroll = closeMenusOnScroll;


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.partners .carousel');
    const boxes = document.querySelectorAll('.partners .carousel .box');
    let currentIndex = 0;

    
});


let currentIndex = 0; // Índice da imagem atual

    // Função para mover o carrossel
    function moveCarousel(direction) {
        const carousel = document.querySelector('.carousel');
        const totalImages = carousel.children.length;

        // Atualiza o índice atual dependendo da direção
        currentIndex += direction;

        // Verifica se o índice está dentro dos limites
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Vai para o primeiro item
        } else if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Vai para o último item
        }

        // Move o carrossel para o índice atual
        const offset = -currentIndex * 100; // Deslocamento em % (100% por imagem)
        carousel.style.transform = `translateX(${offset}%)`;
    }