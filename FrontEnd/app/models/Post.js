export default class Post {
  constructor(data) {
    this.url = data.imgURL,
      this.userName = data.name,
      this.postId = data._id
  }

  get postTemplate() {
    return `  <div class="col-5 p-3 mb-3 mx-3 rounded bg-info border">
            <div class="row align-items-center justify-content-center pb-3">
              <div class="col-3">
                <img src="assets/img/svg/003-hipster.svg" class="icon" alt="user">
                <h6>Poster: ${this.userName}</h6>
              </div>
              <div class="col-7 align-items-center" id="post-username">
                <h6 class="text-center">${this.userName}</h6>
              </div>
            </div>
            <div class="row justify-content-center">
              <img src="${this.url}" alt="" class="img-height">
            </div>
            <div class="row justify-content-center mt-2">
              <form onsubmit="app.controllers.commentController.addComment(event)">
                <div class="form-row">
                  <div class="col-1">button</div>
                  <div class="col-auto">
                    <input type="text" name="comment" class="post-input">
                  </div>
                </div>
              </form>
            </div>
            <div class="row" id="post-comments">
              <div class="col-12">
                comment template
                <div class="row justify-content-left ml-2">
                  <div class="col-1 p-0 mr-1 icon-bg align-content-center text-center"><img
                      src="assets/img/svg/008-funny.svg" class="img-fluid" alt="upvote">
                  </div>
                  <div class="col-1 p-0 icon-bg align-content-center text-center"><img src="assets/img/svg/009-poo.svg"
                      class="img-fluid" alt="downvote">
                  </div>
                  <div class="col-9">"This is the most beautiful thing"</div>
                </div>
              </div>
            </div>
          </div>`
  }
}