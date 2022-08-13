
import TabEvent from "./TabEvent.js";
class Tab {
    constructor() {
        this.headerTabs = this.getHeaderTabs();
        this.tabEvent = new TabEvent();
        this.tabEvent.display = this.tabEvent.display.bind(this.tabEvent);
    }

    getHeaderTabs(){
        return document.querySelectorAll(".tab_header_container li");
    }

    execute(){
        this.headerTabs.forEach(
            headerTab => headerTab.addEventListener("click", this.tabEvent.display));
    }
}

new Tab().execute();