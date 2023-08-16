import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/config.js';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';
import billsRoute from './routes/billsRoute.js';

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bills', billsRoute);
app.get('/', (req, res) => {
  res.send('Welcome to pos v-one!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
