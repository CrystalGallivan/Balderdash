export default class User {
  constructor(data) {
    this.name = data.name
  }

  get userTemplate() {
    return `<h6> Hello ${this.name}! </h6>`
  }
}