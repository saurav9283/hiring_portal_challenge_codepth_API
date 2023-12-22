import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import addTask from './router/task.js'
import getAllTask from './router/task.js'
import deleteTask from './router/task.js'
import editTask from './router/task.js'

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api is working!!');
})

app.use('/addingTask', addTask)
app.use('/getalltask', getAllTask)
app.use('/deleteTask', deleteTask)
app.use('/editTask', editTask)

try {
    mongoose.connect('mongodb+srv://saurav:saurav@cluster0.vjdimrq.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000, () => {
    console.log('server is Working!! 5000');
})