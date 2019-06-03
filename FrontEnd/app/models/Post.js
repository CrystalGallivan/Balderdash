export default class Post {
  constructor(data) {

    this.url = data.imgURL,
      this.userName = data.userId.name,
      this.postId = data._id
  }

  get postTemplate() {
    return `  <div class="col-5 p-3 mb-3 mx-3 rounded bg-info border">
            <div class="row align-items-center justify-content-center pb-3">
              <div class="col-3">
                <img src="assets/img/svg/003-hipster.svg" class="icon" alt="user">
                <h6>Poster:</h6>
              </div>
              <div class="col-7 align-items-center" id="post-username">
                <h6 class="text-center">${this.userName}</h6>
              </div>
            </div>
            <div class="row justify-content-center">
              <img src="${this.url}" alt="" class="img-height">
            </div>
            <div class="row justify-content-center mt-2">
              <form onsubmit="app.controllers.commentController.addComment(event, '${this.postId}')">
                <div class="form-row">
                  <div class="col-auto">
                    <input type="text" name="comment">
                  </div>
                </div>
              </form>
            </div>
            <div class="row" id="post${this.postId}-comments">
              
            </div>
          </div>`
  }
}