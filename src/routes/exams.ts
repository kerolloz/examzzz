import { Router } from 'express';
import { exams } from '../controllers';

const router = Router();

router.post('/', exams.createOne);

export default router;
