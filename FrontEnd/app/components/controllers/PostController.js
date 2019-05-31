import PostService from "../services/PostService";

const _postService = new PostService()

function _drawPost() {

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
      description: form.posts.description.value
    }
    form.reset()
    _postService.addPost(post)
  }

  removePost(postId) {
    _postService.removePost(postId)
  }
}