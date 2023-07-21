import { Router } from 'express';
import { studentExamQuestion } from '../controllers';
import { authenticate } from '../middleware';

const router = Router();

router.use(authenticate);
router.put('/:examQuestionId/answer', studentExamQuestion.answer);

export default router;
