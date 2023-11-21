import { buildSchema } from "graphql";

// Imports
import   { Types }   from './types/index.js';
import  { Mutations }  from "./Mutation/index.js";
import  { Queries }  from "./queries/index.js";
// import types from "./types/index.js";

export const schema = buildSchema(`

${Types.join(`\n`)}

type Query {
  ${Queries.join(`\n`)}
}

type Mutation {
  ${Mutations.join(`\n`)}
}

schema {
 query : Query
 mutation: Mutation
}
`)