
class ModularDOM {

    constructor(element) {
        this.element = element.firstElementChild;
    }

    previous(){
        return this.element.previousElementSibling === null
            ? this.element.parentElement.lastElementChild
            : this.element.previousElementSibling
    }

    next(){
        return this.element.nextElementSibling === null
            ? this.element.parentElement.firstElementChild
            : this.element.nextElementSibling
    }

    nextChild(){
        this.element = this.next();
        return this.element;
    }

    previousChild(){
        this.element = this.previous();
        return this.element;
    }

    getElement(){
        return this.element;
    }

}

export default ModularDOM;