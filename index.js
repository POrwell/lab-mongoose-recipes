const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made

    // ITERATION 2 - CREATE SINGLE RECIPE
    /*const recipe1 = {
      title: "Chicken Pie",
      level: "Easy Peasy",
      ingredients: ["chicken", "pie"],
      cuisine: "English",
      dishType: "main_course"
    }
    const newRecipe = Recipe.create(recipe1);
    console.log(recipe1.title);*/

    // ITERATION 3 - CREATE AN ARRAY OF RECIPES (own array created)
/*const recipes = [
{title: "Sushi",
level: "Amateur Chef",
ingredients: ["raw fish", "rice"],
cuisine: "Japanese",
dishType: "snack"},

{title: "Spaghetti Bolognese",
level: "UltraPro Chef",
ingredients: ["pasta", "Bolognese"],
cuisine: "Italian",
dishType: "main_course"},

{title: "Omelette",
level: "Easy Peasy",
ingredients: ["eggs", "cheese"],
cuisine: "French",
dishType: "breakfast"}
]

const newRecipes = Recipe.insertMany(recipes);
console.log(recipes[0].title, recipes[1].title, recipes[2].title); */

// ITERATION 3 - CREATE AN ARRAY OF RECIPES (lab array)
/*const newRecipes = Recipe.insertMany(data);
console.log(data[0].title, data[1].title, data[2].title, data[3].title, data[4].title);
*/
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  }); 
