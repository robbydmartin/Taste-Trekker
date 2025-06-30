function RecipeCard({recipe}) {
    return (
        <div>
            <h3>{recipe.title}</h3>
            <div>
                <img src="${recipe.image}" alt={recipe.title}></img>
            </div>
        </div>
    );
};

export default RecipeCard