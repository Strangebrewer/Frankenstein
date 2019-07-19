import express from 'express';
const router = express.Router();

import isAuthenticated from '../../policies/isAuthenticated';
import * as ImageController from '../../controllers/DragonWriter/ImageController';

router.route('/')
   .get(isAuthenticated, ImageController.index)
   .post(isAuthenticated, ImageController.post);

router.route('/:id')
   .get(isAuthenticated, ImageController.index)
   .put(isAuthenticated, ImageController.put)
   .delete(isAuthenticated, ImageController.remove);

export default router;