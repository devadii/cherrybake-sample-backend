import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
});


export default productSchema;