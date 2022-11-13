import { connection } from "../database/db.js";
import { QueryResult } from "pg"
import { Responsible } from "../protocols.js";

function findMany(): Promise<QueryResult<Responsible>>{
    return connection.query(`
        SELECT * FROM users;
    `)
}

function findOne(id: number): Promise<QueryResult<Responsible>>{
    return connection.query(`
        SELECT * FROM users  WHERE id = $1;
    `, [id])
}

function insert(name: string): Promise<QueryResult>{
    return connection.query(`
        INSERT INTO users (name)
        VALUES ($1)
    `, [name])
}

export {
    findMany,
    insert,
    findOne
}