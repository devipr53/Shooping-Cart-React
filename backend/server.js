import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';


dotenv.config();

const mongodbUrl=config.MONGODB_URL;
console.log(mongodbUrl);
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
  }).catch((error) => console.log(error.reason));


const app=express();
app.use(bodyParser.json());
//const usersRoute= require('./routes/userRoute');

app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use('/api/orders', orderRoute);
/* app.get("/api/products",(req,res) =>{
    res.send(data.products);
})

app.get("/api/products/:id",(req,res) =>{
    const productId = req.params.id;
    const prodDetails=data.products.find(x => x._id ===productId);
    if(prodDetails){
        res.send(prodDetails);
    }else{
        res.status(404).send({msg: "Product Details Not Found !! "})
    }
    res.send();
})*/

app.listen(5000,()=>{
    console.log("server started at localhost:5000")
})