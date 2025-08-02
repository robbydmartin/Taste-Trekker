import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/api";

const RecipeDetails = () => {
    
    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRecipeInfo = async() => {
            try {
                const recipeDetail = await getRecipeById(recipeId);
                setRecipe(recipeDetail);
            } catch (err) {
                console.log(err);
                setError("Failed to load recipe information...");
            } finally {
                setLoading(false);
            }
        }
        if (recipeId) {
            loadRecipeInfo();
        }
        
    }, [recipeId]);

    return (
        <div className="recipe-details">
        
        {error && <div className="error-message">{error}</div>}
        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div>
                <h1>{recipe?.title}</h1>
                <img src={recipe.image} alt={recipe.title}></img>
                <h3>Summary:</h3>
                    <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                <h3>Ingredients:</h3>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                <h3>Instructions:</h3>
                <ol>
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                    ))}
                </ol>

            </div>
        )}
        
        </div>
    )
};

export default RecipeDetails;