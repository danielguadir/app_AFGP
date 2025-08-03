// UsersTable.jsx
import React from "react";
import "../../App.css";
import "../../index.css";
import { useSelector } from "react-redux";

function UsersTable() {
  const { users } = useSelector((state) => state.users);

  return (
    <table className="User-table" border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Sitio Web</th>

          <th>ciudad</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
