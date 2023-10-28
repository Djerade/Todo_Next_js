const { graphqlHTTP } = require('express-graphql');
const express = require('express');

const { db } = require('./Config/db');

//Port
const PORT = 5000

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

