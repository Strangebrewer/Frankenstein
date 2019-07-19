import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as SubjectController from '../../controllers/DragonWriter/SubjectController';

router.route('/')
   .get(isAuthenticated, SubjectController.index)
   .post(isAuthenticated, SubjectController.post);

router.route('/:id')
   .get(isAuthenticated, SubjectController.index)
   .put(isAuthenticated, SubjectController.put)
   .delete(isAuthenticated, SubjectController.remove);

export default router;