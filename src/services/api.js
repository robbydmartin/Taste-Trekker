const API_KEY = "9b10636956e54a84a60ad910f07397b3";
const BASE_URL = "https://api.spoonacular.com";

export const getRandomRecipes = async () => {
    const response = await fetch(`${BASE_URL}/recipes/random?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};