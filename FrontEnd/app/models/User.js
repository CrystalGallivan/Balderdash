export default class User {
  constructor(data) {
    this.name = data.name
  }

  get userTemplate() {
    return `Hello ${this.name}!`
  }
}