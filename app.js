require('dotenv').config();
const express= require('express');
const app= express();

const homepagerouter= require('./routes/homepage');
const productsrouter= require('./routes/products');
const connectDB= require('./database/connect');

const PORT = process.env.PORT || 3000
app.use('/',homepagerouter);
app.use('/api/products/',productsrouter);

const start=async(req,res)=>{
    try{
       await connectDB(process.env.MONGODB_URL);
      app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`);
      })
    }
    catch(err){
        console.log(err);
    }
}
start();


