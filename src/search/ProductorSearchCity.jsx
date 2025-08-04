import { useNavigate } from "react-router-dom";
import { fetchCiudades } from "../features/producers/producersThunks"; // ← Import corregido
import { useState, useEffect } from "react";

function ProductorSearchCity() {
  const [productorCity, setProductorCity] = useState("");
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCities = async () => {
      try {
        const data = await fetchCiudades(); // ← Función correcta desde producersThunks
        setCities(data);
      } catch (err) {
        setError("Error al cargar las ciudades.");
      }
    };
    getCities();
  }, []);

  const handleSearch = () => {
    if (productorCity.trim() === "") {
      setError("Por favor, selecciona una ciudad.");
      return;
    }
    setError(null);
    navigate(`/productorbycity/${encodeURIComponent(productorCity)}`);
  };

  return (
    <div className="input-container2">
      <select
        className="user-input"
        value={productorCity}
        onChange={(e) => setProductorCity(e.target.value)}
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

export default ProductorSearchCity;
