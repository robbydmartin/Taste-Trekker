import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";

const SearchResults = () => {

    const { searchQuery } = useParams();

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadSearchResults = async() => {
            try {
                const searchDetail = await searchRecipes(searchQuery);
                setSearchResults(searchDetail);

            } catch (err) {
                console.log(err);
                setError("Failed to load search results...");
            } finally {
                setLoading(false);
            }
        }
        loadSearchResults();
    }, [searchQuery]);

    return (
        <div className="search-results">
            <br></br>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                <h4> Search results for "{searchQuery}"</h4>
                <div className="recipe-grid">
                    {searchResults.length == 0 ? (
                        <h3>No results found</h3>
                    ) : (
                        searchResults.map((recipe) => (
                            <RecipeCard recipe={recipe} key={recipe.id} />
                        ))
                    )}
                </div>
                </>
            )}
        </div>
    )
};

export default SearchResults;