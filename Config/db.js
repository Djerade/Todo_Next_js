import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb://0.0.0.0:27017/Todo'

export const db = async () => {
  await mongoose.connect(MONGODB_URL)
}
