import userInput from "./user_inputs";

export default class recipeDisplay{
    constructor(){
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(recipeNameArr){
        
        const cardName = document.createElement("div");
        cardName.className = "cardOne";
        cardName.innerText = recipeNameArr;
        this.rightContainer.appendChild(cardName);
        
    }
}