// src/components/WithLoader.jsx

function WithLoader({ loading, error, children }) {
  if (loading)
    return (
      <div className="spinner">
        <p>Cargando Usuario/s...</p>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  return children;
}

export default WithLoader;
