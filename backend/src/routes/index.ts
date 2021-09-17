import { Router } from 'express';
import ResourcesRouter from './resources';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/resources', ResourcesRouter);

// Export the base-router
export default router;
