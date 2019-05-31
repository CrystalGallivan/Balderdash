import User from "../../models/User.js";

const userApi = axios.create({
  baseURL: '//localhost:3000/api/users'
})

let _state = {
  user: {}
}

let _subscribers = {
  user: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class UserService {
  get User() {
    debugger
    return _state.user
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getUser() {
    userApi.get()
      .then(res => {
        let data = res.data.map(u => new User(u))
        setState('user', data)
      })
      .catch(err => console.error(err))
  }

  findMyUser(name) {
    userApi.get()
      .then(res => {
        let data = res.data.map(u => new User(u))
        data.filter(user => data.user.name == name)
        setState('user', data)
      })
      .catch(err => console.error(err))
  }

  addUser(user) {
    userApi.post('', user)
      .then(res => {
        let newUser = new User(res.data)
        setState('user', newUser)
      })
      .catch(err => console.error(err))
  }

  removeUser(userName) {
    let user = _state.user.find(user => user.name == userName)
    userApi.delete(userName, user)
      .then(res => {
        this.getUser()
      })
      .catch(err => console.error(err))
  }
}