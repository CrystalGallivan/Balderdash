export default class Post {
  constructor(data) {
    this.url = data.imgURL,
      this.userName = data.userId,
      this.postId = data._id
  }

  get postTemplate() {
    return ` <div class="col-5 p-3 mb-3 mx-3 rounded bg-info">
            <div class="row align-items-center justify-content-center pb-3">
              <div class="col-3">
                <h6>Poster:</h6>
              </div>
              <div class="col-7 align-items-center" id="post-username">
                <h6 class="text-center">${this.userName}</h6>
              </div>
            </div>
            <div class="row justify-content-center">
              <img src="${this.url}" alt="">
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
            <div class="row" id="post-comments-${this.postId}">
            </div>
          </div>`
  }
}