import mongoose from 'mongoose';
import connectDB from '../config/dbConn.js/index.js';
import Form from '../models/formSchema.js/index.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB().then(async () => {
    console.log("Creating Seed Data!");

    const newForm = new Form({
        id: "2",
        email: "laurencericoo@gmail.com",
        first_name: "Laurence",
        last_name: "Rico",
        pickUp_date: "Today",
        pickUp_time: "9:00hrs",
        phone_number: "0451932975",
    });

    await newForm.save().then(() => {
        console.log(`${newForm.first_name} is in the Database!`);
    });
});
