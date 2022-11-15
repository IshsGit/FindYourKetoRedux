export default class generateCard{
    constructor(){
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(){
        const card = document.createElement("div");
        card.className = "card";
        
        this.rightContainer.appendChild(card);
    }
}