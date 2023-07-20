import colors from 'colors';
import * as server from './server';

server
  .run()
  .then(() => console.info(colors.green('Up and Running!')))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
