import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/usersThunks.js";
import UsersTable from "./UsersTable.jsx"; // ✅ correcto

import WithLoader from "../../components/WithLoader.jsx";

function UsersList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

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

export default UsersList;
