import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL 

export const db = mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).then(() => {
    console.log('Connexion réussie');
  }).catch((err) => {
    console.error(err);
  });