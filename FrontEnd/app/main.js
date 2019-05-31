import UserController from "./components/controllers/UserController.js";
import PostController from "./components/controllers/PostController.js";
import CommentController from "./components/controllers/CommentController.js";


class App {
  constructor() {
    this.controllers = {
      userController: new UserController(),
      postController: new PostController(),
      commentController: new CommentController()
    }
  }
}

window['app'] = new App()