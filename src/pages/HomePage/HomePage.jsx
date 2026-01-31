import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import FavoriteCard from "../../components/Cards/FavoriteCard/FavoriteCard.jsx";
import JournalCard from "../../components/Cards/JournalCard/JournalCard.jsx";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const lastCoffee = {
        id: 1,
        name: "Ethiopia Yirgacheffe",
        notes: "Fruity & light",
        image: "src/assets/images/photo-coffee.jpg",
        roaster: {id: 1, name: "Blue Roasters"},
        origin: {id: 1, country: "Ethiopia", region: "Yirgacheffe"},
    };
    return (
        <main className="home-page">
            <Header
                title="Hi username,"
                subtitle="What would you like to explore today?"
                variant="home"
                showIcon={false}
            >
                <input type="search" placeholder="Search" className="searchbar"/>
            </Header>
            <div className="content-block">
                <div className="favorites-header">
                <h2>♥️ My Favorites</h2>
                <h2 className="secondary-text" onClick={() => navigate("/favorites")}>View</h2>
                </div>
                <div className="favorite-block">
                    <FavoriteCard coffee={lastCoffee} onClick={() => navigate("/favorites")}/>
                </div>
                <div className="journal-header">
                <h2>📔 My Journal</h2>
                <h2 className="secondary-text">View all</h2>
                </div>
                <div className="journal-block">
                    <JournalCard recipe={lastCoffee} onClick={() => navigate("/add-recipe")}/>
                </div>
            </div>
            {/*<div className="navbar-container">*/}
            <NavBar/>
            {/*</div>*/}
        </main>
    );
}

export default HomePage;