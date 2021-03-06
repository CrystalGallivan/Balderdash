import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  userId: { type: ObjectId, ref: "user", required: true },
  imgURL: { type: String, required: true }
})



export default class PostService {
  get repository() {
    return mongoose.model("post", _schema)
  }
}