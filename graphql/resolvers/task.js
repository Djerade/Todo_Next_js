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
   // updateTask: async () => {
   //    return 
   // },
   // task: async () => {
   //    return 
   //      },
   tasks: async () => {
      const allTask = await Task.find();
      return allTask.map((task) => { 
         return { ...task._doc }
       })
     }
}