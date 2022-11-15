// import objects from "./objects.json";

// fetch("./objects.json").then(function (response) {
//   console.log(response);
// });

// objects.forEach((el) => {
//   if (el.tags.includes("egg-free")) console.log(el.tags);
// });

import userInput from "./scripts/user_inputs";
import foodData from "./scripts/food_data";
import recipeDisplay from "./scripts/recipeDisplay";

const user = new userInput();
user.setUpTags();  
const card = new recipeDisplay();
card.generateCard();
// const food = new foodData();
// food.showDescription();

