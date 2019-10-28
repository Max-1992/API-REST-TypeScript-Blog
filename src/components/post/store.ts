// IMPORT MODEL
import Post, { IPost } from './model';



export class PostStore {

    constructor() {}

   static async add( postData: IPost ): Promise<IPost> {
                    try {
                        // Store Post
                        const newPost: IPost = new Post(postData)
                        const post: IPost = await newPost.save();
                        return post;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async all(): Promise<IPost[]> {
                    try {
                        // Find All Posts
                        const allPost: IPost[] = await Post.find().sort({ date: 'desc' }).exec();
                        return allPost;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async get( id: string ): Promise<IPost | null> {
                   try {   
                       // Find Post
                       const post: IPost | null = await Post.findById(id);
                       return post;
                   } catch (err) {
                       return Promise.reject(err);
                   }
                }


   static async update( id: string, postData: IPost ): Promise<IPost | null> {
                    try {
                        // Update Post
                        const post: IPost | null = await Post.findByIdAndUpdate(id, postData, { new: true });
                        return post;
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }


   static async delete( id: string ): Promise<IPost | null> {
                    try {
                       // Deleted Post
                       const deletedPost: IPost | null = await Post.findByIdAndDelete(id);
                       return deletedPost;
                    } catch (err) {
                       return Promise.reject(err);
                    }
                }

}