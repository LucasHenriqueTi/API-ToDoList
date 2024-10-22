import express from 'express'

const app = express()

//para que o json seja aceito 
app.use(express.json())

// armazenamento de dados
const users = []

//adicionar usuarios
app.post('/usuarios', (req, res) => {

   users.push(req.body)
   
   res.status(201).json(req.body)
}) 

//listar usuarios
app.get('/usuarios', (req, res) => {

    res.status(200).json(users)

})

//porta a ser acessada 
app.listen(3000)

