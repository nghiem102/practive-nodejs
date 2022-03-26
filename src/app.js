import express from "express";
import mongoose from "mongoose";
import morgan from  "morgan";
import cors from 'cors'

import productRoute from './routers/product'
import categoryRoute from './routers/category'
import userRoute from './routers/user'

const app = express()

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors())

app.use("/api",productRoute)
app.use("/api",categoryRoute)
app.use("/api",userRoute)


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => { console.log("conneted DB")})
    .catch(error => {console.log(error);})

const POST = 3001
app.listen(POST, () =>{
        console.log("dang chay cong", POST);
    }
)