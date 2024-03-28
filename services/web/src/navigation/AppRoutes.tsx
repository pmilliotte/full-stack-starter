import { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from '~/definitions';
import { Home, Login, Start } from '~/pages';

import { AuthenticationRequired } from './AuthenticationRequired';

export const AppRoutes = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route element={<AuthenticationRequired />}>
        <>
          <Route path={AppRoute.Start} element={<Start />} />
          <Route path={AppRoute.NotFound} element={<div>Not found</div>} />
          <Route path="*" element={<Navigate to={AppRoute.NotFound} />} />
        </>
      </Route>
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>
  </BrowserRouter>
);
