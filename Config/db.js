
const mongoose = require('mongoose')

const MONGODB_URL = 'mongodb://0.0.0.0:27017/Todo'

const db = async () => {
  await mongoose.connect(MONGODB_URL)
}

export default db;

