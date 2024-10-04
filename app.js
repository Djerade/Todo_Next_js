import {graphqlHTTP} from 'express-graphql';
import express from 'express';
import  cors  from 'cors';
import dotenv from 'dotenv';


//import
import { db } from './Config/db.js';
import { resolver } from "./graphql/resolvers/index.js";
import { schema } from "./graphql/schema/index.js";


dotenv.config();

//Port
const PORT = process.env.PORT;

//initalisation du serveur
const app = express();

//Autorisation d'accès
app.use(cors())

//Test de rout
app.get('/',(req,res) =>{
    res.send("Serveur Todo")
})

//configuration de GraphQl
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}));

//db
db.then(() => {
    app.listen(PORT, () => {
    })
}).catch((err) => {
    console.error(err);
});

