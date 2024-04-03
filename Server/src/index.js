import express from 'express';
import connectDB from "./db/index.js";
import cors from 'cors';

const app = express();

import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: path.join('.env')});

app.use(cors({origin: process.env.CORS_ORIGIN,Credentials: true}));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))

connectDB()
.then(()=> {
    app.on("error", (error) => {
        console.log("Err",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=> {
        console.log("App connected");
    })
})
.catch((err)=> {
    console.log("Mongo Db connection failed", err);
})
