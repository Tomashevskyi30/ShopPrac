require('dotenv').config()
const mongoose = require('mongoose')

const connectDB =  async ()=>{
    try{
        await mongoose.connect("mongodb+srv://anton:mama247172@cluster0.dgkdu.mongodb.net/eShop?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDb connection success')
    }catch (e){
        console.error('MongoDb connection failed')
        process.exit(1);
    }
}

module.exports = connectDB
