const API_KEY = "";
const BASE_URL = "https://api.spoonacular.com";

export const getRandomRecipes = async () => {
    const response = await fetch(`${BASE_URL}/recipes/random?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};
