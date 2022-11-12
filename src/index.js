// import Example from "./scripts/example";

// const main = document.getElementById("main");
// new Example(main);

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "76017d1a20msh2b5c9b3511d7646p1a23f7jsndfbb7ff653d5",
//     "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
//   },
// };

// fetch("https://low-carb-recipes.p.rapidapi.com/search", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

import objects from "./objects.json";

objects.forEach((el) => {
  if (el.tags.includes("egg-free")) console.log(el.tags);
});
