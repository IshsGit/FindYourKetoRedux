import * as recipes from "./objects.json";
import userInput from "./userInputs";
import recipeDisplay from "./recipeDisplay";


export default class foodData {
  constructor() {

    this.recipeDisplay = new recipeDisplay();
    this.rightContainer = document.getElementById("right-container");
  }

  checker(arr,target){
  
    return target.every(v => arr.includes(v));
  }
  
  showName(tagArr){
    
    const recipeNames = [];

    recipes.forEach((recipe)=>{
    
      if(this.checker(recipe.tags, tagArr)){
          recipeNames.push(recipe.name);
      } else {
        this.reset();
      }
    });
    this.recipeDisplay.generateCard(recipeNames);
  }

  
 performActionTag(button, tagArr, tag){
  button.addEventListener("click", () => {
    tagArr.push(tag);
    this.tagSelectAction(tagArr);
  });
 }


 tagSelectAction(tagArr) {
  this.showName(tagArr);
}


  reset(){
    while (this.rightContainer.firstChild) this.rightContainer.removeChild(this.rightContainer.firstChild);
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


