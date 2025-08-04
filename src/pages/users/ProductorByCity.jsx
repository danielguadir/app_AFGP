import { fetchProductorByCity } from "../../features/producers/producersThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import WithLoader from "../../components/WithLoader";

function ProductorByCity() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.productores);
  const { city } = useParams(); //  capturamos la ciudad desde la URL

  useEffect(() => {
    if (!city || city.trim() === "") return;
    dispatch(fetchProductorByCity(city));
  }, [city, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        {Array.isArray(users) ? (
          users.map((u) => (
            <div key={u.id}>
              <h2>Detalles del Productor: {u.nombre}</h2>
              <p>
                <strong>Ciudad:</strong> {u.ciudad}
              </p>
              <p>
                <strong>Cultivo:</strong> {u.cultivo}
              </p>
              <p>
                <strong>Finca:</strong> {u.finca}
              </p>
              <p>
                <strong>Website:</strong> {u.website}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>No se encontraron usuarios para esta ciudad.</p>
        )}
      </div>
    </WithLoader>
  );
}
export default ProductorByCity;
