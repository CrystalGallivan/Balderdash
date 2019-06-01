import Comment from "../../models/Comment.js";
import UserService from "./UserService.js";

const commentApi = axios.create({
  baseURL: '//localhost:3000/api/comments'
})
let _userService = new UserService()
let _state = {
  comments: []
}

let _subscribers = {
  comments: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class CommentService {
  constructor(userService) {

  }

  get Comment() {
    return _state.comments
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getComment() {
    commentApi.get()
      .then(res => {
        let data = res.data.map(p => new Comment(p))
        setState('comments', data)
      })
      .catch(err => console.error(err))
  }

  addComment(comment) {
    comment.authorId = _userService.User._id
    commentApi.post('', comment)
      .then(res => {
        let newComment = new Comment(res.data)
        _state.comments.push(newComment)
        this.getComment()
      })
      .catch(err => console.error(err))
  }

  removeComment(commentId) {
    let comment = _state.comments.find(comment => comment.id == commentId)
    commentApi.delete(commentId, comment)
      .then(res => {
        this.getComment()
      })
      .catch(err => console.error(err))
  }
}