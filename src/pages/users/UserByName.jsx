import { fetchUserByName } from "../../features/users/usersThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import WithLoader from "../../components/WithLoader";

function UserByName() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.users);
  const { name } = useParams(); // 👈 capturamos el nombre desde la URL

  useEffect(() => {
    if (!name || name.trim() === "") return;
    dispatch(fetchUserByName(name));
  }, [name, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        <h2>Detalles del Usuario: {user?.name}</h2>
        <p>
          <strong>ID:</strong> {user?.id}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {user?.phone}
        </p>
        <p>
          <strong>Website:</strong> {user?.website}
        </p>
      </div>
    </WithLoader>
  );
}

export default UserByName;
// Este componente UserDetailByName.jsx sirve para mostrar
//  en pantalla la información detallada de un usuario específico,
// según el nombre que se recibe desde la URL. Al cargar el componente,
//  extrae el nombre usando useParams, y luego ejecuta el thunk fetchUserByName(name)
// que obtiene los datos desde una API. Gracias a Redux, el estado user, loading y
// error se actualiza automáticamente. El componente también usa WithLoader para
// mostrar un mensaje de carga o error si es necesario. Está conectado al slice de
//  usuarios, que maneja cómo se guardan y actualizan estos datos en el estado global. //
