
import express  from 'express';


import dotenv  from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();
const port=process.env.PORT || 5000;
connectDB();
const app=express();
import { notfound,errorHandler } from './middleware/errorMiddleware.js'; 


app.get("/",(req,res)=>{
res.send('Server js is Running');
})

app.use('/api/products',productRoutes);
app.use(notfound);
app.use(errorHandler);

app.listen(port,()=>{console.log(`server is running on port ${port}`) });