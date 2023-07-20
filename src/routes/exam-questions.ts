import { Router } from 'express';
import { studentExamQuestion } from '../controllers';

const router = Router();

router.put('/:examQuestionId/answer', studentExamQuestion.answer);

export default router;
