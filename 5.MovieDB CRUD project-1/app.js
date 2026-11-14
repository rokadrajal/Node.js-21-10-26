import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/movieDB").then(()=>{
    console.log("mongoDB Connected");
}).catch(()=>{
    console.log("DB Error");
});

const movieSchema = mongoose.Schema({
    title : String,
    director : String,
    genre : String,
    releaseyear : Number,
});

const movie = mongoose.model("movie",movieSchema);

app.get("/" , async(req,res)=>{
    const home = await movie.find();
    res.json({
        msg : "Home Page",
        data : home
    });
});


// 1 . Add Movie

app.post("/addmovie" , async(req,res)=>{
    const movieData = await movie.create(req.body);

    res.json({
        msg : "Movie Added Successfully!",
        data : movieData
    })
});


// 2 . Get All Movies

app.get("/getmovies", async(req,res)=>{
    const moviesData = await movie.find();

    res.json({
        msg : "All Movies",
        data : moviesData
    })
});


// 3 . Get Specific Movie

app.get("/getSpecificMovie", async(req,res)=>{
    const specificMovie = await movie.findOne(req.body);

    if(!specificMovie){
        
        res.json({
            msg : "Movie Not Found"
        })
    }
    res.json({
        msg : "Specific Movie",
        data : specificMovie
    })

});


// 4 . Update Specific Movie

app.put("/updateMovie",async(req,res)=>{
    const updateMovie = await movie.findByIdAndUpdate(req.body.id , req.body.newData);

    if(!updateMovie){
        
        res.json({
            msg : "Movie not Found",
        })
    }

    res.json({
        msg : "Movie Updated Successfully!",
        data : updateMovie
    })

});


// 5 . Delete Movie

app.delete("/deleteMovie",async(req,res)=>{
    const deleteMovie = await movie.findByIdAndDelete(req.body.id);

    if(!deleteMovie){
        
        res.json({
            msg : "Movie not Found",
        })
    }

    res.json({
        msg : "Movie Deleted Successfully!",
        data : deleteMovie
    })

});

app.listen(3000);

