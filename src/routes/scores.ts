import { Router } from 'express';
import { studentExamScores } from '../controllers';
import { authenticate } from '../middleware';
import { authorize } from '../middleware/authorization';
import { UserRole } from '../middleware/roles';

const router = Router();

router.use(authenticate, authorize(UserRole.ADMIN));

router.get('/', studentExamScores.findMany);

export default router;
