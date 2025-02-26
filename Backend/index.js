require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uri=process.env.MONGO_URL ;
const PORT=process.env.PORT 
const app = express();
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    mongoose.connect(uri);
    console.log("database connnected");
});

app.get("/hello",(req,res)=>{
    res.send("Hello World");
})
