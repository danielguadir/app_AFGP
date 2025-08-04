// UsersTable.jsx
import React from "react";
import "../../App.css";
import "../../index.css";
import { useSelector } from "react-redux";

function ProductorTable() {
  const { users } = useSelector((state) => state.productores);

 return (
    <table className="User-table" border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Finca</th>
          <th>Ciudad</th>
          <th>Cultivo</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(users) && users.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.nombre}</td>
            <td>{prod.finca}</td>
            <td>{prod.ciudad}</td>
            <td>{prod.cultivo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductorTable;
