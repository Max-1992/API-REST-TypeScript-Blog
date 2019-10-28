// IMPORT MODULES
import  { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';




// INTERFACE MODEL
export interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    createAt: Date,
    posts: any,
    encryptPassword: (password:string) => Promise<string>,
    comparePassword: (password:string) => Promise<boolean>
};


// DATA MODEL
const UserSchema = new Schema({
    username: {
        type: String,
        required: [ true, 'El nombre es requerido' ] 
    },
    email: {
        type: String,
        required: [ true, 'El email es requerido' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'La contraseña es requerido' ],
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

// ENCRYPTION METHOD SETTINGS
UserSchema.methods.encryptPassword = async ( password: string ): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
}


UserSchema.methods.comparePassword = async function( password: string ): Promise<boolean> {
    return await bcrypt.compare( password, this.password );
}

// EXPORT MODEL
const User = model<IUser>('User', UserSchema);

export default User;