import foodData from "./food_data";
import * as recipes from "../data/objects.json"

export default class userInput {
  constructor() {
    this.tagArr = [];
 
    this.header = document.getElementById("header");
    this.foodData = new foodData();
    this.leftContainer = document.getElementById("left-container");
    this.rightContainer = document.getElementById("right-container");
    this.mContainer = document.getElementById("modal");
    this.modal = document.getElementById("modal-container");
    this.showInstruction();
  }

  showInstruction(){
    const helpdiv = document.createElement("div");
    const button = document.createElement("button");
    button.className = "tutorial";
    button.innerText = "Tutorial";
    helpdiv.appendChild(button);
    this.header.appendChild(helpdiv);
    this.tutorialPopUp(button);
}

  tutorialPopUp(button){
    button.addEventListener("click", () => {
      this.modal.style.display = "block";
      const test = document.createElement("p");
      test.innerText = "Are you wondering what can you cook up in X amount of time but also be healthy, delicious, and has all the nutritional values you need";
      test.innerText += "\n" + "\n" + "Find Your Keto with the press of a click. Click on the tags which will pull up tiles containing recipes with those tags! For more details simply click the button for more details, and hit close if you want to see another one. If you want to start with new tags again just click reset tag.";  
      // const closeButton = document.createElement("button");
      // closeButton.className = "tutorialClose";
      // closeButton.innerText = "Close";
      this.mContainer.appendChild(test);
      // this.mContainer.appendChild(closeButton);
      // this.performCloseAction(closeButton);
      this.performCloseAction(this.modal);
    });
  }

  performCloseAction(button){
    button.addEventListener("click", () => {
      this.resetModal();
       this.modal.style.display = "none";
    });
}

  setUpTags() {
    const removeDupTags = [];
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // let tagHeader = document.createElement("div");

    recipes.forEach((recipe,idx)=>{
      recipe.tags.sort().forEach((tag)=>{
        let tagContainer = document.createElement("div");
    tagContainer.className = "tagContainer";
        if(!removeDupTags.includes(tag)){
          if(!tag.includes("relevant"))
          this.leftContainer.append(tagContainer);
          tagContainer.append(this.generateButton(tag,alpha[idx]));
          idx+=1;
            // this.leftContainer.appendChild(this.generateButton(tag));
            
        }
        removeDupTags.push(tag);
      });
    });
  }

  generateButton(tag,alpha){
   
    const button = document.createElement("button");

    button.className = "coolTags";
    button.classList.add(alpha);
    button.innerText = tag;
   
  
    this.foodData.performActionTag(button, this.tagArr, tag);
    return button;
  }

 reset(){
  while (this.foodData.rightContainer.firstChild) this.foodData.rightContainer.removeChild(this.foodData.rightContainer.firstChild);
  }

  resetModal(){
    while (this.mContainer.firstChild) this.mContainer.removeChild(this.mContainer.firstChild);
  }
}
