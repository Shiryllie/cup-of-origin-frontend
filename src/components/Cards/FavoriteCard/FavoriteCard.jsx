import './FavoriteCard.css'
import {useNavigate} from 'react-router-dom'
import placeholder from '../../../assets/images/coffees/lot61.png'
function FavoriteCard({coffee, onClick}) {
    const navigate = useNavigate();
    return (
            <div className="favorites-card" onClick={onClick}>
                {coffee.image && (
                    <img
                        src={placeholder}
                        alt={coffee.name}
                        className="favorites-coffee-image"
                    />
                )}
                <div className="favorites-card-content">
                    <h2 className="favorites-card-name-text">{coffee.name}</h2>
                    {coffee.roaster && <h3 className="favorites-card-roaster-text">{coffee.roaster.name}</h3>}
                </div>
            </div>
    );
}
export default FavoriteCard;

