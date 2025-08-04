// src/search/ProductorSearchById.jsx

import "../App.css";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductorSearchById() {
  const [productorId, setProductorId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (productorId.trim() === "") {
      setError("Por favor, ingresa un ID de productor.");
      return;
    } else {
      setError(null);
      navigate(`/productores/${productorId}`);
    }
  };

  return (
    <div className="input-container1">
      <input
        className="user-input"
        type="number"
        placeholder="Ingrese un ID de productor"
        value={productorId}
        onChange={(e) => setProductorId(e.target.value)}
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

export default ProductorSearchById;
