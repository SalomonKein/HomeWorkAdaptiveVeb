let menu = document.querySelector(
    ".navigation-menu");
let menuKlick = document.querySelector(
    ".navigation-menu");
let menu2 = document.querySelector(
    ".navigation-menuUp");
let menuDown = document.querySelector(
    ".navigation-menulist");

menuKlick.onclick = function() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu2.classList.remove('active');
        menuDown.classList.remove('active');
    } else {
        menu.classList.add('active');
        menu2.classList.add('active');
        menuDown.classList.add('active');
    }
}