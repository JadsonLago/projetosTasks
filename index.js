const express = require('express')
const app = express()
const port = 3000

//Config

app.set('view engine', 'ejs')

//Rotas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Chamando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em:  http://localhost:${port}`)
})