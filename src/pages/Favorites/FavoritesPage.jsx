import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import {useNavigate} from "react-router-dom";

function FavoritesPage() {
    const navigate = useNavigate();
    return (
        <>
            <Header
                title="Favorites"
                showIcon={true}
                goBack={() => navigate(-1)}
                variant="favorites"/>
            <NavBar/>
        </>
    )
}

export default FavoritesPage;