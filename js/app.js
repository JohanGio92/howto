
const sections = document.getElementsByTagName("section");
const logElement = document.getElementById('log');
const evtPhasestr = ["NONE: ", "CAPTURING_PHASE: ", "AT_TARGET: ", "BUBBLING_PHASE: "];


function log(msg) {
    logElement.innerHTML += (`<p>${msg}</p>`);
}

function phase(evt) {
    console.log(evt.cancelBubble);
    evt.stopPropagation();
    console.log(evt.cancelBubble);
    log(evtPhasestr[evt.eventPhase] + this.firstChild.nodeValue.trim());
}

for (const section of sections) {
    section.addEventListener("click", phase, true);
}