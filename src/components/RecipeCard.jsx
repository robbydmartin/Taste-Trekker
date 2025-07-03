function RecipeCard({ recipe }) {

    return (
        <div className="recipe-card">
            <div className="recipe-title">
                <h1>{recipe.title}</h1>
            </div>
            <div className="recipe-image">
                <img src={recipe.image} alt={recipe.title}></img>
            </div>
        </div>
    );
}

export default RecipeCard