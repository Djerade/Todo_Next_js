import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/Todo'

export const db = mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).then(() => {
    console.log('Connexion réussie');
  }).catch((err) => {
    console.error(err);
  });