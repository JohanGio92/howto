
class SearchMenu {

    static DISPLAY = { true: "block", false: "none" };

    constructor() {
        this.inputSearch = this.querySelector(".search");
        this.tabs = this.querySelectorAll(".searchMenu_tab li");
        this.panels = this.querySelector(".searchMenu_panels").children;

        this.searchHandler = this.searchHandler.bind(this);
        this.displayPanelHandler = this.displayPanelHandler.bind(this);
    }
    
    querySelector(selector){
        return document.querySelector(selector);
    }

    querySelectorAll(selector){
        return document.querySelectorAll(selector);
    }

    searchHandler(event){

        event.preventDefault();
        const filter = new RegExp(this.inputSearch.value, "ig");

        for (const tab of this.tabs) {
            let tabContent = tab.firstElementChild.textContent;
            const index = filter.test(tabContent);
            tab.style.display = SearchMenu.DISPLAY[index];
        }
    }

    removeClass(className){
        for (const panel of this.panels) {
            if (panel.classList.contains(className)) {
                panel.classList.remove(className);
            }
        }
    }

    appendClass(pattern, className){
        for (const panel of this.panels) {
            if(pattern.test(panel.textContent)){
                panel.classList.add(className);
            }
        }
    }

    displayPanelHandler(event){
        const content = event.target.firstElementChild.textContent;
        const pattern = new RegExp(`\\b${content}\\b`, "gi");

        this.removeClass("active");
        this.appendClass(pattern, "active");
    }

    execute(){
        this.inputSearch.addEventListener("keyup", this.searchHandler);
        for (const tab of this.tabs) {
            tab.addEventListener("click", this.displayPanelHandler);
        }
    }

}

const searchMenu = new SearchMenu();
searchMenu.execute();