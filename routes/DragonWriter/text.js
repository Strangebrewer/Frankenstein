import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as TextController from '../../controllers/DragonWriter/TextController';

router.route('/')
   .get(isAuthenticated, TextController.index)
   .post(isAuthenticated, TextController.post);

router.route('/:id')
   .get(isAuthenticated, TextController.index)
   .put(isAuthenticated, TextController.put)
   .delete(isAuthenticated, TextController.remove);

export default router;