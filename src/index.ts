import colors from 'colors';
import { createAdminIfNotExists } from './init/admin';
import * as server from './server';

server
  .run()
  .then(createAdminIfNotExists)
  .then(() => console.info(colors.green('Up and Running!')))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
