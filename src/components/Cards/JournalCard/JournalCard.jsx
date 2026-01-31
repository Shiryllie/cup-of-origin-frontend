import './JournalCard.css'

function JournalCard({recipe, onClick}) {
    return (
            <div className="journal-card" onClick={onClick}>
                {recipe.image && (
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="journal-card-image"
                    />
                )}
                <div className="journal-card-content">
                <h2 className="journal-card-name-text">{recipe.name}</h2>

                {/* Brander en origin */}
                {recipe.roaster && <h3 className="journal-card-roaster-text">{recipe.roaster.name}</h3>}
                {recipe.origin && (
                    <p>Origin: {recipe.origin.region}, {recipe.origin.country}</p>
                )}

                {/* Recipe details */}
                <p className="journal-card-notes">{recipe.notes}</p>
                </div>
            </div>
    );
}

export default JournalCard;