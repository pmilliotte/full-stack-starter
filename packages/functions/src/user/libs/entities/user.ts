import { Entity, EntityItem } from 'dynamodb-toolbox';

import { EMAIL } from '@starter/shared';

import { UserTable } from '../table';

export const USER_ENTITY_NAME = 'User';

export const UserEntity = new Entity({
  name: USER_ENTITY_NAME,
  attributes: {
    [EMAIL]: { partitionKey: true, type: 'string' },
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    id: { type: 'string', required: true },
  },
  table: UserTable,
} as const);

export type User = EntityItem<typeof UserEntity>;
