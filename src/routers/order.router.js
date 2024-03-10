const express = require('express');
const app = express; 
app.use(express.json());

require('./db/connection');
const Users = require('/Models/User');


app.post("/", async(req,res)=>{
    console.log("port Run");
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000);