import foodData from "./food_data";
import * as recipes from "../data/objects.json"
//Create 2 span containers with flex
//Add some borders to see flexbox
//Generate elements as column
//Use width and flexwrap wrap to create rows

//Generate buttons for tags
//Iterate through objects first
//Iterate through tags
//For each tag generateButton()
//Append left span with buttons

//In generate button, createElement button
//Give it a class
//Use innertext to define buttons 
//Define an eventlistener with the event action as a fcn inside
//In the even action fcn, display attributes above on right section

//Create fcns for showing name, description, steps, preptime, cooktime and nutrients

//Onclick with more than one tag, store that tag in an array
//Pass the tag array, and loop through checking if recipe (in recipes)
//contains every 

export default class userInput {
  constructor() {
    this.tagArr = [];
    this.foodData = new foodData();
    this.leftContainer = document.getElementById("left-container");
    this.rightContainer = document.getElementById("right-container");
  }

  setUpTags() {

    console.log("in setup");
    const removeDupTags = [];
    recipes.forEach((recipe)=>{
      recipe.tags.forEach((tag)=>{
        if(!removeDupTags.includes(tag)){
       
          this.leftContainer.appendChild(this.generateButton(tag));
          
        }
        removeDupTags.push(tag);
      });
    });
  }

  

  generateButton(tag){
  
    
    const button = document.createElement("button");
    button.className = "coolTags";
    button.innerText = tag;
    this.foodData.performActionData(button, this.tagArr, tag);
    // button.addEventListener("click", () => {
    //   this.tagArr.push(tag);
      
   
    //   this.tagSelectAction();
      
    // });
    return button;
  }

//   tagSelectAction() {
 
//       this.foodData.showName(this.tagArr);
   
//  }


 reset(){
  while (this.foodData.rightContainer.firstChild) this.foodData.rightContainer.removeChild(this.foodData.rightContainer.firstChild);
}

}
