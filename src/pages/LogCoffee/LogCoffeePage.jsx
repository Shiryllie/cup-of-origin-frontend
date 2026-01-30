import NavBar from "../../components/NavBar/NavBar.jsx";
import Header from "../../components/Header/Header.jsx";
import './LogCoffeePage.css';
import {useNavigate} from "react-router-dom";
import SaveButton from "../../components/Buttons/SaveButton.jsx";
import {useState} from "react";

function LogCoffeePage() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState(null);
    return <>
        <Header
            title="Log Coffee"
            showIcon={true}
            goBack={() => navigate(-1)}
            variant="coffee-log"/>
        <h1>Log your coffee</h1>;
        <div className="button-container"><SaveButton className="save-button" onClick={setRecipes} recipes={recipes}/>
        </div>


    </>
}

export default LogCoffeePage;