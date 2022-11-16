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
        let name = cardName.innerText;
        cardName.appendChild(innerCard);
        this.performActionBox(innerCard, cardName, name);    
    }

    performActionBox(button, cardName, name){
        button.addEventListener("click", () => {
            const hasInfo = document.createElement("p");
            recipes.forEach((recipe)=>{
                
                if(recipe.name.includes(name)){
                    const nameText = document.createElement("p");
                    nameText.innerText = "Recipe Name: "+ name;
                    this.mContainer.appendChild(nameText);

                    const description = document.createElement("p");
                    description.innerText = "\n" + "Description: " + recipe.description;
                    this.mContainer.appendChild(description);

                    const prepTime = document.createElement("p");
                    prepTime.innerText = "\n" + "Preptime: " + recipe.prepareTime + " minutes";
                    this.mContainer.appendChild(prepTime);

                    const cookTime = document.createElement("p");
                    cookTime.innerText = "\n" + "Cooktime: " + recipe.cookTime + " minutes";
                    this.mContainer.appendChild(cookTime);
                        
                    const ingredients = document.createElement("p");
                    ingredients.innerText += "\n" + "Ingredients: ";
                    recipe.ingredients.forEach((ingredient)=>{
                        const ingName = document.createElement("ul");
                        ingName.innerText = ingredient.name;
                        ingredients.appendChild(ingName);
            
                        this.mContainer.appendChild(ingredients);
                    });

                    const stepPTag = document.createElement("p");
                    stepPTag.innerText = "\n" + "Steps: ";
                    const stepText = document.createElement("p");
                    stepText.innerText = recipe.steps;
                    stepPTag.appendChild(stepText);
                    this.mContainer.appendChild(stepPTag);
                }
            })

            // hasInfo.innerText = cardName.innerText;
            const close = document.createElement("button");
            this.performCloseAction(close);
            this.modal.style.display = "block";

            this.mContainer.appendChild(hasInfo);
            this.mContainer.appendChild(close);
            this.modal.appendChild(modalContainer);
            // this.main.appendChild(hasInfo);
            
          });

          
          
    }

    performCloseAction(button){
        button.addEventListener("click", () => {
           this.modal.style.display = "none";
        });
    }
    

    
}