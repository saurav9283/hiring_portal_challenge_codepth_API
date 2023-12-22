import mongoose from 'mongoose'
const taskSchma=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        // required:true
    }
})

export const taskModel = mongoose.model('tasks', taskSchma);
