import PostController from "./components/controllers/PostController.js";
import UserController from "./components/controllers/UserController.js";
import UserService from "./components/services/UserService.js";
import CommentController from "./components/controllers/CommentController.js";



let userService = new UserService()

class App {
  constructor() {
    this.controllers = {
      postController: new PostController(userService),
      userController: new UserController(userService),
      commentController: new CommentController(userService)
    }
  }
}

window['app'] = new App()