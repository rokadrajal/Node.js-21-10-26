const express = require("express");
const mongoose = require("mongoose");


const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/demo").then(()=>{
    console.log("Database Connected Successfully!");
}).catch(()=>{
    console.log("Server Error"); 
});

app.get("/" , (req,res)=>{
    res.send(`
        mongodb://  => protocol of mongodb
        127.0.0.1:  => local computer host number
        27017/      => default port number of mongodb
        demo        => database name
    `);
})

app.listen(3000);