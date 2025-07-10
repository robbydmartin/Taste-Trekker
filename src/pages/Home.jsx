import RecipeCard from "../components/RecipeCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { getRandomRecipes, getBritishCuisine, getGreekCuisine, getKoreanCuisine } from "../services/api";

function Home() {

    const [randomRecipes, setRandomRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [britishRecipes, setBritishRecipes] = useState([]);
    const [errorBritishCuisine, setErrorBritishCuisine] = useState(null);

    const [greekRecipes, setGreekRecipes] = useState([]);
    const [errorGreekCuisine, setErrorGreekCuisine] = useState(null);

    const [koreanRecipes, setKoreanRecipes] = useState([]);
    const [errorKoreanCuisine, setErrorKoreanCuisine] = useState(null);
    
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

    useEffect(() => {
        const loadBritishRecipes = async() => {
            try {
                const britishRecipesList = await getBritishCuisine();
                setBritishRecipes(britishRecipesList);
            } catch (err) {
                console.log(err);
                setErrorBritishCuisine("Failed to load British cuisine...");
            } finally {
                setLoading(false);
            }
        }
        loadBritishRecipes();
    }, []);

    useEffect(() => {
        const loadGreekRecipes = async() => {
            try {
                const greekRecipesList = await getGreekCuisine();
                setGreekRecipes(greekRecipesList);
            } catch (err) {
                console.log(err);
                setErrorGreekCuisine("Failed to load Greek cuisine...");
            } finally {
                setLoading(false);
            }
        }
        loadGreekRecipes();
    }, []);

    useEffect(() => {
        const loadKoreanRecipes = async() => {
            try {
                const koreanRecipesList = await getKoreanCuisine();
                setKoreanRecipes(koreanRecipesList);
            } catch (err) {
                console.log(err);
                setErrorKoreanCuisine("Failed to load Korean cuisine...");
            } finally {
                setLoading(false);
            }
        }
        loadKoreanRecipes();
    }, [])

    return (
        <div className="home">
            <br></br>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <h4>Random Recipes to try:</h4>
                <div className="recipe-grid">
                    {randomRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id}/>
                    ))}
                </div>
                </>
            )}

        
            {errorBritishCuisine && <div className="error-message">{errorBritishCuisine}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <h4>British cuisine:</h4>
                <div className="recipe-grid">
                    {britishRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))}
                </div>
                </>
            )}

            <br></br>
            {errorGreekCuisine && <div className="error-message">{errorGreekCuisine}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <h4>Greek cuisine:</h4>
                <div className="recipe-grid">
                    {greekRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))}
                </div>
                </>
            )}

            {errorKoreanCuisine && <div className="error-message">{errorKoreanCuisine}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <h4>Korean cuisine:</h4>
                <div className="recipe-grid">
                    {koreanRecipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))}
                </div>
                </>
            )}
            
        </div>
    );
}

export default Home;