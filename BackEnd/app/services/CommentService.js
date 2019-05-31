import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId


let _schema = new mongoose.Schema({
  authorId: { type: ObjectId, ref: 'user', required: true },
  postId: { type: ObjectId, ref: 'post', required: true },
  description: { type: String, required: true },
  upVotes: { type: Number, required: true, default: 0 },
  downVotes: { type: Number, required: true, default: 0 }

}, { timestamps: true })



export default class CommentService {
  get repository() {
    return mongoose.model("comment", _schema)
  }
}