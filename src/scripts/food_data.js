import objects from "./objects.json";
import userInput from "./user_inputs";

export default class foodData {
  constructor() {
    this.rightContainer = document.getElementById("right-container");
  }

  showDescription(tag) {
    objects.forEach((recipe, idx) => {
      if(recipe.tags.includes(tag)){
      const descriptionBlock = document.createElement("div");
      descriptionBlock.className = "description-block";
      const text = document.createElement("p");
      text.className = recipe.name;
      // text.classList.add(recipe.name);
      text.innerText = recipe.description;
      descriptionBlock.appendChild(text);
      this.rightContainer.appendChild(descriptionBlock);
      }
    });
  }

  showCalories(tag){
    objects.forEach((recipe, idx) => {
      if(recipe.tags.includes(tag)){
      const descriptionBlock = document.createElement("div");
      descriptionBlock.className = "description-block";
      const text = document.createElement("p");
      text.className = recipe.name;
      // text.classList.add(recipe.name);
      text.innerText = recipe.description;
      descriptionBlock.appendChild(text);
      this.rightContainer.appendChild(descriptionBlock);
      }
    });
  }
}


