"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT RESPONSE
const user_1 = require("../../networks/response/user");
// IMPORT STORE
const store_1 = require("./store");
class UserController {
    constructor() { }
    static addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Data and Execute Store Methods.
                const userData = req.body;
                const newUser = yield store_1.UserStore.add(userData);
                // Response Success.
                return user_1.response.success(req, res, newUser, 201);
            }
            catch (err) {
                // Response Error.
                return user_1.response.error(req, res, err, 500);
            }
        });
    }
    static allUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Execute Store Methods for Data Search.
                const allUser = yield store_1.UserStore.all();
                // Response Success.
                return user_1.response.success(req, res, allUser, 200);
            }
            catch (err) {
                // Response Error.
                return user_1.response.error(req, res, err, 500);
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Parameters and Execute Data Search Methods.
                const { id } = req.params;
                const user = yield store_1.UserStore.get(id);
                // Validate if there is a Found Data.
                if (!user) {
                    let err = `El ID del Usuario no es correcto`;
                    return user_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return user_1.response.success(req, res, user, 200);
            }
            catch (err) {
                // Response Error.
                return user_1.response.error(req, res, err, 500);
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute update methods.
                const { id } = req.params;
                const updateUser = req.body;
                const user = yield store_1.UserStore.update(id, updateUser);
                // Validate if there is a Found Data.
                if (!user) {
                    let err = `No se a podido actualizar el registro. El ID del Usuario no es correcto`;
                    return user_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return user_1.response.success(req, res, user, 200);
            }
            catch (err) {
                // Response Error.
                return user_1.response.error(req, res, err, 500);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute delete methods.
                const { id } = req.params;
                const deletedUser = yield store_1.UserStore.delete(id);
                // Validate if there is a Found Data.
                if (!deletedUser) {
                    let err = `No se a podido eliminar el registro. El ID del Usuario no es correcto`;
                    return user_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return user_1.response.success(req, res, deletedUser, 200);
            }
            catch (err) {
                // Response Error.
                return user_1.response.error(req, res, err, 500);
            }
        });
    }
}
exports.UserController = UserController;
