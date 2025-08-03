
import { useNavigate } from "react-router-dom";
import { fetchCities } from "../features/users/usersThunks"; // Asegúrate de que esta función exista
import { useState, useEffect } from "react";


function UserSearchCity() {
  const [userCity, setUserCity] = useState("");
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]); // Estado para almacenar las ciudades
  const navigate = useNavigate();

    useEffect(() => {
    const getCities = async () => {
      try {
        const data = await fetchCities(); // aqui uso  la función importada
        setCities(data);
      } catch (err) {
        setError("Error al cargar las ciudades.");
      }
    };
    getCities();
  }, []);

 

   //  Buscar ciudad
  const handleSearch = () => {
    if (userCity.trim() === "") {
      setError("Por favor, ingresa una ciudad correcta de usuario.");
      return;
    }
    setError(null);
    navigate(`/userbycity/${encodeURIComponent(userCity)}`);
  };

  //  Interfaz de búsqueda
  return (
    <div className="input-container2">
      <select
        className="user-input"
        value={userCity}
        onChange={(e) => setUserCity(e.target.value)}
      >
        <option value="">Seleccione una ciudad</option>

        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <button
        onClick={handleSearch}
        aria-label="Buscar por ciudad"
        className="btn-lupa"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-lupa"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default UserSearchCity;

 