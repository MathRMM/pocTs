import { Router } from "express";
import { findResponsible, insertResponsible } from "../controllers/responsible.js";

const responsibleRouter = Router()

responsibleRouter.get( '/responsible', findResponsible)
responsibleRouter.post( '/responsible', insertResponsible)

export default responsibleRouter