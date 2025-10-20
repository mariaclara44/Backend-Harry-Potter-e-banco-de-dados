import { Router } from "express";
import * as BruxoController from './../controllers/bruxoControllers.js'

const router = Router();

//Rota GetAll em  
router.get("/", BruxoController.listarTodos);
// Rota getById 
router.get("/:id", BruxoController.listarUm)

export default router;