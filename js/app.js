
const open = document.querySelector(".open");
const close = document.querySelector(".closeBoton");

var width = close.offsetWidth;

open.addEventListener("click", () => ( document.querySelector(".sideNav").style.width = `${width}rem` ));
close.addEventListener("click", () => ( document.querySelector(".sideNav").style.width = "0px" ));


const openTab = document.querySelector(".navigation_display_content .open");
const closeBoton = document.querySelector(".navigation_display .closeBoton");
var navigationDisplay = document.querySelector(".navigation_display");

openTab.addEventListener("click", () => (navigationDisplay.classList.add("active")));
closeBoton.addEventListener("click", () => (navigationDisplay.classList.remove("active")));

