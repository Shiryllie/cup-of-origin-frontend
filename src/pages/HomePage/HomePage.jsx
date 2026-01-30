import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";

function HomePage() {
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
                <div className="text-container">
                    <h2>📔 My Journal</h2>
                    <h2 className="secondary-text">View All</h2>
                </div>
                {/*Journal block component*/}
            </div>
            </div>
                {/*<div className="navbar-container">*/}
                <NavBar/>
                {/*</div>*/}
        </main>
    );
}

export default HomePage;