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
      console.log('sdsd');
      return {
              ...taskSaved._doc
           }
        },
   updateTask: async () => {
      return 
   },
   task: async () => {
      return 
        },
   tasks: async () => {
       return 
     }
}