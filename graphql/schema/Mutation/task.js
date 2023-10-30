const NewTask = `
    title: String!,
    description: String,
    completed: String,
    priority: String
    `

export default Task = `
    createTask(${NewTask}): Task!
    updateTask(${NewTask}): Task!
    `