const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//dotenv.config();

async function db() {
  await mongoose.connect('mongodb+srv://sakshithakre121:admin@cluster0.m5wdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}
module.exports = db;