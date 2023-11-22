const NewTask = `
    title: String!,
    description: String,
    status: String,
    priority: String
`
const UpdateTask = `
    _id: String!,
    title: String,
    description: String,
    status: String,
    priority: String
`
export const Task = `
    createTask(${NewTask}): Task!
    updateTask(${UpdateTask}): Task!
    deleteTask(_id: String): Task!
    `   