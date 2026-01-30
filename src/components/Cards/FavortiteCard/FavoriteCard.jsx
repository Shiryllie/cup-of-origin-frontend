function FavoriteCard(coffee, onClick) {
    return (
        <div className="favorites-card-container">
            <div className="favorites-header">
                <h2>♥️ My Favorites</h2>
                <h2 className="secondary-text">View</h2>
            </div>
            <div className="favorites-card" onClick={onClick}>
                {coffee.image && (
                    <img
                        src={coffee.image}
                        alt={coffee.name}
                        className="coffee-image"
                    />
                )}
                <div className="coffee-card-content">
                    <h2 className="coffee-card-name-text">{coffee.name}</h2>
                    {/* Brander en origin */}
                    {coffee.roaster && <h3 className="journal-card-roaster-text">{recipe.roaster.name}</h3>}
                    {coffee.origin && (
                        <p>Origin: {coffee.origin.region}, {coffee.origin.country}</p>
                    )}


                    {/* Recipe details */}
                    <p className="journal-card-notes">{coffee.notes}</p>
                </div>
            </div>
        </div>
    );
}
export default FavoriteCard;

