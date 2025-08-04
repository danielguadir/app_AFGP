import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/producers/producersThunks.js";
import UsersTable from "./ProductorTable.jsx"; // ✅ correcto

import WithLoader from "../../components/WithLoader.jsx";

function ProductorList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.productores);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <WithLoader loading={loading} error={error}>
      <div className="users-list">
        <h2>Usuarios registrados</h2>
        <UsersTable users={users} />
      </div>
    </WithLoader>
  );
}

export default ProductorList;
