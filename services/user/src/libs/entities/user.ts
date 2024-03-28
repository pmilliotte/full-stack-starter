import { EMAIL } from '@full-stack-starter/packages/shared';
import { Entity, EntityItem } from 'dynamodb-toolbox';

import { UsersTable } from '../table';

export const USER_ENTITY_NAME = 'User';

export const UserEntity = new Entity({
  name: USER_ENTITY_NAME,
  attributes: {
    [EMAIL]: { type: 'string', partitionKey: true },
    id: { type: 'string', required: true },
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
  },
  table: UsersTable,
} as const);

export type User = EntityItem<typeof UserEntity>;
