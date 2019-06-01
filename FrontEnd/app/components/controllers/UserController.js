import UserService from "../services/UserService.js";

let _userService

function _drawUser() {
  let user = _userService.User
  let template = user.userTemplate
  document.getElementById('user-greeting').innerText = template
}

export default class UserController {
  constructor() {
    _userService.addSubscriber('user', _drawUser)
    _userService.getUser()
  } userService
  _userService = userService

  findUser(event) {
    event.preventDefault()
    var form = event.target
    var name = {
      name: form.name.value
    }
    form.reset()
    _userService.findMyUser(name)
  }

  addUser(event) {
    event.preventDefault()
    var form = event.target
    var user = {
      name: form.name.value
    }
    form.reset()
    _userService.addUser(user)
  }

  removeUser(userName) {
    _userService.removeUser(userName)
  }
}