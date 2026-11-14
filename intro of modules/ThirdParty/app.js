const express = require("express");
const app = express();

app.get("/",(request,response)=>{
    response.send("Hello Home");
});

app.get("/about",(request,response)=>{
    response.send("Hello about");
});

app.listen(3000);