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
class UserStore {
    constructor() { }
    static add(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Store User
                const newUser = new model_1.default(userData);
                newUser.password = yield newUser.encryptPassword(newUser.password);
                const user = yield newUser.save();
                return user;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find All User
                const allUser = yield model_1.default.find({}, { password: 0 }).populate('posts').sort({ createAt: 'desc' }).exec();
                return allUser;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find User
                const user = yield model_1.default.findById(id, { password: 0 }).populate('posts').exec();
                return user;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static update(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update User
                const user = yield model_1.default.findByIdAndUpdate(id, userData, { new: true });
                return user;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Deleted User
                const deletedUser = yield model_1.default.findByIdAndDelete(id);
                return deletedUser;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
exports.UserStore = UserStore;
