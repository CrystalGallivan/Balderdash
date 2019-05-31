import CommentService from "../services/CommentService.js";

const _commentService = new CommentService()

function _drawComment() {
  let template = ''

}

export default class CommentController {
  constructor() {
    _commentService.addSubscriber('comments', _drawComment)
    _commentService.getComment()
  }

  addComment(event) {
    event.preventDefault()
    var form = event.target
    var comment = {
      //might need to change
      comment: form.comment.value
    }
    form.reset()
    _commentService.addComment(postId)
  }

  removeComment(commentId) {
    _commentService.removeComment(commentId)
  }
}