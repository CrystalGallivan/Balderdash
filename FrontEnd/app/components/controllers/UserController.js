import UserService from "../services/UserService.js";

const _userService = new UserService()

function _drawUser() {
  let template = _userService.User.userTemplate()
  document.getElementById('user-greeting').innerText = template
}

export default class UserController {
  constructor() {
    _userService.addSubscriber('user', _drawUser)
    _userService.getUser()
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