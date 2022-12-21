const mongoose= require("mongoose");

const connectDB=(uri)=>
{
    mongoose.connect(uri,
        {useNewUrlParser:true,
        useUnifiedTopology:true
         })
         console.log('connected to database successfully')
}
module.exports= connectDB;
