import userInput from "./userInputs";
import foodData from "./food_data";
import * as recipes from "../data/objects.json"

export default class recipeDisplay{
    constructor(){
        this.main = document.getElementById("main");
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(recipeNameArr){
        // console.log("in card");
        // console.log(recipeNameArr);
        let cardName = "";
        recipeNameArr.forEach((name)=>{
            cardName = document.createElement("button");
            cardName.className = "cardOne";
            cardName.innerText = name;
            this.buttonInnerCard(cardName);
            this.rightContainer.appendChild(cardName);
        });
        
       
    }

    buttonInnerCard(cardName){
        const innerCard = document.createElement("button");
        innerCard.innerText = "click for more details..."
        cardName.appendChild(innerCard);
        this.performActionBox(innerCard, cardName);    
    }

    performActionBox(button, cardName){
        button.addEventListener("click", () => {
            const hasInfo = document.createElement("p");
            //popup
            hasInfo.innerText = cardName.innerText;
            this.main.appendChild(hasInfo);
          });
    }
    

    
}