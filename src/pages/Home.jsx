import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import { getRandomRecipes } from "../services/api";

function Home() {

    const [randomRecipes, setRandomRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
       const loadRandomRecipes = async() => {
            try {
                const randomRecipeList = await getRandomRecipes();
                setRandomRecipes(randomRecipeList);
            } catch (err) {
                console.log(err);
                setError("Failed to load random recipe list...");
            } finally {
                setLoading(false);
            }
       }
       loadRandomRecipes();
    }, []);

    return (
        <div className="home">

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="random-recipe-grid">
                    {randomRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id}/>
                    ))}
                </div>
            )}
            
        </div>
    );
}

export default Home;