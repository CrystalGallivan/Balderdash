import Post from "../../models/Post.js";


const postApi = axios.create({
  baseURL: '//localhost:3000/api/posts'
})

let _userService

let _state = {
  posts: []
}

let _subscribers = {
  posts: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class PostService {
  constructor(userService) {
    _userService = userService
  }

  get Post() {
    return _state.posts
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getPost() {
    postApi.get()
      .then(res => {
        let data = res.data.map(p => new Post(p))
        setState('posts', data)
      })
      .catch(err => console.error(err))
  }

  addPost(post) {
    post.userId = _userService.User._id
    postApi.post('', post)
      .then(res => {
        let newPost = new Post(res.data)
        _state.posts.push(newPost)
        this.getPost()
      })
      .catch(err => console.error(err))
  }

  removePost(postId) {
    let post = _state.posts.find(post => post.id == postId)
    postApi.delete(postId, post)
      .then(res => {
        this.getPost()
      })
      .catch(err => console.error(err))
  }
}