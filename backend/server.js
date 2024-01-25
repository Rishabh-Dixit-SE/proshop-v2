
import express  from 'express';
import Products  from './data/products.js';
import dotenv  from 'dotenv';
dotenv.config();
const port=process.env.PORT || 5000;
const app=express();


app.get("/",(req,res)=>{
res.send('Server js is Running');
})

app.get("/api/products",(req,res)=>{
    res.json(Products)
})

app.get("/api/products/:id",(req,res)=>{
    const ProductId=req.params.id;
    const product=Products.find((x)=>x._id===ProductId);
    res.json(product)

})

app.listen(port,()=>{console.log(`server is running on port ${port}`) });