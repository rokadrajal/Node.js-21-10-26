import express from "express";
import { mvc } from "./models/connectionDB.js";
import router from "./routes/useroute.js";


const app = express();

app.use("/" , router);

app.listen(3000);

