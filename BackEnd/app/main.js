import express from 'express'
import './db/dbconfig'

let server = express()
let port = 3000
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())


//register routes

import UserController from './controllers/UserController';
import GIFController from './controllers/GIFController';


server.use('/api/users', new UserController().router)
server.use('/api/gif', new GIFController().router)


//default error handler

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
  console.log("yeet " + port)
})