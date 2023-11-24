import { Task } from "../../Model/index.js";

export default {
   createTask: async ({
      title,
      description,
      status,
      priority
   }) => {
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
   },

   updateTask: async ({
      _id,
      title,
      description,
      status,
      priority
   }) => {
      const taskDelected = await Task.findByIdAndUpdate(
         { _id: `${_id}` }, {
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
   },

   deleteTask: async ({ _id }) => {
      const taskDelected = await Task.findByIdAndDelete({ _id: `${_id}` }, { new: true })
       return {
          ...taskDelected._doc
       }
   },
   
   getTask: async ({ _id }) => {
      try {
         const task = await Task.findById({ _id: `${_id}` })
      } catch (error) {
         console.error(error.message);
      }
      return {
         ...task._doc
      }
   },

   getAllTasks: async () => {
      const allTask = await Task.find();
      return allTask.map((task) => { 
         return { ...task._doc }
       })
     }
}