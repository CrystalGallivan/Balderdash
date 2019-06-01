import CommentService from "../services/CommentService.js";

let _commentService

function _drawComments() {
  let commentDict = _commentService.Comments
  for (let postId in commentDict) {
    if (postId == "undefined") continue //this is only here until corrupt data is gone
    let template = ''
    commentDict[postId].forEach(c => {
      template += c.CommentTemplate
    })
    document.getElementById(`post${postId}-comments`).innerHTML = template
  }
}

export default class CommentController {
  constructor(userService) {
    _commentService = new CommentService(userService)
    _commentService.addSubscriber('comments', _drawComments)
    _commentService.getComments()
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
  // upVote{
  // _commentService.
  // }
}