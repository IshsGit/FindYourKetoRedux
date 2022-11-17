import * as recipes from "./objects.json";
import userInput from "./userInputs";
import recipeDisplay from "./recipeDisplay";


export default class foodData {
  constructor() {
    this.main = document.getElementById("main");
    this.leftContainer = document.getElementById("left-container");
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
    if(!this.rightContainer.length && !recipeNames.length){

        while (this.leftContainer.firstChild) {
          this.leftContainer.removeChild(this.leftContainer.firstChild)};
          console.log(this.main);
          this.removeElementsByClass("tutorial");
        this.user = new userInput();
        
        this.user.setUpTags();
    }
    this.recipeDisplay.generateCard(recipeNames);
    
  }

  removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
  
 performActionTag(button, tagArr, tag){
  button.addEventListener("click", () => {
    tagArr.push(tag);
    this.tagSelectAction(tagArr);
    this.strikeIt(button);
  });
 }

 strikeIt(button) {
  
  button.style.setProperty('text-decoration', 'line-through');
}
 tagSelectAction(tagArr) {
  this.showName(tagArr);
}
  reset(){
    while (this.rightContainer.firstChild) {
      this.rightContainer.removeChild(this.rightContainer.firstChild)};
     
        
      
  }

  // generateButton(tag){
  
  //   const button = document.getElementsByClassName("coolTags");
  //   console.log(button);
  //   this.performActionTag(button, this.tagArr, tag);
  //   return button;
  // }

  // recipeTags(){
  //   const removeDupTags = [];
  //   const allTags = [];
  //   recipes.forEach((recipe)=>{
  //     recipe.tags.sort().forEach((tag)=>{
  //       if(!removeDupTags.includes(tag)){
  //         if(!tag.includes("relevant"))
  //           {allTags.push(tag); 
  //           this.generateButton(tag);
  //           }
  //       }
  //       removeDupTags.push(tag);
  //     });
  //   });

  // }
}


