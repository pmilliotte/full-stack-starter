import { Table } from 'dynamodb-toolbox';
import { Table as SstTable } from 'sst/node/table';

import { PARTITION_KEY, SORT_KEY } from '@starter/shared';

import { documentClient } from '~/clients';

// @debt Function needed otherwise sst throws when Table.problem is not bound
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getTodoTable = () =>
  new Table({
    name: SstTable.todo.tableName,
    partitionKey: PARTITION_KEY,
    sortKey: SORT_KEY,
    DocumentClient: documentClient,
    removeNullAttributes: false,
  });
