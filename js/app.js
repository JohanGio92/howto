
const open = document.querySelector(".open");
const close = document.querySelector(".closeBoton");

var width = close.offsetWidth;

open.addEventListener("click", function() { 
    document.querySelector(".sideNav").style.width = `${width}rem`;
    document.getElementById("main").style.marginLeft = `${width}rem`
})

close.addEventListener("click", function() { 
    document.querySelector(".sideNav").style.width = "0rem";
    document.getElementById("main").style.marginLeft = "0rem";
});


const openTab = document.querySelector(".navigation_display_content .open");
const closeBoton = document.querySelector(".navigation_display .closeBoton");
var navigationDisplay = document.querySelector(".navigation_display");

openTab.addEventListener("click", function() { 
    navigationDisplay.classList.add("active");
    navigationDisplay.style.display = "flex";
});

closeBoton.addEventListener("click", function() { 
    navigationDisplay.classList.remove("active");
    navigationDisplay.style.display = "none";
});

