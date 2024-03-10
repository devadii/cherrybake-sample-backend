import mongoose from 'mongoose';

const DATABASE_URI = 'mongodb+srv://adildevmate:adil1122@cluster1.e24qfkj.mongodb.net/'

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        // await mongoose.connect('mongodb://localhost:5000/BakeshopDB');
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
    }
};

export default connectDB;
