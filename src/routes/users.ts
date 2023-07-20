import { Router } from 'express';
import { students } from '../controllers/';

const router = Router();

router.post('/signup', students.signup);

export default router;
