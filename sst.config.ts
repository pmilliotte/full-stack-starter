import { Core, Problem, User, Web } from 'infra';
import { SSTConfig } from 'sst';

export default {
  config: _input => ({
    name: 'full-stack-starter',
    region: 'eu-west-1',
  }),
  stacks: app => {
    app.stack(Core);
    app.stack(Web);
    app.stack(User);
    app.stack(Problem);
  },
} satisfies SSTConfig;
