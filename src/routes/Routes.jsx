import React, { cloneElement } from "react";

import App from "../App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import TutoriaisRoutes from "./Tutoriais.Routes";
import TestesRoutes from "./Testes.Routes";

function AppRoutes() {
  const routesElement = createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      {TutoriaisRoutes().map((route, idx) => cloneElement(route, { key: idx }))}
      {TestesRoutes().map((route, idx) => cloneElement(route, { key: idx }))}
    </>
  );
  const router = createBrowserRouter(routesElement);
  return <RouterProvider router={router} />;
}
export default AppRoutes;
