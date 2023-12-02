import { GraphQLError } from "graphql";
import { Task } from "../../Model/index.js";

export default {
   createTask: async ({
      title,
      description,
      status,
      priority
   }) => {
      try {
         const task = new Task({
         title,
         description,
         status,
         priority
         });
         const taskSaved = await task.save();
         return {
                 ...taskSaved._doc
              }
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
   },
   
   updateTask: async ({
      _id,
      title,
      description,
      status,
      priority
   }) => {
      try {
         const taskDelected = await Task.findByIdAndUpdate(
            {
               _id: `${_id}`
            },
            {
               $set: {
               title,
               description,
               status,
               priority
               }
         },
         {
            new: true
         })
          return {
             ...taskDelected._doc
          }
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
   },

   deleteTask: async ({ _id }) => {
      try {
         const taskDelected = await Task.findByIdAndDelete({ _id: `${_id}` }, { new: true })
         return {
            ...taskDelected._doc
         }
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
   },

   deleteAllTask: async () => {
      try {
         const result = await Task.deleteMany()
         return result.deletedCount
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
   },

   doneTask: async ({_id,status}) => {
      try {
         const taskUpdated = await Task.findByIdAndUpdate(
            {
               _id: `${_id}`
            },
            {
               $set: {
               status
               }
         },
         {
            new: true
         })
         return {
            ...taskUpdated._doc
         }
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
   },

   getTask: async ({ _id }) => {
      try {
         const task = await Task.findById({ _id: `${_id}` })
         return {
            ...task._doc
         }
      } catch (error) {
        return Promise.reject(new GraphQLError(error.message))
      }
   },

   getAllTasks: async () => {
      try {
         const allTask = await Task.find();
         return allTask.map((task) => { 
            return { ...task._doc }
         })
      } catch (error) {
         return Promise.reject(new GraphQLError(error.message))
      }
     }
}