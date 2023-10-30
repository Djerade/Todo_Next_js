import mongoose from "mongoose";

const Schema  = new mongoose.Schema

var taskSchema  = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        completed: {
            type: Boolean
        },
        priority: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Task  = mongoose.model('Task', taskSchema)
export default Task;

