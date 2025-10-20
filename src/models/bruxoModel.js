//A consulta para o banco e dados fazeos no model
// ex: SELECT *FROM bruxos; poré estamos usando o PRISMA que abstrai o comando SQL

// Import o prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Crio a variavel findAll e já exporto
export const findAll = async () => {
    //SELECT * FROM bruxos findMany
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc'}
    })
} 

// Cria a variavel findById e já exporto
export const findById = async (id) => {
    //SELECT * FROM bruxos WHERE id = 1;
    return await prisma.bruxo.findUnique ({
        where: { id: Number(id) }
    })
} 
