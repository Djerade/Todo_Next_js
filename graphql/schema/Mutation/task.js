const NewTask = `
    title: String!,
    description: String,
    status: String,
    priority: String
    `
export const Task = `
    createTask(${NewTask}): Task!
    updateTask(${NewTask}): Task!
    `