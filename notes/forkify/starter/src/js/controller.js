import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
    module.hot.accept();  
}

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
        recipeView.renderError();
    }
};
controlRecipes();

const controlSearchResults = async function() {
    try {
        resultsView.renderSpinner();
        
        // get search query
        const query = searchView.getQuery();
        if (!query) return;

        // load search results
        await model.loadSearchResults(query);

        // render results
        resultsView.render(model.state.search.results);
    }
    catch (err) {
        console.error(err);
    }
};

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();


