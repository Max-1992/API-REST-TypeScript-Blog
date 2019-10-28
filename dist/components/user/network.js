"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = require("express");
// IMPORT CONTROLLER
const controller_1 = require("./controller");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', controller_1.UserController.allUser);
        this.router.get('/:id', controller_1.UserController.getUser);
        this.router.post('/', controller_1.UserController.addUser);
        this.router.put('/:id', controller_1.UserController.updateUser);
        this.router.delete('/:id', controller_1.UserController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
