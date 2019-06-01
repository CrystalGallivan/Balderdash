export default class User {
  constructor(data) {
    this.name = data.name || "User"
  }

  get UserTemplate() {
    return `Hello ${this.name}!`
  }
}