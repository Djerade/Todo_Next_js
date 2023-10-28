import { buildSchema } from "graphql";

// Imports
import { Types } from "./types/Task.js";

import { Mutation } from "./Mutation/task.js";
import { Queries } from "./queries/Task.js";



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