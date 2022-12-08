import { Route } from "react-router-dom";

import TesteAmaury from "../TESTES/Amaury";
import TesteLuan from "../TESTES/Luan";
import TesteVictor from "../TESTES/Victor";

function TestesRoutes() {
  return [
    <Route path="/amaury" element={<TesteAmaury />} />,
    <Route path="/luan" element={<TesteLuan />} />,
    <Route path="/victor" element={<TesteVictor />} />,
  ];
}

export default TestesRoutes;
