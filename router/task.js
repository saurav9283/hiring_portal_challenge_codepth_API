import express from 'express';
import {addTask, deleteTask, editTask, getAllTask} from '../controller/taskController.js'
const router = express.Router()

router.post('/', addTask)
router.get('/', getAllTask)
router.delete('/:taskId', deleteTask)
router.put('/:taskId', editTask)

export default router;