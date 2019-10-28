"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT MODULES
const mongoose_1 = require("mongoose");
;
// DATA MODEL
const PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    url: {
        type: String,
        required: [true, 'La url es requerida'],
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        required: [true, 'El contenido es requerido']
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    }
});
const Post = mongoose_1.model('Post', PostSchema);
exports.default = Post;
