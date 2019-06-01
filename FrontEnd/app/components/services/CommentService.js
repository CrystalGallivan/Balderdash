import Comment from "../../models/Comment.js";
import UserService from "./UserService.js";

const commentApi = axios.create({
  baseURL: '//localhost:3000/api/comments'
})
let _userService = new UserService()
let _state = {
  comments: {}
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

  get Comments() {
    return _state.comments
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getComments() {
    commentApi.get('')
      .then(res => {
        let comments = res.data.map(p => new Comment(p))
        let dict = {}
        comments.forEach(c => {
          if (!dict[c.postId]) {
            dict[c.postId] = []
          }
          dict[c.postId].push(c)
        })
        setTimeout(() => {
          setState('comments', dict)
        }, 2000)
      })
      .catch(err => console.error(err))
  }

  addComment(comment) {
    comment.authorId = _userService.User._id
    commentApi.post('', comment)
      .then(res => {
        let newComment = new Comment(res.data)
        _state.comments.push(newComment)
        this.getComments()
      })
      .catch(err => console.error(err))
  }
  upVote(id) {
    commentApi.put(id + '/up')
      .then(res => {
        this.getComments()
      })
  }
  downVote(id) {
    commentApi.put(id + '/down')
      .then(res => {
        this.getComments()
      })
  }


  removeComment(commentId) {
    let comment = _state.comments.find(comment => comment.id == commentId)
    commentApi.delete(commentId, comment)
      .then(res => {
        this.getComments()
      })
      .catch(err => console.error(err))
  }
}