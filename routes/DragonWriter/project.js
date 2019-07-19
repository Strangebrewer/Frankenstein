import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as ProjectController from '../../controllers/DragonWriter/ProjectController';

router.route('/')
   .get(isAuthenticated, ProjectController.index)
   .post(isAuthenticated, ProjectController.post);

router.route('/:id')
   .get(isAuthenticated, ProjectController.index)
   .put(isAuthenticated, ProjectController.put)
   .delete(isAuthenticated, ProjectController.remove);

export default router;