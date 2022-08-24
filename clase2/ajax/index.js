
// AJAX: Asynchronous Javascript and XML


class HTTP {

    static #METODO = "GET";
    static #URL = "https://jsonplaceholder.typicode.com/users"
    static #OK = 200;

    constructor() {
        this.ajax = new XMLHttpRequest();
        this.button = document.querySelector(".button");
        this.bind();
    }

    bind(){
        this.printDataHandler = this.printDataHandler.bind(this);
        this.executeHTTPHandler = this.executeHTTPHandler.bind(this);
        this.printErrorHandler = this.printErrorHandler.bind(this);
    }

    executeButton(){
        this.button.addEventListener("click", this.executeHTTPHandler);
    }

    executeHTTPHandler(){
        this.ajax.open(HTTP.#METODO, HTTP.#URL);
        this.ajax.addEventListener("load", this.printDataHandler);
        this.ajax.addEventListener("error", this.printErrorHandler);
        this.ajax.send();
    }

    printDataHandler(){
        const responseText = JSON.parse(this.ajax.responseText);
        const status = this.ajax.status;

        return status != HTTP.#OK
            ? this.errorHandler(status)
            : console.log(responseText);
    }

    printErrorHandler(type = "default"){
        console.error("Error: ", type);
    }
}

new HTTP().executeButton();