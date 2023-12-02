const NewTask = `
    title: String!,
    description: String,
    status: String,
    priority: String
`
const DoneTask = `
    _id: String!,
    status: String!
`
const returnTaskDelete = `
    retour: Boolen
`
const UpdateTask = `
    _id: String!,
    title: String,
    description: String,
    priority: String
`
export const Task = `
    createTask(${NewTask}): Task!
    doneTask(${DoneTask}): Task!
    updateTask(${UpdateTask}): Task!
    deleteTask(_id: String): Task!
    deleteAllTask: Boolean
    `   