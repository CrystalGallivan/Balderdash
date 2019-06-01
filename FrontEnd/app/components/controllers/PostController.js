import PostService from "../services/PostService.js";

let _postService

function _drawPost() {
  let post = _postService.Post
  let template = ''
  post.forEach(post => {
    template += post.postTemplate
  })
  document.getElementById('post-body').innerHTML = template
}

export default class PostController {
  constructor(userService) {
    _postService = new PostService(userService)
    _postService.addSubscriber('posts', _drawPost)
    _postService.getPost()
  }

  addPost(event) {
    event.preventDefault()
    var form = event.target
    var post = {
      //might need to change
      imgURL: form.url.value
    }
    form.reset()
    _postService.addPost(post)
  }

  removePost(postId) {
    _postService.removePost(postId)
  }
}