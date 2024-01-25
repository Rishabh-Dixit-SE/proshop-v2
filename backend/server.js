console.log("Backend server is running");
import express  from 'express';
import Products  from './data/products.js';
const port=5000;
const app=express();


app.get("/",(req,res)=>{
res.send('Server js is Running');
})

app.get("/api/products",(req,res)=>{
    res.json(Products)
})

app.get("/api/products/:id",(req,res)=>{
    const productId=req.params.id;
    const product=Products.find((p)=>p._id===productId);
    res.json(product)
})

app.listen(port,()=>{console.log(`server is running on port ${port}`) });