
import express  from 'express';


import dotenv  from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/productRoutes.js';
dotenv.config();
const port=process.env.PORT || 5000;
connectDB();
const app=express();


app.get("/",(req,res)=>{
res.send('Server js is Running');
})

app.use('/api/products',router);

app.listen(port,()=>{console.log(`server is running on port ${port}`) });