import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to={"/"}>Taste Trekker</Link>
            <Link to={"/favorites"}>Favorites</Link>
        </div>
    );
};

export default NavBar