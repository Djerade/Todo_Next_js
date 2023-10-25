const express = require('express');
const { db } = require('./Config/db');
const app = express();

const PORT = process.env.PORT

app.get('/',(req,res) =>{
    res.send("salut")
})

app.listen(PORT, () => {
    console.log('serveur function');
})

