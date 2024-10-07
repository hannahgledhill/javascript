import { RES_PER_PAGE } from './config.js';
import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

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

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}recipes/${id}`);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            bookmarked: false,
        };

        if (state.bookmarks.some(bookmark => bookmark.id === id)) state.recipe.bookmarked = true;
    }
    catch (err) {
        throw err;
    }
};

export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;

        const data = await getJSON(`${API_URL}recipes?search=${query}`);
        state.search.page = 1;
        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
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

export const addBookmark = function(recipe) {
    // add bookmark to array
    state.bookmarks.push(recipe);

    // mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = function(id) {
    // delete recipe from bookmarks array
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);

    // mark current recipe as not bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
};