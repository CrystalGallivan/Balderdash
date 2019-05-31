export default class User {
  constructor(data) {
    this.name = data.name
  }

  userTemplate() {
    return `Hello ${this.name}!`
  }
}