import pg from 'pg'

const {Pool} = pg

const databaseConfig:{} = {
    user: 'postgres',
    password: '582460',
    host: 'localhost',
    port: '5432',
    database: 'poc_fase1',
}

export const connection = new Pool(databaseConfig)