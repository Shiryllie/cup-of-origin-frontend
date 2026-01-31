import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import {useNavigate} from "react-router-dom";
import Coffees from "../../components/Coffees.jsx";
import FavoriteCard from "../../components/Cards/FavoriteCard/FavoriteCard.jsx";
import {useState, useEffect} from "react";
import axios from "axios";
import './FavoritesPage.css'

function FavoritesPage() {
    const [coffees, setCoffees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8080/coffees")
            .then((res) => setCoffees(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="page-wrapper">
            <Header
                title="Favorites"
                showIcon={true}
                goBack={() => navigate(-1)}
                variant="favorites"/>
            <div className="favorites-list">
            {coffees.length === 0 ? (<p>You have no favorite coffees yet</p>)
                : coffees.map(coffee => (
                    <FavoriteCard
                        key={coffee.id}
                        coffee={coffee}
                        onClick={() => navigate(`/favorites/${coffee.id}`)}
                    />
                ))}
            </div>
            <NavBar/>
        </div>
    )
}

export default FavoritesPage;