// IMPORT MODEL
import User, { IUser } from './model';



export class UserStore {

    constructor() {}

   static async add( userData: IUser ): Promise<IUser> {
                    try {
                        // Store User
                        const newUser: IUser = new User(userData)
                        newUser.password = await newUser.encryptPassword(newUser.password);
                        const user: IUser = await newUser.save();
                        return user;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async all(): Promise<IUser[]> {
                    try {
                        // Find All User
                        const allUser: IUser[] = await User.find({}, { password: 0 }).populate('posts').sort({ createAt: 'desc' }).exec();
                        return allUser;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async get( id: string ): Promise<IUser | null> {
                   try {   
                       // Find User
                       const user: IUser | null = await User.findById(id, { password: 0 }).populate('posts').exec();
                       return user;
                   } catch (err) {
                       return Promise.reject(err);
                   }
                }


   static async update( id: string, userData: IUser ): Promise<IUser | null> {
                    try {
                        // Update User
                        const user: IUser | null = await User.findByIdAndUpdate(id, userData, { new: true });
                        return user;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async delete( id: string ): Promise<IUser | null> {
                    try {
                       // Deleted User
                       const deletedUser: IUser | null = await User.findByIdAndDelete(id);
                       return deletedUser;
                    } catch (err) {
                       return Promise.reject(err);
                    }
                }

}