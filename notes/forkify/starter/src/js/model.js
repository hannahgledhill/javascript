import { API_URL, API_KEY, RES_PER_PAGE } from './config.js';
import { async } from 'regenerator-runtime';
import { API_URL, API_KEY } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
};

const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        bookmarked: false,
        ...(recipe.key && { key: recipe.key}), // create the key property only if the recipe has a key - conditionally adds the property
    };
}

export const loadRecipe = async function(id) {
    try {
        const data = await AJAX(`${API_URL}recipes/${id}?key=${API_KEY}`);
        state.recipe = createRecipeObject(data);

        if (state.bookmarks.some(bookmark => bookmark.id === id)) state.recipe.bookmarked = true;
    }
    catch (err) {
        throw err;
    }
};

export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;

        const data = await AJAX(`${API_URL}recipes?search=${query}&key=${API_KEY}`);
        state.search.page = 1;
        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
                ...(recipe.key && { key: recipe.key}),
            }
        });
    }
    catch (err) {
        throw err;
    }
};

export const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
};

export const updateServings = function(newServings) {
    state.recipe.ingredients.forEach(ing => ing.quantity = ing.quantity * newServings / state.recipe.servings); // want to mutate the state so use foreach not map
    state.recipe.servings = newServings;
};

const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function(recipe) {
    // add bookmark to array
    state.bookmarks.push(recipe);

    // mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

    // persist bookmarks
    persistBookmarks();
};

export const deleteBookmark = function(id) {
    // delete recipe from bookmarks array
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);

    // mark current recipe as not bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;

    // persist bookmarks
    persistBookmarks();
};

export const uploadRecipe = async function(newRecipe){
    try {
        // format data
        const ingredients = Object.entries(newRecipe)
            .filter(entry => entry[0].startsWith('ingredient') && entry[1].trim() !== '')
            .map(ing => {
                const ingArr = ing[1].split(',').map(el => el.trim());
                if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
                
                const [quantity, unit, description] = ingArr;
                return {quantity: quantity ? +quantity : null, unit, description};
            });

        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients: ingredients
        };
        console.log(recipe);

        const data = await AJAX(`${API_URL}recipes?key=${API_KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    }
    catch (err) {
        throw err;
    }
};

const clearBookmarks = function() {
    localStorage.clear('bookmarks');
};

const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (!storage) return;

    state.bookmarks = JSON.parse(storage);
};
init();