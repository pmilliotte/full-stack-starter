import { Entity, EntityItem } from 'dynamodb-toolbox';

import { PARTITION_KEY, SORT_KEY } from '@starter/shared';

import { getTodoTable } from '../table';

export const TODO_ENTITY_NAME = 'Todo';

// @debt Function needed otherwise sst throws when Table.problem is not bound
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getTodoEntity = () =>
  new Entity({
    name: TODO_ENTITY_NAME,
    attributes: {
      id: { type: 'string', required: true },
      content: { type: 'string', required: true },
      creatorId: { type: 'string', required: true },
      [PARTITION_KEY]: {
        default: ({ entity }: { entity: string }) => entity,
        hidden: true,
        partitionKey: true,
      },
      [SORT_KEY]: {
        default: ({ id }: { id: string }) => id,
        hidden: true,
        sortKey: true,
      },
    },
    table: getTodoTable(),
  } as const);

export type Todo = EntityItem<ReturnType<typeof getTodoEntity>>;
