import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as SubjectController from '../../controllers/DragonWriter/SubjectController';

router.route('/')
   .post(isAuthenticated, SubjectController.post);

router.route('/all/:project_id')
   .get(isAuthenticated, SubjectController.index);

router.route('/:id')
   .get(isAuthenticated, SubjectController.index)
   .put(isAuthenticated, SubjectController.put)
   .delete(isAuthenticated, SubjectController.remove);

export default router;