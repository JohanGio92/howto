
import Modular from "./modular.js";
import ModularDOM from "./modularDOM.js";
class SlideShow {

    constructor() {
        this.buttons = this.querySelector(".slideButton");
        this.dots = this.querySelector(".slideDot");
        this.slides = this.querySelectorAll(".slide");

        this.slideIterator = new Modular(this.slides);
        this.dotIterator = new ModularDOM(this.dots);

        this.showSlideHanlder = this.showSlideHanlder.bind(this);
    }

    querySelector(selector){
        return document.querySelector(selector);
    }
    
    querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    }

    removeClasses(){
        this.removeClassName(this.slides, "imgActive");
        this.removeClassName(this.dots.children, "dotActive");
    }

    removeClassName(elements, className){
        for (const element of elements) {
            if(element.classList.contains(className)){
                element.classList.remove(className)
            }
        }
    }

    execute(){
        this.clickListeners(this.buttons.children);
        this.clickListeners(this.dots.children);
    }

    clickListeners(iterators){
        for (const iterator of iterators) {
            iterator.addEventListener("click", this.showSlideHanlder);
        }
    }

    showSlideHanlder(event){
        this.removeClasses();
        this.slideIterator.nextList().classList.add("imgActive");
        this.dotIterator.nextChild().classList.add("dotActive");
    }
}

const slideShow = new SlideShow();
slideShow.execute();
