import UserController from "./components/controllers/UserController.js";


class App {
  constructor() {
    this.controllers = {
      userController: new UserController(),
    }
  }
}

window['app'] = new App()