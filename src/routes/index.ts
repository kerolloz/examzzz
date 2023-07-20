import { Router } from 'express';
import { endpoint, HttpException, NOT_FOUND } from '../core';
import exams from './exams';
import questions from './questions';
import users from './users';

const router = Router();

router.get(
  '/ping',
  endpoint(() => 'pong 🏓'),
);

router.use('/users', users);
router.use('/exams', exams);
router.use('/questions', questions);

router.use('*', () => {
  throw new HttpException(NOT_FOUND, { message: 'Are you lost? 🤔' });
});

export default router;
