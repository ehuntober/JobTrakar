
let mongoose = require('mongoose');

let connectDB = () =>{
    try{
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected to the database....')
    }
    catch(error){
        console.log(eror)
    }

}
