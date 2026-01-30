import { useEffect, useState } from "react";
import axios from "axios";

function Coffees() {
    const [coffees, setCoffees] = useState([]);
    const [error, setError] = useState(null);

    const fetchCoffees = async () => {
        try {
            const response = await axios.get("http://localhost:8080/coffees");
            setCoffees(response.data);
        } catch (e) {
            console.error("Error fetching coffees:", e);
            setError("Kon coffees niet ophalen");
        }
    };

    useEffect(() => {
        fetchCoffees();
    }, []);

    return (
        <div>
            <h2>Coffees</h2>

            <button onClick={fetchCoffees}>Refresh coffees</button>

            <ul>
                {coffees.map(coffee => (
                    <li key={coffee.id}>
                        <strong>{coffee.name}</strong><br />
                        {coffee.description}<br />
                        Roaster: {coffee.roaster.name}<br />
                        Origin: {coffee.origin.country}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Coffees;