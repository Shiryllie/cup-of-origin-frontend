import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import './pages/HomePage/HomePage.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import Coffees from "./components/Coffees.jsx";
import FavoritesPage from "./pages/Favorites/FavoritesPage.jsx";
import NearbyPage from "./pages/Nearby/NearbyPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import LogCoffeePage from "./pages/LogCoffee/LogCoffeePage.jsx";


function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/add-recipe" element={<LogCoffeePage/>}/>
                    {/*<Route path="/favorites/:id" element={<FavoritesPage/>}/>*/}
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/nearby" element={<NearbyPage/>}/>
                </Routes>
            </Router>
            {/*<Coffees/>*/}
        </>
    )
}

export default App
