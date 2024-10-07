import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//     module.hot.accept();  
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;

        // render spinner
        recipeView.renderSpinner();

        // update results view to mark selected search result
        resultsView.update(model.getSearchResultsPage());

        // loading recipe
        await model.loadRecipe(id); // remember the loadRecipe is an async function so it will return a promise

        // rendering recipe
        recipeView.render(model.state.recipe); // if we wanted to create a new obj would do const recipeView = new RecipeView(params);
    
        // update bookmarks view
        bookmarksView.update(model.state.bookmarks);
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
        resultsView.render(model.getSearchResultsPage());

        // render pagination
        paginationView.render(model.state.search);

    }
    catch (err) {
        console.error(err);
    }
};

const controlPagination = function(targetPage){
    // render results
    resultsView.render(model.getSearchResultsPage(targetPage));

    // render pagination
    paginationView.render(model.state.search);
};

const controlServings = function(newServings){
    // update recipe servings (in state)
    model.updateServings(newServings);

    // update the recipe view
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function() {
    // add or remove bookmark
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id); 

    // update recipe view
    recipeView.update(model.state.recipe);

    // render bookmarks
    bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function() {
    bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function(newRecipe) {
    try {
        // show loading spinner
        addRecipeView.renderSpinner();

        // upload new recipe data
        await model.uploadRecipe(newRecipe);
        console.log(model.state.recipe);

        // render recipe
        recipeView.render(model.state.recipe);

        // success message
        addRecipeView.renderMessage();

        // render bookmark view
        bookmarksView.render(model.state.bookmarks); // render not update because we are adding a new one

        // change id in URL
        window.history.pushState(null, '', `#${model.state.recipe.id}`);
        
        // close form window
        setTimeout(function(){
            addRecipeView.toggleWindow()
        }, MODAL_CLOSE_SEC * 1000);
    }
    catch (err) {
        console.error(err);
        addRecipeView.renderError(err.message);
    }
};

const init = function() {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();


