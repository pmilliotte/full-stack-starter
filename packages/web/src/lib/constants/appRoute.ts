import { LOGIN_PATH } from '@starter/shared';

export enum AppRoute {
  Home = '/',
  Login = `/${LOGIN_PATH}`,
  NotFound = '/not-found',
  Error = '/error',
  Welcome = '/welcome',
  Todos = '/todos',
  CreateTodo = '/create-todo',
}
