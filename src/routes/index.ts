import { Router } from 'express';
import { endpoint, HttpException, NOT_FOUND } from '../core';
import users from './users';

const router = Router();

router.get(
  '/ping',
  endpoint(() => 'pong 🏓'),
);

router.use('/users', users);

router.use('*', () => {
  throw new HttpException(NOT_FOUND, { message: 'Are you lost? 🤔' });
});

export default router;
