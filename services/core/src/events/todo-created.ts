import { EventHandler } from 'sst/node/event-bus';

import { Events } from '../todo';

export const handler = EventHandler(Events.Created, async evt => {
  console.log('Todo created', evt);
  await Promise.resolve();
});
