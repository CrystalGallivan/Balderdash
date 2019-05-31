import express from 'express'
import GIFService from '../services/GIFService'

let _service = new GIFService()
let _repo = _service.repository


export default class GIFController {
  constructor() {
    this.router = express.Router()
      .post('', this.createGIF)
      .get('', this.getAllGIFs)
      .get('/:id', this.getGIF)
      .delete('/:id', this.deleteGIF)
      .use('*', this.defaultRoute)
  }

  async getGIF(req, res, next) {
    try {
      let gif = await _repo.findById(req.params.id)
      return res.send(gif)
    } catch (error) { next(error) }
  }
  async getAllGIFs(req, res, next) {
    try {
      let gifs = await _repo.find({})
      return res.send(gifs)
    } catch (error) {
      next(error)

    }
  }
  async createGIF(req, res, next) {
    try {
      let gif = await _repo.create(req.body)
      return res.status(201).send(gif)
    } catch (error) { next(error) }
  }
  async deleteGIF(req, res, next) {
    try {
      let gif = await _repo.findByIdAndDelete(req.params.id)
      return res.send('Post Deleted')
    } catch (error) { next(error) }
  }
  defaultRoute(req, res, next) {
    res.status(404).send('Bad Route')
  }
}