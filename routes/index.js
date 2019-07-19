import express from 'express';
const router = express.Router();
import user_routes from './users';
import dragon_routes from './DragonWriter';

router.use('/users', user_routes);
router.use('/dragons', dragon_routes);

export default router;