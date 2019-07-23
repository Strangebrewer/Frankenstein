import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as TextController from '../../controllers/DragonWriter/TextController';

router.route('/')
   .post(isAuthenticated, TextController.post);

router.route('/all/:project_id')
   .get(isAuthenticated, TextController.index);

router.route('/:id')
   .get(isAuthenticated, TextController.index)
   .put(isAuthenticated, TextController.put)
   .delete(isAuthenticated, TextController.remove);

export default router;