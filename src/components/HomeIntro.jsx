import { useNavigate } from "react-router-dom"; // src/components/HomeIntro.jsx
import "../App.css";
import "../index.css";
import UserSearchBar from "../search/UserSearchBar";
import UserSearchName from "../search/UserSearchName"; // Asegúrate de que este componente exista
import UserSearchCity from "../search/UserSearchCity"; // Asegúrate de que este componente exista

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

      <button onClick={() => navigate("/productores")}>
        Ver todos los productores
      </button>
      <br />
       <br />
       <div className="search-container">
      <UserSearchBar />
      <UserSearchName />
      <UserSearchCity />
      </div>
    </div>
  );
}

export default HomeIntro;
