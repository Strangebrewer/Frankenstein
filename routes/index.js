import express from 'express';
const router = express.Router();
import user_routes from './users';

router.use('/users', user_routes);

export default router;