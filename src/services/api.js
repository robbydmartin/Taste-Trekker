const api_key = import.meta.env.VITE_API_KEY;
const base_url = import.meta.env.VITE_API_URL;

export const getRandomRecipes = async () => {
    const response = await fetch(`${base_url}/recipes/random?apiKey=${api_key}&number=9`);
    const data = await response.json();
    return data.recipes;
};