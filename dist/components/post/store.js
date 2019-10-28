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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODEL
const model_1 = __importDefault(require("./model"));
class PostStore {
    constructor() { }
    static add(postData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Store Post
                const newPost = new model_1.default(postData);
                const post = yield newPost.save();
                return post;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find All Posts
                const allPost = yield model_1.default.find().sort({ date: 'desc' }).exec();
                return allPost;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find Post
                const post = yield model_1.default.findById(id);
                return post;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static update(id, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update Post
                const post = yield model_1.default.findByIdAndUpdate(id, postData, { new: true });
                return post;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Deleted Post
                const deletedPost = yield model_1.default.findByIdAndDelete(id);
                return deletedPost;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
exports.PostStore = PostStore;
