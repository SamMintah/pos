import itemModel from '../models/itemModel.js';
// Get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
// Add item
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send('Item Created Successfully!');
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};
// Update item
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true
    });

    res.status(200).send('Item Updated');
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};

// Delete item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).send('Item Deleted');
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};

export {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController
};
