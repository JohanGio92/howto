
class Fetch {

    static #OK = 200;

    constructor(url, metodo = "GET") {
        this.url = url;
        this.metodo = metodo;

        this.promise = new Promise( (resolve, reject ) => {
            this.ajax = new XMLHttpRequest();
            this.ajax.open(metodo, url);
            this.ajax.addEventListener("load", () => {
                const responseText = this.ajax.responseText;
                const status = this.ajax.status;
                return status != Fetch.#OK
                    ? reject(status)
                    : resolve(responseText);
            })
            this.ajax.addEventListener("error", (event) => {
                reject(event);
            })
            this.ajax.send();
        });
    }

    pipe(callBack, promise){
        promise.then(callBack);
        return this
    }

    pipe(callBack){
        this.promise.then(callBack);
        return this;
    }

    catch(callBack){
        this.promise.catch(callBack);
    }

    execute(...callBacks){
        for (const callBack of callBacks) {
            this.promise.then(callBack);
        }
    }
}


const fetch = new Fetch("https://jsonplaceholder.typicode.com/users");

//fetch.execute( reponse => JSON.parse(reponse) ,  text => { console.log(text) } );


console.log(Promise.resolve(1));

async function foo() {
    return 1;
}

foo().then(value => console.log(value))