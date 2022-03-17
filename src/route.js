const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')


const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'})) /* com a implementação das parts, alteramos de create-pass para index, pq estamos utilizando a mesma "base" só mudando o conteúdo da parts*/

route.get('/room/:room', (req, res) => res.render("room"))

// Formato que o formulário de dentro do modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route;