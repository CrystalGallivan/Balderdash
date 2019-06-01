import express from 'express'
import CommentService from '../services/CommentService';

let _service = new CommentService()
let _repo = _service.repository

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllComments)
      .get('/:id', this.getComment)
      .get('/:postId/post-comments', this.getCommentsByPost)
      .post('', this.createComment)
      .delete('/:id', this.deleteComment)
      .put('/:id/up', this.upVote)
      .put('/:id/down', this.downVote)
      .use('*', this.defaultRoute)
  }
  async  getCommentsByPost(req, res, next) {
    try {
      let comments = await _repo.find({ postId: req.params.postId })
      return res.send(comments)
    } catch (error) { next(error) }
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
  async upVote(req, res, next) {
    try {
      let comment = await _repo.findById(req.params.id)
      comment.upVotes++
      await comment.save()
      return res.send(comment)
    } catch (error) { next(error) }
  }
  async downVote(req, res, next) {
    try {
      let comment = await _repo.findById(req.params.id)
      comment.downVotes--
      await comment.save()
      return res.send(comment)
    } catch (error) { next(error) }
  }
  defaultRoute(req, res, send) {
    return res.status(404).send('No Such Comment')
  }
}