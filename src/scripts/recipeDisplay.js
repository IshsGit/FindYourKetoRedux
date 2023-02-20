
import * as recipes from "../data/objects.json"

export default class recipeDisplay{
    constructor(){
        this.mContainer = document.getElementById("modal");
        this.modal = document.getElementById("modal-container");
        this.main = document.getElementById("main");
        this.rightContainer = document.getElementById("right-container");
        this.attribute = "";
        this.leftContainer = document.getElementById("left-container");
        this.container = document.getElementsByClassName("container");
    }

    generateCard(recipeNameArr){
        let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
       
        let cardName = "";
        recipeNameArr.forEach((name,idx)=>{
            cardName = document.createElement("button");

            cardName.className = "cardOne";
    
            cardName.classList.add(alpha[idx]);
            let myCard = document.createElement("div");
            myCard.className = "cardNameContainer";
            cardName.append(myCard);
            myCard.append(name);
            // cardName.innerText = name;
            
            this.performActionBox(cardName, name)
            this.attribute = cardName.className;
            this.buttonInnerCard(cardName);
            this.rightContainer.appendChild(cardName);

            recipes.forEach((recipe)=>{
                if(recipe.name === name){
                var canvasElement = document.createElement("canvas");
             
                canvasElement.className = "mychart";
                canvasElement.style.position = "absolute";
                    
                canvasElement.style.display = "flex";
                let heavyColor = "rgba(255, 159, 64, 0.5)"
                let borderColor = "rgba(255, 159, 64, 1)";
                if(recipe.nutrients.caloriesKCal > 500){
                    heavyColor =  "rgba(255,221,238, 0.5)";
                    borderColor = "rgba(255,221,238, 1)";
                } else if(recipe.nutrients.caloriesKCal < 500 && recipe.nutrients.caloriesKCal > 300){
                    heavyColor = "rgba(255, 159, 64, 0.5)"
                    borderColor = "rgba(255, 159, 64, 1)";
                } else{
                    heavyColor = "rgba(221,255,221, 0.5)"
                    borderColor = "rgba(221,255,221, 1)";
                }
                var config = {
                  type: "bar",
                  data:{
                        labels: ["Calories"],
                        datasets: [
                            { 
                                label: "Calories:" + `${recipe.nutrients.caloriesKCal}`, 
                                data: [recipe.nutrients.caloriesKCal, 700],
                                backgroundColor: [
                                    heavyColor
                                ],
                                borderColor: [
                                    borderColor
                                ],
                                borderWidth: 1
                            }],
                      },
                };
                let myChart = document.createElement("div");
                // myChart.className = "myChartContainer";
                // myChart.append(canvasElement);
                // cardName.appendChild(myChart);
                
              
                cardName.appendChild(canvasElement);
                // myCard.append(canvasElement);
                var chart = new Chart(canvasElement, config);
            }
            });
              
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

    performActionBox(button, name){
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

                    const nutritionalData = document.createElement("p");
                    nutritionalData.innerText += "\n" + "Nutritional Data: ";
                    let info = Object.keys(recipe.nutrients);
                    info.forEach((nutrient,idx)=>{
                        const nutrientName = document.createElement("ul");
                      
                        nutrientName.innerText = `${nutrient}` + ": " + `${Object.values(recipe.nutrients)[idx]}`;
                        nutritionalData.appendChild(nutrientName);
                        this.mContainer.appendChild(nutritionalData);
                    });


                }
            })
            
            this.modal.style.display = "block";
            const close = document.createElement("button");
            close.className = "closeBoxPopUp";
            this.mContainer.appendChild(hasInfo);
            this.performCloseAction(this.modal);
          
          });
    }

    performCloseAction(button){
        button.addEventListener("click", () => {
           this.resetModal();
           this.modal.style.display = "none";
        });
    }
    
    resetModal(){
        while (this.mContainer.firstChild) this.mContainer.removeChild(this.mContainer.firstChild);
      }
}