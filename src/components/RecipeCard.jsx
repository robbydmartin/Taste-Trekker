import "../css/RecipeCard.css"

function RecipeCard({ recipe }) {

    return (
        <div className="recipe-card">
            <div className="recipe-title">
                <h3>{recipe.title}</h3>
            </div>
            <div className="recipe-image">
                <img className="recipe-image" src={recipe.image} alt={recipe.title}></img>
            </div>
        </div>
    );
}

export default RecipeCard