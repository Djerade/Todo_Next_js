import { buildSchema } from "graphql";

// Imports
import  Types  from "./types/index.js";
import  Mutation  from "./Mutation/index.js";
import  Queries  from "./queries/index.js";



export const schema = buildSchema(`
    ${Types.join('\n')}
    Mutation{
        ${Mutation.join('\n')}
    }
    type Query{
         ${Queries.join('\n')}
    }
    schema{
        query: Query
        mutation: Mutation
    }
`)