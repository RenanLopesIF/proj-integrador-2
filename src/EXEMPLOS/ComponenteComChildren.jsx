import React from "react";

function ComponenteComChildren(props) {
  const { children, titulo } = props;

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid black",
  };

  return (
    <div style={buttonStyle}>
      {children}
      {titulo}
    </div>
  );
}

export default ComponenteComChildren;
