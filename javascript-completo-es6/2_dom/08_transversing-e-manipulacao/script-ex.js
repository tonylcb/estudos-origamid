// Duplique o menu e adicione ele em copy

const copy = document.querySelector(".copy");
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

// Selecioneo DD referente ao primeiro DT

const proximoDd = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
