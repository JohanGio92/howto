
class HoverTab {
    constructor() {
        this.tabs = this.querySelectorAll(".verticalTab_navigation ul > li");
        this.tabsContents = this.querySelectorAll(".verticalTab_content");
        this.displayHandler = this.displayHandler.bind(this);
    }
    
    querySelector(element){
        return document.querySelector(element);
    }

    querySelectorAll(element){
        return document.querySelectorAll(element);
    }

    removeClass(){
        const clasName = "verticalTab_content-active";
        for (const tabContent of this.tabsContents) {
            if(tabContent.classList.contains(clasName)){
                tabContent.classList.remove(clasName);
            }
        }
    }

    appendClass(textContent){
        const patternContent = new RegExp(textContent, "i");
        const clasName = "verticalTab_content-active";

        for (const tabContent of this.tabsContents) {
            if(patternContent.test(tabContent.innerHTML)){
                tabContent.classList.add(clasName);
            }
        }
    }

    displayHandler(event){
        const textContent = event.target.textContent;
        this.removeClass();
        this.appendClass(textContent);
    }

    execute(){
        for (const tab of this.tabs) {
            tab.addEventListener("mouseover", this.displayHandler);
        }
    }
}

new HoverTab().execute();