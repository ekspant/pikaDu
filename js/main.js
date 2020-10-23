//cоздаём переменную в которую положим кнопку меню
let menuToggle = document.querySelector ('#menu-toggle');
//создаём переменююв которую положим меню
let menu = document.querySelector('.sidebar');
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event){
    console.log('клик по кнопке меню');
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню когда кликнули по кнопке меню
    menu.classList.toggle('visible');
})