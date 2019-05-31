import PostService from "../services/PostService.js";

const _postService = new PostService()

function _drawPost() {
  let post = _postService.Post
  let template = ''
  post.forEach(post => {
    template += post.postTemplate
  })
  document.getElementById('post-body').innerHTML = template

}

export default class PostController {
  constructor() {
    _postService.addSubscriber('posts', _drawPost)
    _postService.getPost()
  }

  addPost(event) {
    event.preventDefault()
    var form = event.target
    var post = {
      //might need to change
      description: form.url.value
    }
    form.reset()
    _postService.addPost(post)
  }

  removePost(postId) {
    _postService.removePost(postId)
  }
}