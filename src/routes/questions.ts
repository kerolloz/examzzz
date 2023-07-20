import { Router } from 'express';
import { questions } from '../controllers';

const router = Router();

router.post('/', questions.createOne);
router.get('/', questions.findMany);

export default router;
