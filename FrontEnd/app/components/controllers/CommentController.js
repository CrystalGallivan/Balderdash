import CommentService from "../services/CommentService.js";

let _commentService

function _drawComment() {
  let template = ''

}

export default class CommentController {
  constructor(userService) {
    _commentService = new CommentService(userService)
    _commentService.addSubscriber('comments', _drawComment)
    _commentService.getComment()
  }

  addComment(event, postId) {
    event.preventDefault()
    var form = event.target
    var comment = {
      //might need to change
      description: form.comment.value,
      postId
    }
    form.reset()
    _commentService.addComment(comment)
  }

  removeComment(commentId) {
    _commentService.removeComment(commentId)
  }
}