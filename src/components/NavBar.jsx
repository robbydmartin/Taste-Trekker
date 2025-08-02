import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";

function NavBar() {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = async(e) => {

        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search-results/${searchQuery}`);
            setSearchQuery("");
        }
        
    }

    return (
        <div className="nav-bar">
            <Link to={"/"}>Taste Trekker</Link>
            <Link to={"/favorites"}>Favorites</Link>
            <div className="search">
                <form onSubmit={handleSearch} className="search-box">
                    <input type="text" 
                        placeholder="Search for recipes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}>
                    </input>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
};

export default NavBar