import { Router } from 'express'
import { deleteTasksC, findTasks, insertTasks, updateTask } from "../controllers/tasks.js";

const taskRouter = Router()

taskRouter.get('/tasks', findTasks)
taskRouter.post('/tasks', insertTasks)
taskRouter.delete('/tasks', deleteTasksC)
taskRouter.put('/tasks', updateTask)

export default taskRouter