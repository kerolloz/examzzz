import { Router } from 'express';
import { questions } from '../controllers';
import { authenticate } from '../middleware';
import { authorize } from '../middleware/authorization';
import { UserRole } from '../middleware/roles';

const router = Router();

router.use(authenticate, authorize(UserRole.ADMIN));
router.post('/', questions.createOne);
router.get('/', questions.findMany);

export default router;
