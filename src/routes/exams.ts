import { Router } from 'express';
import { exams } from '../controllers';
import { authenticate } from '../middleware';
import { authorize } from '../middleware/authorization';
import { UserRole } from '../middleware/roles';

const router = Router();

router.use(authenticate);

router.get('/', exams.findMany);
router.get('/:examId/questions', exams.findExamQuestions);

// ADMIN ONLY ENDPOINTS
router.use(authorize(UserRole.ADMIN));
router.post('/', exams.createOne);
router.post('/:examId/questions', exams.addQuestionsToExam);

export default router;
