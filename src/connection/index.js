import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import {  db_name, } from '../constants.js';

 const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.mongodb_url}/${db_name}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDB;
