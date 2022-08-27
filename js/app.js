
import StyleSheet from "./StyleSheet.js"

class LightBox {

    static INDEX = 0;

    static IMAGES = ["ardilla", "bee", "boy", "dog", "monkey", "sunset", "violet", "wheel"]

    constructor() {
        this.modal = document.querySelector(".modals")
        this.slides = document.querySelector(".slides")
        this.thumbnail = document.querySelector(".thumbnails")

        this.next = document.querySelector(".next");
        this.previous = document.querySelector(".previous");
        this.close = document.querySelector(".close");
    }

    setImages(){
        for (const element of [this.modal, this.slides, this.thumbnail]) {
            this.appendImages(element);
        }

        this.slides.firstElementChild.classList.add("slideActive");
        this.thumbnail.firstElementChild.classList.add("thumbnailActive");
    }

    appendImages(element){
        LightBox.IMAGES.forEach( image => {

            let imageElement = document.createElement("img");
            let className = element.className.slice(0, -1) + "Image";

            imageElement.src = `../img/${image}.jpg`;
            imageElement.alt = `${image}`;
            imageElement.classList.add(className)

            element.appendChild(imageElement);
        });
    }

    removeClass(elements, className){
        for (const element of elements) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            }
        }
    }

    showSlide(index){
        const slideimages = this.slides.children;
        const thumbnail = this.thumbnail.children;

        this.removeClass(slideimages, "slideActive");
        this.removeClass(thumbnail, "thumbnailActive");

        slideimages[index].classList.add("slideActive");
        thumbnail[index].classList.add("thumbnailActive");
        
    }

    nextSlide(){
        LightBox.INDEX = (LightBox.INDEX + 1) % LightBox.IMAGES.length
        this.showSlide(LightBox.INDEX);
    }

    previousSlide(){
        if(LightBox.INDEX === 0){
            LightBox.INDEX = LightBox.IMAGES.length;
        }
        LightBox.INDEX = (LightBox.INDEX - 1) % LightBox.IMAGES.length
        this.showSlide(LightBox.INDEX);
    }

    currentSlide(index){
        this.showSlide(index);
    }

    closeSlide(){
        const rule = new StyleSheet("app").getRule("slideShowGalleryContainer");
        rule.style.setProperty("display", "none");
    }

    openSlide(index){
        const rule = new StyleSheet("app").getRule("slideShowGalleryContainer");
        rule.style.setProperty("display", "block");
        this.showSlide(index);
    }

    execute(){
        this.next.addEventListener("click", () => this.nextSlide());
        this.previous.addEventListener("click", () => this.previousSlide());

        const thumbnail = this.thumbnail.children;
        for (let index = 0; index < thumbnail.length; index++) {
            thumbnail[index].onclick = () => this.currentSlide(index);
        }

        const modalImage = this.modal.children;
        for (let index = 0; index < modalImage.length; index++) {
            modalImage[index].onclick = () => this.openSlide(index);
        }

        this.close.addEventListener("click", () => this.closeSlide());
    }
}

const ligthBox = new LightBox();
ligthBox.setImages();
ligthBox.execute();

const styleSheetApp = new StyleSheet("app.css");
styleSheetApp
.insertRule(
    `.modalImage { 
        width: ${100/LightBox.IMAGES.length}%;
        display: block;
        cursor: pointer;
    }`
);

styleSheetApp
.insertRule(
    `.thumbnailImage { 
        width: ${100/LightBox.IMAGES.length}%;
        display: block;
        cursor: pointer;
        opacity: 0.7;
    }`
);