"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROUTES VIEWS
const network_1 = __importDefault(require("../../components/home/network"));
// ROUTES API
const network_2 = __importDefault(require("../../components/post/network"));
const network_3 = __importDefault(require("../../components/user/network"));
class Routes {
    constructor(server) {
        // Views
        server.use('/', network_1.default);
        // Api
        server.use('/api/post', network_2.default);
        server.use('/api/user', network_3.default);
    }
}
exports.Routes = Routes;
