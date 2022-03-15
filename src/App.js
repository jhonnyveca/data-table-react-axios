import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
const App = () => {
  /* 1 - Configurar los hooks */
  const [users, setUsers] = useState([]);
  /* 2 - Funcion para mostrar los datos con axios */
  const URL = "https://gorest.co.in/public/v2/users";
  const showData = async () => {
    await axios.get(URL).then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    showData();
  });
  /*   console.log(users); */
  /* 3 - Configuramos las columns para DataTable */
  const columns = [
    { name: "ID", selector: (row) => row.id },
    { name: "Nombre", selector: (row) => row.name },
    { name: "Correo", selector: (row) => row.email },
    { name: "Estado", selector: (row) => row.status },
  ];
  //Personalizar tema
  /*   createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  ); */

  /* 4 - Mostramos la data en DataTable */
  return (
    <div className="App">
      <h1>React DataTables</h1>
      <DataTable
        columns={columns}
        data={users}
        /* theme="solarized" */ pagination
      />
    </div>
  );
};

export default App;
