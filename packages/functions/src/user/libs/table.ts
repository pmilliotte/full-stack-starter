import { Table } from 'dynamodb-toolbox';
import { Table as SstTable } from 'sst/node/table';

import { EMAIL } from '@starter/shared';

import { documentClient } from '~/clients';

export const UserTable: Table<string, typeof EMAIL, null> = new Table({
  name: SstTable.user.tableName,
  partitionKey: EMAIL,
  DocumentClient: documentClient,
});
