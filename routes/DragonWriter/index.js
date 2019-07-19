import express from 'express';
const router = express.Router();

import text_routes from './text';
import project_routes from './project';
import subject_routes from './subject';
import image_routes from './image';

router.use('/text', text_routes);
router.use('/project', project_routes);
router.use('/subject', subject_routes);
router.use('/image', image_routes);

export default router;