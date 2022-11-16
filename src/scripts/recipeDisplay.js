import userInput from "./userInputs";
import foodData from "./food_data";

export default class recipeDisplay{
    constructor(){
        this.main = document.getElementById("main");
        this.rightContainer = document.getElementById("right-container");
    }

    generateCard(recipeNameArr){
        // console.log("in card");
        // console.log(recipeNameArr);
        recipeNameArr.forEach((name,idx)=>{
            const cardName = document.createElement("button");
            cardName.className = "cardOne";
            cardName.innerText = name;
            this.buttonInnerCard(cardName);
            this.rightContainer.appendChild(cardName);
        });
        this.performActionBox(cardName);
    }

    buttonInnerCard(cardName){
        const innerCard = document.createElement("button");
        innerCard.innerText = "click for more details..."
        cardName.appendChild(innerCard);
        this.performActionBox(innerCard);    
    }
    performActionBox(button){
        button.addEventListener("click", () => {
            const popUp = document.getElementById("main");
            const hasInfo = document.createElement("p");
            hasInfo.innerText = "test";
            this.main.appendChild(hasInfo);
          });
    }
    

    
}