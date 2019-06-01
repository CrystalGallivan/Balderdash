import UserController from "./components/controllers/UserController.js";
import PostController from "./components/controllers/PostController.js";
import CommentController from "./components/controllers/CommentController.js";
import UserService from "../..services/UserService.js"

let userService = new UserService()

class App {
  constructor() {
    this.controllers = {
      userController: new UserController(userService),
      postController: new PostController(userService),
      commentController: new CommentController(userService)
    }
  }
}

window['app'] = new App()