import React from "react";
import ComponenteComChildren from "./ComponenteComChildren";
import IconeLixeira from "../assets/icon-delete.svg";
import IconeCoracao from "../assets/icon-coracao.svg";

// Observe a criação do componente "ComponenteComChildren" no arquivo "EXEMPLOS/ComponenteComChildren.jsx"

function UsoDoChildren(props) {
  const {} = props;
  return (
    <div>
      <ComponenteComChildren titulo={"lixeira"}>
        <img src={IconeCoracao} alt="" />
      </ComponenteComChildren>
      <ComponenteComChildren titulo={"coração"}>
        <img src={IconeLixeira} />
      </ComponenteComChildren>
    </div>
  );
}

export default UsoDoChildren;
