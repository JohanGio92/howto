
class SlideShow {

    constructor() {
        this.buttons = this.querySelector(".slideButton");
        this.dots = this.querySelector(".slideDot");
        this.slides = this.querySelectorAll(".slide");

        this.cursor = this.dots.firstElementChild;
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
        this.addListeners(this.buttons.children);
        this.addListeners(this.dots.children);
    }

    addListeners(iterators){
        for (const iterator of iterators) {
            iterator.addEventListener("click", showSlideHanlder);
        }
    }

    showSlideHanlder(event){
        this.removeClasses();
    }

    nexts(cursor){
        if (cursor.nextElementSibling === null) {
            cursor = cursor.parentElement.firstElementChild;
        } else {
            cursor = cursor.nextElementSibling;
        }
    }

    printCursor(){
        console.log(this.cursor)
    }

    previous(element){
        return element.previousElementSibling === null
            ? element.parentElement.lastElementChild
            : element.previousElementSibling
    }

    next(element){
        return element.nextElementSibling === null
            ? element.parentElement.firstElementChild
            : element.nextElementSibling
    }
}

const slideShow = new SlideShow();
slideShow.printCursor();