import { findMany, insert, findOne } from "../repository/responsible.js";
import { Request, Response } from "express";
import { Responsible } from "../protocols.js";

export async function findResponsible(req: Request, res: Response) {
    const id = req.query.id
    if(id && Number.isNaN(Number(id))) return res.sendStatus(400)
    try {
        if(id) {
            const result = (await findOne(Number(id))).rows[0]
            if (!result) return res.sendStatus(404)
            return res.send(result)
        }
        return res.status(200).send((await findMany()).rows)
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export async function insertResponsible(req: Request, res: Response) {
    const obj = req.body as Omit<Responsible, 'id'>

    try {
        await insert(obj.name)
        return res.sendStatus(201)
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}