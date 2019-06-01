export default class Comment {
  constructor(data) {
    this.comment = data.description
    this.upVote = data.upVotes
    this.downVote = data.downVotes
    this.postId = data.postId
    this._id = data._id
  }

  get CommentTemplate() {
    return `
              <div class="col-12">

  <div class="row justify-content-left ml-2">
    <div class="col-1 p-0 mr-1 align-content-center text-center"><img src="assets/img/svg/008-funny.svg"
      class="img-fluid" alt="upvote"onclick="app.controllers.commentController.upVote('${this._id}')">
    </div>
      <div class="col-1">${this.upVote}</div>
      <div class="col-1 p-0 align-content-center text-center"><img
        src="assets/img/svg/009-poo.svg" class="img-fluid" alt="downvote" onclick="app.controllers.commentController.downVote('${this._id}')"></div>
        <div class="col-1">${this.downVote}</div>
        <div class="col-6">
        <p class="comment-size">${this.comment}</p></div>
      </div>
    </div>`
  }
}

