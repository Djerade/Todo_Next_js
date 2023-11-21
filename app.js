const { graphqlHTTP } = require('express-graphql');
const express = require('express');

require('dotenv').Config()

const { db } = require('./Config/db');

//Port
const PORT = process.env.PORT || 5000;

//initalisation du serveur
const app = express();


app.get('/',(req,res) =>{
    res.send("hello word")
})
//Teste de rout                                     
app.listen(PORT, () => {
    console.log('serveur running');
})

//GraphQl
app.use('/graphql',GrapqleHTTP());

