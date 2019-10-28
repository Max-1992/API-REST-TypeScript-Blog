"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = require("express");
// IMPORT CONTROLLER
const controller_1 = require("./controller");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', controller_1.PostController.allPost);
        this.router.get('/:id', controller_1.PostController.getPost);
        this.router.post('/', controller_1.PostController.addPost);
        this.router.put('/:id', controller_1.PostController.updatePost);
        this.router.delete('/:id', controller_1.PostController.deletePost);
    }
}
exports.PostRoutes = PostRoutes;
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
