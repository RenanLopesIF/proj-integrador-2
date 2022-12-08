import React, { useState } from "react";
import MeuComponenteIntermediario from "./intermediario";
import MeuComponenteSimples from "./simples";

function MeuComponenteAvancado(props) {
  const { titulo, listaDePessoas } = props;

  const [componenteASerRenderizado, setComponenteASerRenderizado] =
    useState("simples");

  const buttonStyle = {
    border: "1px dashed green",
    cursor: "pointer",
  };

  function trocarComponenteASerRenderizado() {
    if (componenteASerRenderizado === "simples") {
      setComponenteASerRenderizado("medio");
      return;
    } else {
      setComponenteASerRenderizado("simples");
      return;
    }
  }

  return (
    <div>
      <h1>{titulo}</h1>
      {listaDePessoas.map((pessoa) => (
        <div>
          <p>{pessoa.nome}</p>
          <p>{pessoa.idade}</p>
        </div>
      ))}
      <hr />

      <h3>Renderizando componente</h3>
      <span style={buttonStyle} onClick={trocarComponenteASerRenderizado}>
        Trocar
      </span>
      {componenteASerRenderizado === "simples" && <MeuComponenteSimples />}
      {componenteASerRenderizado === "medio" && <MeuComponenteIntermediario />}
    </div>
  );
}

export default MeuComponenteAvancado;
