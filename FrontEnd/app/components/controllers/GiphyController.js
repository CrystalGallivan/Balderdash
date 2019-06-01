import GiphyService from "../services/GiphyService";


let _giphyService = new GiphyService()

function _drawGiphy() {
  let giphy = _giphyService.giphy
  let template = ''
  giphy.forEach(giphy => {
    template += giphy.giphyTemplate
  })
  document.getElementById('post-body').innerHTML = template
}

export default class GiphyController {
  constructor(userService) {
    _giphyService = new GiphyService(userService)
    _giphyService.addSubscriber('posts', _drawGiphy)
    _giphyService.getgiphy()
  }
}