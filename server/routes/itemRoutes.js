import express from 'express';
import {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController
} from './../controllers/itemController.js';

const router = express.Router();

router.get('/get-item', getItemController);
router.post('/add-item', addItemController);
router.put('/edit-item', editItemController);
router.post('/delete-item', deleteItemController);

export default router;
