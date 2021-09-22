import { Router } from 'express';
import ResourcesRouter from './resources';
import LoginRouter from './login';
import SignupRouter from './signup';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/resources', ResourcesRouter);
router.use('/login', LoginRouter);
router.use('/signup', SignupRouter);

// Export the base-router
export default router;
