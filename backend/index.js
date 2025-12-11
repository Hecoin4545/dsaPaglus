require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {connectionUrl} = require('./connection/index.js')


const app = express();

const PORT = process.env.PORT;

app.get('/' , (req,res)=>{
    return res.status(200).json({"msg":"the server is successfully connected"})
})


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())




connectionUrl(process.env.URL).then(()=>{
    console.log("The database is successfully connected");
}).catch((e)=>{
    console.log(`There occurs some error ${e}`);
})



app.listen(PORT , (req,res)=>{
    console.log("The server is successfully connected on port :- " , PORT);
})

