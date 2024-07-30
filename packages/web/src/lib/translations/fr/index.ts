import { flattenMessages } from '~/lib/utils';

import { commonMessages } from './common';
import {
  createTodoMessages,
  errorMessages,
  loginMessages,
  notFoundMessages,
  todosMessages,
  welcomeMessages,
} from './pages';

export const frenchMessages = flattenMessages({
  ...commonMessages,
  ...loginMessages,
  ...notFoundMessages,
  ...errorMessages,
  ...welcomeMessages,
  ...todosMessages,
  ...createTodoMessages,
});
