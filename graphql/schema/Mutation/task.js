const NewTask = `
    title: String!,
    description: String,
    `

export const Task = `
    createTask(${NewTask}): Task!
    updateTAsk(${NewTask}): Task!
    `