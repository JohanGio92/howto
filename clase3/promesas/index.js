
//const getUsuarios = new Promise((resolve, reject)=>{
//  let ajax = new XMLHttpRequest();
//  ajax.open("GET","https://jsonplaceholder.typicode.com/users");
//  ajax.addEventListener("load",()=>{
//    resolve(ajax.responseText);
//  });
//  ajax.addEventListener("error",(e)=>{
//    reject(e);
//  });
//  ajax.send();
//});
//
//getUsuarios
//.then((data)=>{
//  console.log("Promesa",data);
//})
//.catch((data)=>{
//  console.error("Error",data);
//});

class HTTP {

    static #URL = "https://jsonplaceholder.typicode.com/users";
    static #METHOD = "GET"
    static #OK = 200;

    constructor() {
        this.getUsers = new Promise(this.setPromise.bind(this));
    }

    setPromise(resolve, reject){
        this.bind(resolve, reject);
        this.ajax = new XMLHttpRequest();
        this.ajax.open(HTTP.#METHOD, HTTP.#URL);
        this.ajax.addEventListener("load", this.resolveHandler);
        this.ajax.addEventListener("error", this.rejectHandler);
        this.ajax.send();
    }

    bind(resolve, reject){
        this.resolveHandler = this.resolveHandler.bind(this, resolve, reject);
        this.rejectHandler = this.rejectHandler.bind(this, reject);
    }

    resolveHandler(resolve, reject){
        let status = this.ajax.status;
        let responseText = this.ajax.responseText;

        return status != HTTP.#OK
            ? reject(status)
            : resolve(JSON.parse(responseText))
    }

    rejectHandler(reject, error){
        reject(error);
    }

    execute(){
        this.then(
                (data) => { console.log("Promesa: ", data); },
                (users) => { setTimeout( () => console.log("nombre: ",users[0].name), 3000 ) }
                )
            .catch();
    }

    then(...callBacks){
        for (const callBack of callBacks) {
            this.getUsers.then(callBack)
        }
        return this;
    }

    catch(){
        this.getUsers.catch( (data) => { console.error("Error: ", data); });
        return this;
    }
}

new HTTP().execute();