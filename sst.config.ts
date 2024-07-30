import type { SSTConfig } from 'sst';

import { Core, Todo, User } from './stacks';

export default {
  config: _input => ({
    name: 'starter',
    region: 'eu-west-1',
  }),
  stacks: app => {
    app.setDefaultFunctionProps({
      runtime: 'nodejs18.x',
      logRetention: 'one_day',
      architecture: 'arm_64',
    });

    app.stack(Core);
    app.stack(User);
    app.stack(Todo);
  },
} satisfies SSTConfig;
