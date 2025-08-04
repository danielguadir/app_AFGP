import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductorById } from "../../features/producers/producersThunks";

import WithLoader from "../../components/WithLoader";

function ProductorDetail() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.productores);
  const { id } = useParams();

  useEffect(() => {
    if (!id || id.trim() === "") return;
    dispatch(fetchProductorById(id));
  }, [id, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        <h2>Detalles del Productor #{user?.id}</h2>
        <p><strong>Nombre:</strong> {user?.nombre}</p>
        <p><strong>Ciudad:</strong> {user?.ciudad}</p>
        <p><strong>Finca:</strong> {user?.finca}</p>
        <p><strong>Cultivo:</strong> {user?.cultivo}</p>
      </div>
    </WithLoader>
  );
}

export default ProductorDetail;

//Este componente ProductorDetail.jsx sirve para mostrar en pantalla la información detallada de un productor específico, según el ID que se recibe desde la URL. Al cargar el componente, extrae el id usando useParams, y luego ejecuta el thunk fetchUserById(id) que obtiene los datos desde una API. Gracias a Redux, el estado user, loading y error se actualiza automáticamente. El componente también usa WithLoader para mostrar un mensaje de carga o error si es necesario. Está conectado al slice de usuarios, que maneja cómo se guardan y actualizan estos datos en el estado global.//
