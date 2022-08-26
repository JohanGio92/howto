
//let slideIndex = 1;
//showSlides(slideIndex);
//
//// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  let i;
//  let slides = document.getElementsByClassName("mySlides");
//  let dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//}

class SlideShow {

    static #INDEX = 1;

    constructor() {
        this.dots = document.querySelectorAll(".dot");
        this.next = document.querySelector(".next");
        this.previous = document.querySelector(".prev");
        this.slides = document.querySelectorAll(".mySlides");
    }

    plusSlides(index){
        SlideShow.#INDEX += index
        this.showSlides(SlideShow.#INDEX);
    }

    currentSlide(index){
        SlideShow.#INDEX = index
        this.showSlides(SlideShow.#INDEX);
    }

    showSlides(index){
        if (index > this.slides.length) {
            SlideShow.#INDEX = 1
        }

        if(index < 1) {
            SlideShow.#INDEX = this.slides.length;
        }

        this.slides.forEach( (slide) =>
            slide.style.display = "none" 
        );

        this.dots.forEach( (dot) => 
            dot.className = dot.className.replace(" active", "")
        );

        this.slides[SlideShow.#INDEX - 1].style.display = "block";
        this.dots[SlideShow.#INDEX - 1].className += " active";
    }


    clickListener(){
        this.showSlides(SlideShow.#INDEX);
        this.next.addEventListener("click", () => this.plusSlides(1) );
        this.previous.addEventListener("click", () => this.plusSlides(-1) );

        this.dots.forEach( (dot, index) =>
            dot.addEventListener("click", () => this.currentSlide(index + 1))
        );
    }
    
}

new SlideShow().clickListener();