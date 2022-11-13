import { connection } from "../database/db.js";
import { QueryResult } from "pg"
import { Tasks } from "../protocols.js";

function findMany(): Promise<QueryResult<Tasks>> {
    return connection.query(`
        SELECT 
            tasks.*,
            users.name AS "responsible"
        FROM tasks
        JOIN users ON users.id = tasks."userId";
    `)
}

function findOne(id : number): Promise<QueryResult<Tasks>> {
    return connection.query(`
        SELECT 
            tasks.*,
            users.name AS "responsible"
        FROM tasks
        JOIN users ON users.id = tasks."userId"
        WHERE  tasks.id = $1;
    `, [id])
}

function insert(obj: Omit<Tasks, 'id' | 'finish'>): Promise<QueryResult> {
    return connection.query(`
        INSERT INTO tasks (name, day, finish, "userId")
        VALUES ($1, $2, $3, $4)
    `, [obj.name, obj.day, false, obj.userId])
}

function deleteTasks(id: number) {
    return connection.query(`
        DELETE FROM tasks WHERE id = $1
    `, [id])
}

function update(obj: Tasks): Promise<QueryResult> {
    return connection.query(`
        UPDATE tasks
        SET
            name = $1,
            day = $2, 
            finish = $3, 
            "userId" = $4
        WHERE id = $5
    `, [obj.name, obj.day, obj.finish, obj.userId, obj.id])
}

export {
    findMany,
    insert,
    deleteTasks,
    update,
    findOne
}