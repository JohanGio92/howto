
const open = document.querySelector(".open");
const close = document.querySelector(".closeBoton");

var width = close.offsetWidth;

open.addEventListener("click", () => ( document.querySelector(".sideNav").style.width = `${width}rem` ));
close.addEventListener("click", () => ( document.querySelector(".sideNav").style.width = "0px" ));


const openTab = document.querySelector(".navigation_display_content .open");
const closeBoton = document.querySelector(".navigation_display .closeBoton");
var navigationDisplay = document.querySelector(".navigation_display");

openTab.addEventListener("click", function() { 
    navigationDisplay.classList.add("active");
    navigationDisplay.style.opacity = "1";
});

closeBoton.addEventListener("click", function() { 
    navigationDisplay.classList.remove("active");
    navigationDisplay.style.opacity = "0";
});

