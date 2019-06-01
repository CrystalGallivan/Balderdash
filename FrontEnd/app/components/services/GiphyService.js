const giphyApi = axios.create({
  baseURL: 'api.giphy.com'
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

export default class giphyService {
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
        let data = res.data.map(p => new giphy(p))
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