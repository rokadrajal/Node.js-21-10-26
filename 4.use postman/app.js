import express from "express";

const app = express();
// 1 . first route : home route
app.get("/" , (req,res)=>{
  res.send("home page")
});

app.get("/reterivedata" , (req,res)=>{
    res.send("This is your data")
});

app.listen(3000);