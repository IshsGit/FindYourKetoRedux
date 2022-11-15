import userInput from "./userInputs";

export default class recipeDisplay{
    constructor(){
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(recipeNameArr){
        console.log("in card");
        console.log(recipeNameArr);
        
        recipeNameArr.forEach((name,idx)=>{
            const cardName = document.createElement("div");
            cardName.className = "cardOne";
            cardName.innerText = name;
            this.rightContainer.appendChild(cardName);
        });
      

    }
}