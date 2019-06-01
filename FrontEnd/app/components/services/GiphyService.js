import Giphy from "../../models/Giphy";
import { TIMEOUT } from "dns";

const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/random?api_key=Dg89Yl6yJ6vKf6f4JQZTEdUMJNsflWtW',
  timeout: 3000
})

let _userService

let _state = {
  giphys: []
}

let _subscribers = {
  giphys: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class GiphyService {
  constructor(userService) {
    _userService = userService
  }

  get giphy() {
    return _state.giphys
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getgiphy() {
    giphyApi.get()
      .then(res => {
        console.log(res)
        let data = res.data.map(g => new
          Giphy(g))
        setState('giphys', data)
      })
      .catch(err => console.error(err))
  }

  addgiphy(giphy) {
    giphy.userId = _userService.User._id
    giphyApi.giphy('', giphy)
      .then(res => {
        // let newgiphy = new giphy(res.data)
        _state.giphys.push(res.data)
        this.getgiphy()
      })
      .catch(err => console.error(err))
  }

  removegiphy(giphyId) {
    let giphy = _state.giphys.find(giphy => giphy.id == giphyId)
    giphyApi.delete(giphyId, giphy)
      .then(res => {
        this.getgiphy()
      })
      .catch(err => console.error(err))
  }
}