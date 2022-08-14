
class Cube {
    constructor() {
        this.cube = this.querySelector(".cube");
        this.radioGroup = this.querySelector(".radio-group");
        this.changeSideHandler = this.changeSideHandler.bind(this);
        this.changeSideHandler();
        this.currentClass = "";
    }

    querySelector(element){
        return document.querySelector(element);
    }

    changeSideHandler(){
        const radioChecked = this.radioGroup.querySelector(":checked");
        const showClass = `show-${radioChecked.value}`;

        if(this.currentClass) {
            this.cube.classList.remove(this.currentClass);
        }

        this.cube.classList.add(showClass);
        this.currentClass = showClass;
    }

    execute(){
        this.radioGroup.addEventListener("click", this.changeSideHandler);
    }
}

new Cube().execute();