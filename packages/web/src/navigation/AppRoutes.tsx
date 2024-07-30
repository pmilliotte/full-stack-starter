import { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from '~/lib';
import {
  CreateTodo,
  Error,
  Home,
  Login,
  NotFound,
  Todos,
  Welcome,
} from '~/pages';

import { AuthenticationRequired } from './AuthenticationRequired';

export const AppRoutes = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route element={<AuthenticationRequired />}>
        <>
          <Route path={AppRoute.Welcome} element={<Welcome />} />
          <Route path={AppRoute.Todos} element={<Todos />} />
          <Route path={AppRoute.CreateTodo} element={<CreateTodo />} />
        </>
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFound />} />
      <Route path={AppRoute.Error} element={<Error />} />
      <Route path="*" element={<Navigate to={AppRoute.NotFound} />} />
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>
  </BrowserRouter>
);
