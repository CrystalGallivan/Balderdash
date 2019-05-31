import CommentService from "../services/CommentService.js";

const _commentService = new CommentService()

function _drawComment() {

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
      description: form.comments.description.value
    }
    form.reset()
    _commentService.addComment(comment)
  }

  removeComment(commentId) {
    _commentService.removeComment(commentId)
  }
}