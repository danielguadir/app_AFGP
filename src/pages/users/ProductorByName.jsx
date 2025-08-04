 import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductorByName } from "../../features/producers/producersThunks";
import WithLoader from "../../components/WithLoader";

function ProductorByName() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { user, loading, error } = useSelector((state) => state.productores);

  useEffect(() => {
    if (!name || name.trim() === "") return;
    dispatch(fetchProductorByName(name));
  }, [name, dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div>
        <h2>Detalles del Productor: {user?.nombre}</h2>
        <p><strong>ID:</strong> {user?.id}</p>
        <p><strong>Finca:</strong> {user?.finca}</p>
        <p><strong>Ciudad:</strong> {user?.ciudad}</p>
        <p><strong>Cultivo:</strong> {user?.cultivo}</p>
      </div>
    </WithLoader>
  );
}

export default ProductorByName;

// Este componente ProductorByName.jsx sirve para mostrar
//  en pantalla la información detallada de un productor específico,
// según el nombre que se recibe desde la URL. Al cargar el componente,
//  extrae el nombre usando useParams, y luego ejecuta el thunk fetchUserByName(name)
// que obtiene los datos desde una API. Gracias a Redux, el estado user, loading y
// error se actualiza automáticamente. El componente también usa WithLoader para
// mostrar un mensaje de carga o error si es necesario. Está conectado al slice de
//  usuarios, que maneja cómo se guardan y actualizan estos datos en el estado global. //
