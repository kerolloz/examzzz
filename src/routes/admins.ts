import { Router } from 'express';
import { admins } from '../controllers';

const router = Router();

router.post('/login', admins.login);

export default router;
