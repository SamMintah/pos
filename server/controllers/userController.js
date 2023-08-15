import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, verified: true });

    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).send(user);
    } else {
      res.status(401).json({ message: 'Login Failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Register
const registerController = async (req, res) => {
  try {
    const newUser = new userModel({ ...req.body, verified: true });
    await newUser.save();
    res.status(201).send('New User added Successfully!');
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad request');
  }
};

export { loginController, registerController };
