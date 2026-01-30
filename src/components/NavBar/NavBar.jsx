import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon.jsx";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import AddButton from "../Buttons/AddButton.jsx";
import MapIcon from "../../assets/icons/MapIcon.jsx";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/nearby">
                        <MapIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/add-recipe">
                        <AddButton/>
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <HeartIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <HeartIcon /> {/* of een ProfileIcon */}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;