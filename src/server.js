import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import formRouter from './routers/form.router.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import connectDB from '../config/dbConn.js';



dotenv.config();
// Loads up the value of the node environment (should be development)
console.log(process.env.NODE_ENV)

connectDB()


const app = express();
// Since we're using 'req.body' and want to send our data to the server as JSON, we need to tell express to use JSON as the body
// This code parses JSON body
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000'],
})
);

// Front end is already running on port3000, backend must run on a separate port (5000)

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/forms', formRouter);


const PORT = 5000;
mongoose.connection.once('open', () => {
    console.log('Connection to MongoDB Successful')
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log')
})

export { app }