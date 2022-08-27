
class StyleSheet {
    constructor(name) {
        this.styleSheet = this.#getStyleSheet(name);
    }

    #getStyleSheet(name){
        let find = null;
        const pattern = new RegExp(name, "gi");;
        for (const stylesheet of document.styleSheets) {
            if(pattern.test(stylesheet.href)){
                find = stylesheet;
            }
        }
        return find;
    }

    insertRule(rule, index = 0){
        this.styleSheet.insertRule(rule, index);
    }

    deleteRule(name){
        const pattern = RegExp(name, "gi")
        for (let index = 0; index < this.getRules().length; index++) {
            if (pattern.test(this.getRules()[index].selectorText)) {
                this.styleSheet.deleteRule(index);
            }
        }
    }

    getRules(){
        return this.styleSheet.cssRules;
    }

    getRule(selector){
        let find = null;
        const pattern = new RegExp(selector, "gi");;
        for (const cssRule of this.getRules()) {
            if(pattern.test(cssRule.selectorText)){
                find = cssRule;
            }
        }
        return find;
    }

}


export default StyleSheet;