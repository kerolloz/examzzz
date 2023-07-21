import { Router } from 'express';
import { endpoint, HttpException, NOT_FOUND } from '../core';
import admins from './admins';
import examQuestions from './exam-questions';
import exams from './exams';
import questions from './questions';
import scores from './scores';
import users from './users';

const router = Router();

router.get(
  '/ping',
  endpoint(() => 'pong 🏓'),
);

router.use('/users', users);
router.use('/exams', exams);
router.use('/questions', questions);
router.use('/exam-questions', examQuestions);
router.use('/admins', admins);
router.use('/scores', scores);

router.use('*', () => {
  throw new HttpException(NOT_FOUND, { message: 'Are you lost? 🤔' });
});

export default router;
