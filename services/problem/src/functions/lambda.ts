import { ApiHandler } from 'sst/node/api';

export const handler = ApiHandler(async _evt =>
  Promise.resolve({
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  }),
);
