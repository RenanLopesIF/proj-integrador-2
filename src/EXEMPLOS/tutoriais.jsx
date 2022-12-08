import React from "react";
import { Link } from "react-router-dom";

function Tutoriais() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={containerStyle}>
      <Link to={"/tutorial/simples"}>Tutorial nível simples</Link>
      <Link to={"/tutorial/intermediario"}>Página nível intermediário</Link>
      <Link to={"/tutorial/avancado"}>Página nível avançado</Link>
      <Link to={"/tutorial/usoDoChildren"}>
        Página do uso do componente children
      </Link>
    </div>
  );
}

export default Tutoriais;
