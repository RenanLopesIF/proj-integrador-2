import React, { useState } from "react";

function MeuComponenteIntermediario(props) {
  const {} = props;
  const [nome, setNome] = useState("Renan"); // <== Lembrese de importar o método useState, como foi feito na linha 1
  const [totalClicks, setTotalClicks] = useState(0);

  const styleNome = {
    color: "red",
  };

  const styleContagemClicks = {
    color: "green",
  };

  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    border: "1px solid blue",
  };

  function aumentaClicks() {
    setTotalClicks(totalClicks + 1);
  }

  return (
    <div style={styleContainer}>
      <p style={styleNome}>Meu nome é {nome}</p>
      <span style={styleContagemClicks}>contagem de clicks: {totalClicks}</span>
      <button style={buttonStyle} onClick={aumentaClicks}>
        Aumentar clicks
      </button>
    </div>
  );
}

export default MeuComponenteIntermediario;
