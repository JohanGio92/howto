
//const urlPost = "https://jsonplaceholder.typicode.com/posts";
//const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
//let postId = 0;
//
//const ajaxPost = new XMLHttpRequest();
//ajaxPost.open("GET", urlPost);
//ajaxPost.addEventListener("load", () => {
//    const posts = JSON.parse(ajaxPost.responseText);
//    const bingo = posts.filter(post=>post.userId===1 && post.id===5);
//    console.log("Post:", bingo);
//    postId = bingo[0].id;
//
//    const ajaxComentarios = new XMLHttpRequest();
//    ajaxComentarios.open("GET", urlComentarios + "?postId=" + postId);
//    ajaxComentarios.addEventListener("load", () => {
//        const comentarios = JSON.parse(ajaxComentarios.responseText);
//        console.log("Comments: ", comentarios.slice(0,3));
//    })
//    ajaxComentarios.send();
//
//})
//ajaxPost.send();

class HTTP {

    static #POST_URLS = "https://jsonplaceholder.typicode.com/posts";
    static #COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";
    static #METHOD = "GET";

    constructor() {
        this.ajaxPost = new XMLHttpRequest();
        this.ajaxComment = new XMLHttpRequest();
        this.postId = 0;

        this.requestBingoHandler = this.requestBingoHandler.bind(this);
        this.requestCommentHandler = this.requestCommentHandler.bind(this);
    }

    execute(){
        this.ajaxPost.open(HTTP.#METHOD, HTTP.#POST_URLS);
        this.ajaxPost.addEventListener("load", this.requestBingoHandler);
        this.ajaxPost.send();
    }
    

    requestBingoHandler(){
        this.#setPostId();
        this.ajaxComment.open(HTTP.#METHOD, `${HTTP.#COMMENT_URL}?postId=${this.postId}`);
        this.ajaxComment.addEventListener("load", this.requestCommentHandler);
        this.ajaxComment.send();
    }

    #setPostId(){
        const posts = JSON.parse(this.ajaxPost.responseText);
        const bingo = posts.filter( post => post.userId === 1 && post.id === 5);
        console.log("Post: ",bingo);
        this.postId = bingo[0].id;
    }

    requestCommentHandler(){
        const comments = JSON.parse(this.ajaxComment.responseText).slice(0, 3);
        console.log("Comments: ", comments)
    }
}

new HTTP().execute();