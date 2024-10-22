import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

//para que o json seja aceito 
app.use(express.json())

//adicionar usuários
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,

        }
    })
    res.status(201).json(req.body)
})

//listar usuários
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)

})

//editar usuário
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })
    res.status(201).json(req.body)
})

//deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json({ message: 'usuário deletado com sucesso!' })
})

//porta a ser acessada 
app.listen(3000)



//banco lucashandrade ikiniLXSbDXw7.v