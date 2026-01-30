import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import JournalCard from "../../components/Cards/JournalCard/JournalCard.jsx";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const lastCoffee = {
        id: 1,
        name: "Ethiopia Yirgacheffe",
        notes: "Fruity & light",
        image: "src/assets/images/photo-coffee.jpg",
        roaster: { id: 1, name: "Blue Roasters" },
        origin: { id: 1, country: "Ethiopia", region: "Yirgacheffe" },
    };
    return (
        <main className="home-page">
            <Header
            title="Hi username,"
            subtitle="What would you like to explore today?"
            variant="home"
            showIcon={false}
            >
            <input type="search" placeholder="Search" className="searchbar" />
                </Header>
            <div className="content-block">
            <div className="nearby-block">
                <div className="text-container">
                    <h2>📍Nearby</h2>
                    <h2 className="secondary-text">View on map</h2>
                </div>
                {/*Nearby block component*/}
            </div>
            <div className="journal-block">
                    <JournalCard recipe={lastCoffee} onClick={()=> navigate("/add-recipe")} />
            </div>
            </div>
                {/*<div className="navbar-container">*/}
                <NavBar/>
                {/*</div>*/}
        </main>
    );
}

export default HomePage;