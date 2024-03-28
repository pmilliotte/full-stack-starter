import { Api, EventBus, StackContext } from 'sst/constructs';

export const Core = ({ stack }: StackContext): { api: Api } => {
  const bus = new EventBus(stack, 'bus', {
    defaults: {
      retries: 10,
    },
  });

  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        bind: [bus],
      },
    },
    accessLog: {
      retention: 'one_week',
    },
    cors: {
      allowCredentials: true,
      allowHeaders: ['content-type'],
      allowMethods: ['ANY'],
      allowOrigins: ['http://localhost:5173', 'https://INSERT_PROD_URL'],
    },
  });

  bus.subscribe('todo.created', {
    handler: 'services/core/src/events/todo-created.handler',
  });

  stack.addOutputs({ ApiEndpointUrl: api.url });

  return {
    api,
  };
};
