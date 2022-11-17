import { QueryResult } from "pg"
import { Tasks } from "../protocols.js";
import prisma from '../database/db.js';

function findMany() {
    return  prisma.tasks.findMany();
}

function findOne(id : number){
    return prisma.tasks.findUnique({
        where:{
            id,
        }
    })
}

function insert(obj: Omit<Tasks, 'id' | 'finish'>) {
    return prisma.tasks.create({
        data:{
            name:obj.name,
            userId:obj.userId,
            day:obj.day,
            finish:false
        }
    })
}

function deleteTasks(id: number) {
    return prisma.tasks.delete({
        where:{
            id,
        }
    })
}

function update(obj: Tasks) {
    return prisma.tasks.update({
        where:{ id:obj.id },
        data:obj
    })
}

export {
    findMany,
    insert,
    deleteTasks,
    update,
    findOne
}