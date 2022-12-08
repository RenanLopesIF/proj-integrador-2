import { Route } from "react-router-dom";

import MeuComponenteAvancado from "../EXEMPLOS/avancado";
import MeuComponenteSimples from "../EXEMPLOS/simples";
import MeuComponenteIntermediario from "../EXEMPLOS/intermediario";
import UsoDoChildren from "../EXEMPLOS/usoDoChildren";
import Tutoriais from "../EXEMPLOS/tutoriais";

function TutorialsRoutes() {
  const listaDePessoas = ["Amaury", "Luan", "Renan", "Vitor"];

  return [
    <Route path="/tutoriais" element={<Tutoriais />} />,
    <Route
      path="/tutorial/avancado"
      element={
        <MeuComponenteAvancado titulo="Lista" listaDePessoas={listaDePessoas} />
      }
    />,
    <Route
      path="/tutorial/intermediario"
      element={<MeuComponenteIntermediario />}
    />,
    <Route path="/tutorial/simples" element={<MeuComponenteSimples />} />,
    <Route path="/tutorial/usoDoChildren" element={<UsoDoChildren />} />,
  ];
}

export default TutorialsRoutes;
