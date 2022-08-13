
class Accordion {
    constructor() {
        this.panels = this.getPanels();
    }

    getPanels() {
        return document.querySelectorAll(".panel");
    }

    handlerToggleAccordion(event){
        const panelTittle = event.target;
        const descriptionPanel = event.target.nextElementSibling;
        descriptionPanel.classList.toggle("panel_description-visibility");
        panelTittle.classList.toggle("panel_title-active");
    }

    execute(){
        for (const panel of this.panels) {
            panel.addEventListener("click", this.handlerToggleAccordion)
        }
    }
}

new Accordion().execute();