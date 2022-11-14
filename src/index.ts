import express from 'express'
import { Request, Response } from 'express';
import taskRouter from './routes/tasks.js';
import responsibleRouter from './routes/responsible.js';

const server = express();
server.use(express.json());

server.get('/status', (req: Request, res: Response)=>{
    res.send('ok')
})

server.use(taskRouter)
server.use(responsibleRouter)

server.listen(5000, ()=> console.log('listen on port 5000'));