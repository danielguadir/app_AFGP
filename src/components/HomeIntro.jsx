import { useNavigate } from "react-router-dom"; // src/components/HomeIntro.jsx
import "../App.css";
import "../index.css";
import ProductorSearchBar from "../search/ProductorSearchBar";
import ProductorSearchName from "../search/ProductorSearchName"; // Asegúrate de que este componente exista
import ProductorSearchCity from "../search/ProductorSearchCity"; // Asegúrate de que este componente exista

function HomeIntro() {
  const navigate = useNavigate();

  return (
    <div className="home-intro">
      <h1>App de productores</h1>
      <p>
        Esta aplicación utiliza tu propia API local: <br />
        <code>http://localhost:3000/productores</code> <br />
        para mostrar y consultar productores.
      </p>

      <button className="btn-productores" onClick={() => navigate("/productores")}>
        Ver todos los productores
      </button>
      <br />
       <br />
       <div className="search-container">
      <ProductorSearchBar />
      <ProductorSearchName />
      <ProductorSearchCity />
      </div>
    </div>
  );
}

export default HomeIntro;
