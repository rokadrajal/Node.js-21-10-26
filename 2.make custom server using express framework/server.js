const express = require("express");

const app = express();

// Routing

// statatic Route:
// Home Route : "/"
app.get("/" , (req,res)=>{
    res.send("Hello, Welcome to my First Route home page");
    
});

// About Route
app.get("/about",(req,res)=>{
    res.send("Hello, Welcome to my second Route about page");
})

app.listen(3000);