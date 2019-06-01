export default class Comment {
  constructor(data) {
    this.comment = data.comment
  }

  get CommentTemplate() {
    return `
              <div class="col-12">
                <div class="row justify-content-left">
                  <div class="col-1rounded-circle"></div>
                  <div class="col-1 bg-danger rounded-circle">V</div>
                  <div class="col-9">${this.comment}</div>`
  }
}