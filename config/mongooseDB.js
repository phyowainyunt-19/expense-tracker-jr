const mongoose = require('mongoose');
const mongoUrl = 'mongodb://tbag:tbag123@expensetracker-shard-00-00.a4emu.mongodb.net:27017,expensetracker-shard-00-01.a4emu.mongodb.net:27017,expensetracker-shard-00-02.a4emu.mongodb.net:27017/expensetracker1?ssl=true&replicaSet=atlas-97ywhp-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoUrl);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log('error connection to MongoDB:', error.message);
    }
};


module.exports = connectDB;