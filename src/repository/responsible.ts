
import { Responsible } from "../protocols.js";
import prisma from '../database/db.js';

function findMany(): Promise<Array<Responsible>> {
    return prisma.users.findMany();
}

function findOne(id: number): Promise<Responsible>{
    return prisma.users.findUnique({
        where:{
            id,
        },
        include:{
            tasks:true
        }
    })
}

function insert(name: string){
    return prisma.users.create({
        data:{
            name
        }
    })
}

export {
    findMany,
    insert,
    findOne
}