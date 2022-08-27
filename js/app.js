
class Modal {
    constructor() {
        this.closed = document.querySelector(".close");
        this.image = document.querySelector(".little");
        this.modal = document.querySelector(".modal");
    }

    close(){
        this.modal.classList.remove("display")
    }

    open(){
        this.modal.classList.add("display");
    }
    
    execute(){
        this.closed.addEventListener("click", () => this.close());
        this.image.addEventListener("click", () => this.open());
    }

}

new Modal().execute();