// IMPORT MODULES
import  { Schema, model, Document } from 'mongoose';


// INTERFACE MODEL
export interface IPost extends Document {
    title: string,
    url: string,
    content: string,
    image: string,
    date: Date,
    updateAt?: Date
};


// DATA MODEL
const PostSchema = new Schema({
    title: {
        type: String,
        required: [ true, 'El titulo es requerido' ]
    },
    url: {
        type: String,
        required: [ true, 'La url es requerida' ],
        unique: true,
        lowercase: true 
    },
    content: {
        type: String,
        required: [ true, 'El contenido es requerido' ] 
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

const Post = model<IPost>('Post', PostSchema);

export default Post;