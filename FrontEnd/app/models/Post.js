export default class Post {
  constructor(data) {
    this.imgURL = data.url,
      this.userId = data.userName
  }

  get postTemplate() {
    return ` <div class="col-5 p-3 mb-2 mx-3 rounded bg-info">
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

            <div class="row" id="post-comments">
            </div>
          </div>`
  }
}