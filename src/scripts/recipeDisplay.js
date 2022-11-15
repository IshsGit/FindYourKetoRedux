import userInput from "./userInputs";

export default class recipeDisplay{
    constructor(){
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(recipeNameArr){
        console.log("in card");
        console.log(recipeNameArr);
        const cardName = document.createElement("div");
        recipeNameArr.forEach((name,idx)=>{
        
            cardName.className = "cardOne";
            cardName.innerText = name;
           
        });
        this.rightContainer.appendChild(cardName);
    
    }
}