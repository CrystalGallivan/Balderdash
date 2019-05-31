export default class User {
  constructor(data) {
    this.name = data.name || "User"
  }

  get userTemplate() {
    return `Hello ${this.name}!`
  }
}