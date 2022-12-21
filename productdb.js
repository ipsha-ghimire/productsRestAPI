require('dotenv').config();
const productJson=require('./productJsn');
const dbmodel= require('./models/databaseschema');
const connectDB = require('./database/connect');
constdbconnection= require('./database/connect');

const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await dbmodel.create(productJson);
        console.log('success in adding documents to db');
       
    }
    catch(error){
        console.log(error);
    }
}
start();