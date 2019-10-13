import express from 'express';
const router = express.Router();
import user_routes from './users';
import path from 'path';
import dragon_routes from './DragonWriter';

router.use('/users', user_routes);
router.use('/dragons', dragon_routes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default router;