// src/pages/users/ProductoresPage.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../features/producers/producersThunks";
import UsersTable from "./ProductorTable";

function ProductoresPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Productores</h2>
      <UsersTable />
    </div>
  );
}

export default ProductoresPage;
