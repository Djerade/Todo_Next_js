import {graphqlHTTP} from 'express-graphql';
import express from 'express';

//import
// import { db } from './Config/db.js';
import { resolver } from "./graphql/resolvers/index.js";
import { schema } from "./graphql/schema/index.js";

//Port
const PORT = process.env.PORT || 5000;

//initalisation du serveur
const app = express();


app.get('/',(req,res) =>{
    res.send("Serveur Todo")
})
//Teste de rout
app.listen(PORT, () => {
    console.log('serveur running');
})

//configuration de GraphQl
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}));



