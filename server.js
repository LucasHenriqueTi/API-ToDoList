import express from 'express'

const app = express()
app.use(express.json())

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

app.listen(3000)

