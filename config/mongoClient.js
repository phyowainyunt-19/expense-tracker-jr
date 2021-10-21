const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const connectDB = async () => {
    try {
        const client = await new MongoClient(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
        });
        console.log(`MongoDB connected`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error}`.red);
        process.exit(1);
    }
}


module.exports = connectDB;