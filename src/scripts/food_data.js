import * as recipes from "./objects.json";
import userInput from "./user_inputs";
import recipeDisplay from "./recipeDisplay";


export default class foodData {
  constructor() {
    
    this.recipeDisplay = new recipeDisplay();
    this.rightContainer = document.getElementById("right-container");
  }

  showName(tag){
    const recipeNames = [];
    recipes.forEach((recipe)=>{
      if(recipe.tags.includes(tag)){
        if(recipeNames.length < 4){
          recipeNames.push(recipe.name);
        }
      }
    });
    this.recipeDisplay.generateCard(recipeNames);
    
  }

  // showDescription(tag) {
  //   objects.forEach((recipe, idx) => {
  //     if(recipe.tags.includes(tag)){
  //     const descriptionBlock = document.createElement("div");
  //     descriptionBlock.className = "description-block";
  //     const text = document.createElement("p");
  //     text.className = recipe.name;
  //     // text.classList.add(recipe.name);
  //     text.innerText = recipe.description;
  //     descriptionBlock.appendChild(text);
  //     this.rightContainer.appendChild(descriptionBlock);
  //     }
  //   });
  // }

  // showCalories(tag){
  //   objects.forEach((recipe, idx) => {
  //     if(recipe.tags.includes(tag)){
  //     const descriptionBlock = document.createElement("div");
  //     descriptionBlock.className = "description-block";
  //     const text = document.createElement("p");
  //     text.className = recipe.name;
  //     // text.classList.add(recipe.name);
  //     text.innerText = recipe.description;
  //     descriptionBlock.appendChild(text);
  //     this.rightContainer.appendChild(descriptionBlock);
  //     }
  //   });
  // }
}


