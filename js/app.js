
class Carrousel {
    static #MAX_CELL = 15;
    static #REVOLUTION = 360;
    static #RADIUS = 70.75;
    static #selected = 0;

    constructor() {
        this.carrousel = this.querySelector(".carrousel");
        this.previousButton = this.querySelector(".previous__button");
        this.nextButton = this.querySelector(".next__button");
        this.direction = {"left": -1, "right": 1};
        this.rotateHandler = this.rotateHandler.bind(this);
    }

    querySelector(element){
        return document.querySelector(element);
    }

    getTranslateZ(){
        return `translateZ(${-Carrousel.#RADIUS}rem)`
    }

    getRotationY(){
        return `rotateY(${this.getAngle()}deg)`
    }

    getAngle(){
        return Carrousel.#selected * (Carrousel.#REVOLUTION/Carrousel.#MAX_CELL);
    }

    turn(rotation){
        Carrousel.#selected = Carrousel.#selected + this.direction[rotation];
    }

    rotateHandler(rotation){
        this.turn(rotation);
        this.carrousel.style.transform = this.getTranslateZ() + " " + this.getRotationY();
    }

    execute(){
        this.previousButton.addEventListener("click", () => this.rotateHandler("left"));
        this.nextButton.addEventListener("click", () => this.rotateHandler("right"));
    }
}

new Carrousel().execute();