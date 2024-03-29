
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
                const chartContainer = document.createElement("div");
                chartContainer.className = "chartContainer";
                cardName.appendChild(chartContainer);
                canvasElement.className = "mychart";
                canvasElement.style.position = "absolute";
                    
                canvasElement.style.display = "flex";
                let heavyColor = "rgba(255, 159, 64, 0.5)"
                let borderColor = "rgba(255, 159, 64, 1)";
                if(recipe.nutrients.caloriesKCal > 500){
                    heavyColor =  "rgba(241, 90, 34, 1)";
                    borderColor = "rgba(255,221,238, 1)";
                } else if(recipe.nutrients.caloriesKCal < 500 && recipe.nutrients.caloriesKCal > 300){
                    heavyColor = "rgba(249, 180, 45, 0.5)"
                    borderColor = "rgba(255, 159, 64, 1)";
                } else{
                    heavyColor = "rgba(253, 227, 167, 0.5)"
                    borderColor = "rgba(221,255,221, 1)";
                }
                var config = {
                  type: "bar",
                  data:{
                        labels: ["Calories"],
                        datasets: [
                            { 
                                label: "Calories:" , 
                                data: [recipe.nutrients.caloriesKCal, 1000],
                                backgroundColor: [
                                    heavyColor
                                ],
                             
                               
                                HoverBackgroundColor: "#b01700",
                      
                                borderColor: [
                                    borderColor
                                ],
                                borderWidth: 1,
                                datalabels:{
                                    anchor:'end',
                                    align:'top',
                                }
                            }],
                      },
                      plugins: [ChartDataLabels],
                      options: {
                        scales: {
                            y:{
                                beginAtZero: true
                            }
                        }
                      }
                };

              
                cardName.appendChild(canvasElement);
                // chartContainer.append(canvasElement);
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
            recipes.forEach((recipe,idx)=>{
                
                if(recipe.name.includes(name)){
                    const nameText = document.createElement("div");
                    // nameText.className = "nameText"
                    let recipeName = document.createElement("p");
                    recipeName.className="recipeName";
                    recipeName.innerText= "Recipe Name: "+ name;
                    recipeName.style.fontWeight='bold'
                    recipeName.style.fontSize='large';
                    nameText.appendChild(recipeName);
                    
                    this.mContainer.appendChild(nameText);

                    const description = document.createElement("div");
                    let descHeader = document.createElement("p");
                    descHeader.innerText = "\n" + "Description: " + "\n";
                    descHeader.style.fontWeight='bold';
                    this.mContainer.append(descHeader);
                    description.innerText = "\n"+recipe.description;
                    this.mContainer.appendChild(description);

                    const prepTime = document.createElement("div");
                    prepTime.innerText = "\n" + "Preptime: " + recipe.prepareTime + " minutes";
                    this.mContainer.appendChild(prepTime);

                    const cookTime = document.createElement("div");
                    cookTime.innerText = "\n" + "Cooktime: " + recipe.cookTime + " minutes";
                    this.mContainer.appendChild(cookTime);
                        
                    const ingredients = document.createElement("div");
                    const ingText = document.createElement("p");
                    ingText.className='ingText';
                    ingText.innerText= "\n" + "Ingredients: ";
                    ingText.style.marginBottom='10px';
                    ingText.style.fontWeight='bold';
                    ingredients.appendChild(ingText);

                    // ingredients.innerText += "\n" + "Ingredients: ";
                    recipe.ingredients.forEach((ingredient,idx)=>{
                      
                        const ingName = document.createElement("ul");
                        ingName.innerText = ingredient.name;
                        
                        ingredients.appendChild(ingName);
            
                        this.mContainer.appendChild(ingredients);
                    });

                    const stepPTag = document.createElement("div");
                    stepPTag.className='stepsSpace'
                   
                    const stepPtag= document.createElement("p");
                    stepPtag.innerText = "\n" + "Steps: ";
                    stepPtag.style.marginBottom='10px';
                    stepPtag.style.fontWeight='bold';
                    const stepText = document.createElement("div");
               
                    stepText.innerText = recipe.steps;
                    stepPTag.appendChild(stepPtag);
                    stepPTag.appendChild(stepText);
               
                    this.mContainer.appendChild(stepPTag);

                    const nutritionalData = document.createElement("div");
                    let nutData = document.createElement("p");
                    nutData.innerText = "\n" + "Nutritional Data: ";
                    nutData.style.fontWeight='bold';
                    // nutData.style.fontSize='large';
                    // nutritionalData.innerText += "\n" + "Nutritional Data: " ;
                    nutritionalData.appendChild(nutData);
                    let info = Object.keys(recipe.nutrients);
                    info.forEach((nutrient,idx)=>{
                       
                        const nutrientName = document.createElement("ul");
                        if(idx===0){
                            nutrientName.style.marginTop='10px'
                        }
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