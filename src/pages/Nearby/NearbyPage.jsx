import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import {useNavigate} from "react-router-dom";
import NearbyMap from "../../components/NearbyMap/NearbyMap.jsx";
import './NearbyPage.css'


function NearbyPage() {
    const navigate = useNavigate();
    return <main className="nearby-page">
        <Header
            title="Specialty Cofee Map"
            showIcon={true}
            goBack={() => navigate(-1)}
            variant="nearby"
        />
        <NearbyMap/>
    </main>;
}

export default NearbyPage;