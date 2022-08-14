

class Dado {
    constructor() {
        this.dado = this.querySelector(".dado");
        this.select = this.querySelector("select");
        this.doOptionHandler = this.doOptionHandler.bind(this);
    }

    querySelector(element){
        return document.querySelector(element);
    }

    doOptionHandler(){
        if(this.select.value === "Choose a Function"){
            return ;
        } else {
            this.dado.style.transform = `translateY(60px) rotate3d(1, 1, 1, 30deg) ${this.select.value}`;
            setTimeout(() => {
                this.dado.style.transform = 'translateY(60px) rotate3d(1, 1, 1, 30deg)';
                }, 2000)
        }
    }

    execute(){
        this.select.addEventListener("change", this.doOptionHandler);
    }
}

new Dado().execute();