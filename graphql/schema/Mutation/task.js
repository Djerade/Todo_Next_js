const NewTask = `
    title: String!,
    description: String!,
    completed: String,
    priority: String
    `
export const Task = `
    createTask(${NewTask}): Task!
    updateTask(${NewTask}): Task!
    `