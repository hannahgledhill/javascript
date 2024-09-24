import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;

        // render spinner
        recipeView.renderSpinner();

        // loading recipe
        await model.loadRecipe(id); // remember the loadRecipe is an async function so it will return a promise

        // rendering recipe
        recipeView.render(model.state.recipe); // if we wanted to create a new obj would do const recipeView = new RecipeView(params);
    }
    catch (err) {
        console.error(err);
    }
};
controlRecipes();

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
};
init();


