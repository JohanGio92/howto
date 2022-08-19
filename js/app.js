
class TopNav {

    static display = {true: "none", false: "block"}
    static change = true;

    constructor() {
        this.icon = this.querySelector(".icon");
        this.cssRule = this.queryRule("toggle");
        this.mediaRules = this.queryMedia();
        this.mediaRule = this.queryMediaRule("toggle");
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    querySelector(element){
        return document.querySelector(element);
    }

    queryRule(selector){
        let find = null;
        for (const cssRule of this.cssRules(3)) {
            if(cssRule.selectorText === selector){
                find = cssRule;
            }
        }
        return find;
    }

    queryMedia(){
        const media = new RegExp("media", "gi");;
        let find = null;
        let ok = false;

        for (const cssRule of this.cssRules(3)) {
            if(media.test(cssRule.cssText) && !ok){
                find = cssRule;
                ok = true;
            }
        }

        return find;
    }

    queryMediaRule(selector){
        const pattern = new RegExp(selector, "gi");
        let found = null;
        let ok = false;

        for (const mediaRule of this.queryMedia().cssRules) {
            if(pattern.test(mediaRule.selectorText) && !ok){
            console.log("🚀 ~ file: app.js ~ line 49 ~ TopNav ~ queryMediaRule ~ mediaRule", mediaRule)
                found = mediaRule;
                ok = true;
            }
        }
        return found;
    }

    cssRules(index){
        return document.styleSheets[index].cssRules;
    }

    toggleDisplay(event){
        TopNav.change = !TopNav.change;
        const property = TopNav.display[TopNav.change];
        this.mediaRule.style.setProperty("display", property);
    }

    execute(){
        this.icon.addEventListener("click", this.toggleDisplay);
    }
}

new TopNav().execute();