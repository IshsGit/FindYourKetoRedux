import objects from "./objects.json";

export default class foodData {
  constructor() {
    this.rightContainer = document.getElementById("right-container");
  }

  showDescription() {
    objects.forEach((recipe, idx) => {
      const descriptionBlock = document.createElement("div");
      descriptionBlock.className = "description-block";
      const text = document.createElement("p");
      text.className = "description";
      text.classList.add(recipe.name);
      text.innerText = recipe.description;
      descriptionBlock.appendChild(text);
      this.rightContainer.appendChild(descriptionBlock);
    });
  }
}
