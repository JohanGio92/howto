
class TabEvent {

    static active = "tab_body-active";
    constructor() {
        this.bodyTabs = this.#getBodyTabs();
    }

    #getBodyTabs(){
        return document.querySelectorAll(".tab_body");
    }

    #removeClass(){
        for (const bodytab of this.bodyTabs) {
                console.log(bodytab.classList);
            if(bodytab.classList.contains(TabEvent.active)){
                bodytab.classList.remove(TabEvent.active);
            }
        }
    }


    #addClass(event){
        const textContent = new RegExp(event.target.textContent, "i");
        for (const bodyTab of this.bodyTabs) {
            if(textContent.test(bodyTab.textContent)){
                bodyTab.classList.add(TabEvent.active);
            }
        }
    }

    display(event){
        this.#removeClass();
        this.#addClass(event);
    }
}

export default TabEvent;