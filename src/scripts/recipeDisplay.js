import userInput from "./userInputs";
import foodData from "./food_data";
import * as recipes from "../data/objects.json"

export default class recipeDisplay{
    constructor(){
        this.mContainer = document.getElementById("modal");
        this.modal = document.getElementById("modal-container");
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
        innerCard.className = "popup";
        innerCard.innerText = "click for more details..."
        cardName.appendChild(innerCard);
        this.performActionBox(innerCard, cardName);    
    }

    performActionBox(button, cardName){
        button.addEventListener("click", () => {
            const hasInfo = document.createElement("p");
            //popup
            // hasInfo.className = ""
            hasInfo.innerText = cardName.innerText;

            const close = document.createElement("button");
            this.modal.style.display = "block";


            this.mContainer.appendChild(hasInfo);
            this.mContainer.appendChild(close);
            this.modal.appendChild(modalContainer);
            // this.main.appendChild(hasInfo);
            
          });
          
    }

   
    

    
}