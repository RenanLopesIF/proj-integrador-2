import React, { cloneElement } from 'react';

import ConfigPge from '../pages/ConfigPage';
import AlterarSenha from '../pages/EsqueceuSenha';
import EsqueciSenha from '../pages/RecuperarSenhaInformarEmail';
import Profile from '../pages/Profile';
import Feed from '../pages/Publications';
import Cadastrar from '../pages/TelaDeCadastro';
import Login from '../pages/TelaLogin';
import Publication from '../pages/ViewPublications';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import TutoriaisRoutes from './Tutoriais.Routes';
import TestesRoutes from './Testes.Routes';

function AppRoutes() {
  const routesElement = createRoutesFromElements(
    <>
      <Route path="/" element={<Feed />} />
      <Route path="/publicacao/:id" element={<Publication />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/configuracoes" element={<ConfigPge />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/recuperar-senha" element={<EsqueciSenha />} />
      <Route path="/recuperar-senha/nova-senha/:userIdToken" element={<AlterarSenha />} />

      {TutoriaisRoutes().map((route, idx) => cloneElement(route, { key: idx }))}
      {TestesRoutes().map((route, idx) => cloneElement(route, { key: idx }))}
    </>,
  );
  const router = createBrowserRouter(routesElement);
  return <RouterProvider router={router} />;
}
export default AppRoutes;
