
// DOM dan elementni, class va tag nomi orqali chariqib olish
var elButton = document.querySelector(".theme-button");
var elBody = document.querySelector("body");

// Elementga hodisa qo'shish, click bo'lganda fon rangini o'zgartirish
elButton.addEventListener("click", function(){
  elBody.classList.toggle("theme-dark");
})