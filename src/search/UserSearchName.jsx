import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";

function UserSearchName() 
{
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (userName.trim() === "") {
      setError("Por favor, ingresa un nombre de usuario.");
      return;
    }
    setError(null);
    // navigate(`/userbyname/${name}`);
    navigate(`/userbyname/${encodeURIComponent(userName)}`);
  };

  return (
    <div className="input-container2">
      <input
        className="user-input"
        type="text"
        placeholder="Ingrese el nombre de usuario"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      
      <button onClick={handleSearch} aria-label="Buscar por nombre" className="btn-lupa">
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

export default UserSearchName;
