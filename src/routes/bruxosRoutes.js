import { Router } from "express";
import * as BruxoController from './../controllers/bruxoControllers.js'

const router = Router();

//Rota GetAll em  
router.get("/", BruxoController.listarTodos);
// Rota getById 
router.get("/:id", BruxoController.listarUm);
//Rota Create (post)
router.post("/", BruxoController.criar);
// Rota delete 
router.delete ("/:id", BruxoController.apagar );
// Rota atualizar 
router.put ("/:id", BruxoController.atualizar);

export default router;