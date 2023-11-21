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
        Status: {
            type: String
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

