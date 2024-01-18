require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connection.js");
const cors = require("cors");
const router = require("./Routes/router.js");
const PORT = 5004;

app.use(cors());
app.use(express.json());

// get response
app.get("/", (req,res)=>{
    res.status(200).json("server start");
});
app.use("/v1",router)
//server start
app.listen(PORT,()=>{
    console.log(`server start at Port No ${PORT}`)
});