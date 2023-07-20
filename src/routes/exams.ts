import { Router } from 'express';
import { exams } from '../controllers';

const router = Router();

router.post('/', exams.createOne);
router.get('/', exams.findMany);

export default router;
