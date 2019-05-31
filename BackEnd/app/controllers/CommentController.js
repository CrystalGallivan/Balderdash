import express from 'express'
import CommentService from '../services/CommentService';

let _service = new CommentService()
let _repo = _service.repository

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllComments)
      .get('/:id', this.getComment)
      .post('', this.createComment)
      .delete('/:id', this.deleteComment)
      .put('/:id', this.voteComment)
      .use('*', this.defaultRoute)
  }
  async getAllComments(req, res, next) {
    try {
      let comments = await _repo.find({})
      return res.send(comments)
    } catch (error) { next(error) }
  }
  async getComment(req, res, next) {
    try {
      let comment = await _repo.findById(req.params.id)
      return res.send(comment)
    } catch (error) { next(error) }
  }
  async createComment(req, res, next) {
    try {
      let comment = await _repo.create(req.body)
      return res.status(201).send(comment)
    } catch (error) { next(error) }
  }
  async deleteComment(req, res, next) {
    try {
      let comment = await _repo.findByIdAndDelete(req.params.id)
      return res.send('Comment Deleted')
    } catch (error) { next(error) }
  }
  async voteComment(req, res, next) {
    try {
      let comment = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (comment) {
        return res.send(comment)
      } throw new Error('Invalid Comment')
    } catch (error) { next(error) }
  }
  defaultRoute(req, res, send) {
    return res.status(404).send('No Such Comment')
  }
}