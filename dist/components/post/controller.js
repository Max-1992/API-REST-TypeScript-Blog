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
const post_1 = require("../../networks/response/post");
// IMPORT STORE
const store_1 = require("./store");
class PostController {
    constructor() { }
    static addPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Data and Execute Store Methods.
                const postData = req.body;
                const newPost = yield store_1.PostStore.add(postData);
                // Response Success.
                return post_1.response.success(req, res, newPost, 201);
            }
            catch (err) {
                // Response Error.
                return post_1.response.error(req, res, err, 500);
            }
        });
    }
    static allPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Execute Store Methods for Data Search.
                const allPost = yield store_1.PostStore.all();
                // Response Success.
                return post_1.response.success(req, res, allPost, 200);
            }
            catch (err) {
                // Response Error.
                return post_1.response.error(req, res, err, 500);
            }
        });
    }
    static getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture Parameters and Execute Data Search Methods.
                const { id } = req.params;
                const post = yield store_1.PostStore.get(id);
                // Validate if there is a Found Data.
                if (!post) {
                    let err = `El ID del Post no es correcto`;
                    return post_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return post_1.response.success(req, res, post, 200);
            }
            catch (err) {
                // Response Error.
                return post_1.response.error(req, res, err, 500);
            }
        });
    }
    static updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute update methods.
                const { id } = req.params;
                const updatePost = req.body;
                const post = yield store_1.PostStore.update(id, updatePost);
                // Validate if there is a Found Data.
                if (!post) {
                    let err = `No se a podido actualizar el registro. El ID del Post no es correcto`;
                    return post_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return post_1.response.success(req, res, post, 200);
            }
            catch (err) {
                // Response Error.
                return post_1.response.error(req, res, err, 500);
            }
        });
    }
    static deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Capture data and execute delete methods.
                const { id } = req.params;
                const deletedPost = yield store_1.PostStore.delete(id);
                // Validate if there is a Found Data.
                if (!deletedPost) {
                    let err = `No se a podido eliminar el registro. El ID del Post no es correcto`;
                    return post_1.response.notFound(req, res, err, 404);
                }
                // Response Success.
                return post_1.response.success(req, res, deletedPost, 200);
            }
            catch (err) {
                // Response Error.
                return post_1.response.error(req, res, err, 500);
            }
        });
    }
}
exports.PostController = PostController;
