import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/config";
import itemModel from "./models/itemModel";
import items from "./utils/data";
import "colors";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log("All Items Added".bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};

importData();
