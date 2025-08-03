/*
Este componente crea una barra de búsqueda por ID de usuario. El usuario escribe un número,
 y al hacer clic en el botón, si el campo no está vacío, redirige a la ruta /usuarios/:id, 
donde se mostrará la información de ese usuario. Si el campo está vacío, muestra un mensaje de error.
*/
import "../App.css";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSearchBar() {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (userId.trim() === "") {
      setError("Por favor, ingresa un ID de usuario.");
      return;
    } else {
      setError(null);
      navigate(`/usuarios/${userId}`);
    }
  };
  return (
    <div className="input-container1">
      <input
        className="user-input"
        type="number"
        placeholder="Ingrese un ID de usuario"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />

      <button
        onClick={handleSearch}
        aria-label="Buscar por ID"
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
export default UserSearchBar;
