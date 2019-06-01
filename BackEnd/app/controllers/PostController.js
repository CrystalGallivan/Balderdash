import express from 'express'
import PostService from '../services/PostService'

let _service = new PostService()
let _repo = _service.repository


export default class PostController {
  constructor() {
    this.router = express.Router()
      .post('', this.createPost)
      .get('', this.getAllPosts)
      .get('/:id', this.getPost)
      .delete('/:id', this.deletePost)
      .use('*', this.defaultRoute)
  }

  async getPost(req, res, next) {
    try {
      let Post = await _repo.findById(req.params.id).populate('userId', "name")
      return res.send(Post)
    } catch (error) { next(error) }
  }
  async getAllPosts(req, res, next) {
    try {
      let Posts = await _repo.find({})
      return res.send(Posts)
    } catch (error) {
      next(error)

    }
  }
  async createPost(req, res, next) {
    try {
      let Post = await _repo.create(req.body)
      return res.status(201).send(Post)
    } catch (error) { next(error) }
  }
  async deletePost(req, res, next) {
    try {
      let Post = await _repo.findByIdAndDelete(req.params.id)
      return res.send('Post Deleted')
    } catch (error) { next(error) }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('Bad Route')
  }
}