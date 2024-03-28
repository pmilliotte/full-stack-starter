import { StaticSite } from 'sst/node/site';

declare module 'sst/node/site' {
  export interface StaticSiteResources {
    web: {
      url: string;
    };
  }
}
