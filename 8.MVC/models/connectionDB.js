import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mvc").then(()=>{
    console.log("DB connection successfull");
}).catch(()=>{
    console.log("DB connection error");
});

const schema = mongoose.Schema({
     username : String,
     password : String
})

export const mvc = mongoose.model("mvc",schema);