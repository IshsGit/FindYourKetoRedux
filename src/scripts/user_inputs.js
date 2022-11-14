import foodData from "./food_data";
import * as recipes from "./objects.json";

export default class userInput {
  constructor() {
    // this.tag = tag;
    this.food = new foodData();
    this.leftContainer = document.getElementById("left-container");
  }

  setUpTags() {
    let index = 0;
    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const numberOfTags = recipes.length;
    const recipeTags = [];
    recipes.forEach((recipe, idx) => {
      index = idx;
      const uniqTags = {};
      // const tagChoices = document.createElement("div");
      // tagChoices.className = "user-tag-choice";
      recipe.tags.forEach((tag) => {
        console.log(!recipeTags.includes(tag));
        if (!recipeTags.includes(tag)) {
          this.leftContainer.appendChild(this.generateButton(tag,alpha[index]));
        }
        recipeTags.push(tag);
        console.log(recipeTags);
      });
      // this.leftContainer.appendChild(tagChoices);
    });
  }

  generateButton(tag,index) {
    const button = document.createElement("button");
    // button.className = `${index}` + '-';
    button.setAttribute("class",`${index}`.replace(/ /g,""));
    // document.getElementsByClassName("a").forEach((button)=>{
    //   button.
    // })
    button.classList.add("user-tag-button");
    button.innerText = tag;
    button.addEventListener("click", () => {
      this.tagSelectAction(tag);
    });
    return button;
  }

  tagSelectAction(tag) {
    this.reset();
    const tagClick = document.createElement("ul");
    tagClick.className = "foodAttributes";
    const foodInfo = document.createElement("li");
    foodInfo.innerHTML = this.food.showDescription(tag);

    tagClick.appendChild(foodInfo);

    // document.getElementsByClassName("button").innertext = "YOU CLICKED ME!";
  }

  reset(){
    while (this.food.rightContainer.firstChild) this.food.rightContainer.removeChild(this.food.rightContainer.firstChild);
  }
}