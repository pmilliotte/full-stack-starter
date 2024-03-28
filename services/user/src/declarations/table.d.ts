import { Table } from 'sst/node/table';

declare module 'sst/node/table' {
  export interface TableResources {
    users: {
      tableName: string;
    };
  }
}
