export default class User {
  constructor(data) {
    this.name = data.name || "User",
      this._id = data._id
  }

  get UserTemplate() {
    return `Hello ${this.name}!`
  }
}