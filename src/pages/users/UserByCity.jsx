import { fetchUserByCity } from "../../features/users/usersThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import WithLoader from "../../components/WithLoader";

function UserByCity() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);
  const { city } = useParams(); // 👈 capturamos la ciudad desde la URL

  useEffect(() => {
    if (!city || city.trim() === "") return;
    dispatch(fetchUserByCity(city));
  }, [city, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        {Array.isArray(users) ? (
          users.map((u) => (
            <div key={u.id}>
              <h2>Detalles del Usuario: {u.name}</h2>
              <p>
                <strong>ID:</strong> {u.id}
              </p>
              <p>
                <strong>Email:</strong> {u.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {u.phone}
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
export default UserByCity;
