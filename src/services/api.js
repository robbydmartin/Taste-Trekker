const api_key = import.meta.env.VITE_API_KEY;
const base_url = import.meta.env.VITE_API_URL;

export const getRecipeById = async(recipeId) => {
    const response = await fetch(`${base_url}/recipes/${recipeId}/information?apiKey=${api_key}`);
    const data = await response.json();
    return data;
};

export const getRandomRecipes = async() => {
    const response = await fetch(`${base_url}/recipes/random?apiKey=${api_key}&number=5`);
    const data = await response.json();
    return data.recipes;
};

export const getBritishCuisine = async() => {
    const response = await fetch(`${base_url}/recipes/complexSearch?apiKey=${api_key}&cuisine=british&number=5`);
    const data = await response.json();
    return data.results;
};

export const getGreekCuisine = async() => {
    const response = await fetch(`${base_url}/recipes/complexSearch?apiKey=${api_key}&cuisine=greek&number=5`);
    const data = await response.json();
    return data.results;
};

export const getKoreanCuisine = async() => {
    const response = await fetch(`${base_url}/recipes/complexSearch?apiKey=${api_key}&cuisine=korean&number=5`);
    const data = await response.json()
    return data.results;
};

export const searchRecipes = async (searchQuery) => {
    const reponse = await fetch(`${base_url}/recipes/complexSearch?apiKey=${api_key}&query=${searchQuery}`);
    const data = await reponse.json();
    return data.results;
};
