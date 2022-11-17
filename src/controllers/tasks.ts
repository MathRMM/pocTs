import { Request, Response } from "express";
import { Tasks } from "../protocols.js";
import { deleteTasks, findMany, findOne, insert, update } from "../repository/tasks.js";

export async function findTasks(req: Request, res: Response) {
    const id = req.query.id
    if(id && Number.isNaN(Number(id))) return res.sendStatus(400)
    try {
        if(id) {
            const result = await findOne(Number(id))
            if (!result) return res.sendStatus(404)
            return res.send(result)
        }
        return res.status(200).send(await findMany())
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export async function insertTasks(req: Request, res: Response) {
    const newTask = req.body as Omit<Tasks, 'id' | 'finish'>

    try {
        await insert(newTask)
        return res.sendStatus(201)
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export async function deleteTasksC(req: Request, res: Response) {
    const id = Number(req.params.id)
    if(!id) return res.sendStatus(400)

    try {
        await deleteTasks(id);
        return res.sendStatus(200);
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export async function updateTask(req: Request, res: Response){
    const newTasks = req.body as Tasks

    try {
        await update(newTasks)
        return res.sendStatus(200);
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}