import cors from 'cors'
import express from 'express'
import './db/dbconfig'

let server = express()
let port = 3000
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())
server.use(cors())


//register routes

import UserController from './controllers/UserController';
import PostController from './controllers/PostController';
import CommentController from './controllers/CommentController';


server.use('/api/users', new UserController().router)
server.use('/api/posts', new PostController().router)
server.use('/api/comments', new CommentController().router)

//default error handler

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
  console.log("Running on port " + port)
})