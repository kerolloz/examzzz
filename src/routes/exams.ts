import { Router } from 'express';
import { exams } from '../controllers';

const router = Router();

router.post('/', exams.createOne);
router.get('/', exams.findMany);
router.post('/:examId/questions', exams.addQuestionsToExam);
router.get('/:examId/questions', exams.findExamQuestions);

export default router;
