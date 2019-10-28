"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const express_1 = require("express");
class HomeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => {
            res.send('Api: /api/post');
        });
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;
