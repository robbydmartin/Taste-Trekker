import { Link } from "react-router-dom";
import "../css/RecipeCard.css"

function RecipeCard({ recipe }) {

    return (
        <div className="recipe-card">
            <div className="recipe-image">
                <img className="recipe-image" src={recipe.image} alt={recipe.title}></img>
            </div>
            <div className="recipe-title">
                <Link to={`/recipes/${recipe.id}`}><h3>{recipe.title}</h3></Link>
                {recipe.id}
            </div>
        </div>
    );
}

export default RecipeCard