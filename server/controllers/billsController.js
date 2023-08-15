import BillsModel from '../models/billsModel.js';

// Add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new BillsModel(req.body);
    await newBill.save();
    res.send('Bill Created Successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

// Get bills data
const getBillsController = async (req, res) => {
  try {
    const bills = await BillsModel.find();
    res.send(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

export { addBillsController, getBillsController };
