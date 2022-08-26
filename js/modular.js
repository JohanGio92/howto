

class Modular {

    static #INDEX = 0;

    constructor(list) {
        this.list = list;
    }

    length(){
        return this.list.length;
    }

    first(){
        return this.list[0];
    }

    next(){
        return ++Modular.#INDEX % this.length();
    }

    previous(){
        if(Modular.#INDEX == 0){
            Modular.#INDEX = this.length();
        }
        return --Modular.#INDEX % this.length();
    }

    nextList(){
        return this.list[this.next()];
    }

    previousList(){
        return this.list[this.previous()];
    }

    last(){
        return this.list[this.length()];
    }

    item(){
        return Modular.#INDEX % this.length();
    }

}

export default Modular;