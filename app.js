const express = require('express');
const { db } = require('./Config/db');
const app = express();

const PORT = 5000

app.get('/',(req,res) =>{
    res.send("hello word")
})

app.listen(PORT, () => {
    console.log('serveur running');
})

