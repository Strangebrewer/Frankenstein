import express from 'express';
const router = express.Router();

import text_routes from './text';
import project_routes from './project';
import subject_routes from './subject';
import image_routes from './image';

router.use('/texts', text_routes);
router.use('/projects', project_routes);
router.use('/subjects', subject_routes);
router.use('/images', image_routes);

export default router;