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
