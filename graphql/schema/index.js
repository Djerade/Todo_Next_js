import { buildSchema } from "graphql";

// Imports
import   Types   from './types/index.js';
import  Mutation  from "./Mutation/index.js";
import  Queries  from "./queries/index.js";
import types from "./types/index.js";



export const schema = buildSchema(`
input newtTask {
  title: String!
  description: String
  completed: String
  priority: String
  }
        
type Task {
_id: String!
title: String!
comment: String
priority: String
}

type Querie {
    tasks: [Task]!
    task(_id: String) : Task
}

type Mutation {
   createTask(newtTask): Task!
   updateTask(newtTask): Task!
}

schama {
 query : Querie
 mutation: Mutation
}

`)