import { ScullyConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-example',
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/superhero/:id':{
      type: 'json',
      id:{
        url:'https://jsonplaceholder.typicode.com/users/',
        property: 'id'
      }
    }
  },
};
