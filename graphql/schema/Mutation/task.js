const NewTask = `
    title: String!,
    description: String!,
    completed: String,
    priority: String
    `
const Task = `
    createTask(${NewTask}): Task!
    updateTask(${NewTask}): Task!
    `
export default Task;