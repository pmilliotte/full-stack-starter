import crypto from 'crypto';
import { z } from 'zod';

import { event } from './event';

export const Events = {
  Created: event(
    'todo.created',
    z.object({
      id: z.string(),
    }),
  ),
};

export const create = async (): Promise<void> => {
  const id = crypto.randomUUID();
  // write to database

  await Events.Created.publish({
    id,
  });
};

export const list = (): {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
}[] =>
  Array(50)
    .fill(0)
    .map((_, index) => ({
      id: crypto.randomUUID(),
      title: 'Todo #' + index,
    }));
