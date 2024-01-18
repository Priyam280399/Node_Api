// const mongoose = require("mongoose");
// const DB = process.env.DATABASE;

// mongoose.connect(DB,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=>console.log("Database connected")).catch((err)=>{
//     console.log("error,",err)
// })

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE);

// Create a connection object
const db = mongoose.connection;

// error handler
db.on('error', console.error.bind(console, 'connection error:'));

// open connection
db.once('open', (err) => {
    console.log('Connected to MongoDB');
});