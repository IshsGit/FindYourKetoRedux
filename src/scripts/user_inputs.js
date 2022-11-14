import * as recipes from "./objects.json";

export default class userInput {
  constructor() {
    this.leftContainer = document.getElementById("left-container");
  }

  setUpTags() {
    const numberOfTags = recipes.length;

    recipes.forEach((recipe, idx) => {
      const recipeTags = [];
      const uniqTags = {};
      const tagChoices = document.createElement("div");
      tagChoices.className = "user-tag-choice";
      recipe.tags.forEach((tag, idx) => {
        if (!recipeTags.includes(tag)) {
          tagChoices.appendChild(this.generateButton(tag));
        }
        recipeTags.push(tag);
      });
      this.leftContainer.appendChild(tagChoices);
    });
  }

  generateButton(tag) {
    const button = document.createElement("button");
    button.className = tag;
    button.classList.add("user-tag-button");
    button.innerText = tag;
    button.addEventListener("click", () => {
      this.tagSelectAction(tag);
    });
    return button;
  }

  tagSelectAction(tag) {}
}
