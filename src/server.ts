import colors from 'colors';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import bearerToken from 'express-bearer-token';
import helmet from 'helmet';
import morgan from 'morgan';
import { exceptionHandler } from './middleware';
import routes from './routes';

const { NODE_ENV = 'development', PORT } = process.env;
const app = express();

const logger =
  NODE_ENV === 'development'
    ? morgan('dev')
    : morgan('combined', {
        skip: (_, res) => res.statusCode < 500,
      });

app.use(logger);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bearerToken());
app.use(routes);
app.use(exceptionHandler);

export function run() {
  return new Promise((resolve, reject) => {
    const port = (PORT || 5000).toString();
    const server = app.listen(port);

    server.once('listening', () => {
      console.info(
        colors.green(`Server is listening on port ${colors.yellow(port)}`),
      );
      resolve(server);
    });

    server.once('error', (err) => {
      console.error(
        colors.red(`Server failed to listen on port ${colors.yellow(port)}`),
      );
      reject(err);
    });
  });
}
