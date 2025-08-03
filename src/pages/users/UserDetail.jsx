import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../../features/users/usersThunks";
import WithLoader from "../../components/WithLoader";

function UserDetail() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    if (!id || id.trim() === "") return;
    dispatch(fetchUserById(id));
  }, [id, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        <h2>Detalles del Usuario #{user?.id}</h2>
        <p>
          <strong>Nombre:</strong> {user?.name}
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

export default UserDetail;

//Este componente UserDetail.jsx sirve para mostrar en pantalla la información detallada de un usuario específico, según el ID que se recibe desde la URL. Al cargar el componente, extrae el id usando useParams, y luego ejecuta el thunk fetchUserById(id) que obtiene los datos desde una API. Gracias a Redux, el estado user, loading y error se actualiza automáticamente. El componente también usa WithLoader para mostrar un mensaje de carga o error si es necesario. Está conectado al slice de usuarios, que maneja cómo se guardan y actualizan estos datos en el estado global.//
