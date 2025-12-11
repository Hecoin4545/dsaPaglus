const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/' , (req,res)=>{
    return res.status(200).json({"msg":"the server is successfully connected"})
})

app.listen(PORT , (req,res)=>{
    console.log("The server is successfully connected on port :- " , PORT);
})

