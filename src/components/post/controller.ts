// IMPORT MODULES
import { Request, Response } from 'express';

// IMPORT RESPONSE
import { response } from '../../networks/response/post';

// IMPORT STORE
import { PostStore } from './store';

// IMPORT MODEL
import { IPost } from './model';


export class PostController {

    constructor() {}

   static async addPost( req: Request, res: Response ): Promise<void> {
                   try {
                       // Capture Data and Execute Store Methods.
                       const postData: IPost = req.body;
                       const newPost: IPost = await PostStore.add(postData);
                        
                       // Response Success.
                       return response.success(req, res, newPost, 201);
                       
                   } catch (err) {
                       // Response Error.
                       return response.error(req, res, err, 500);
                   }
                }


   static async allPost( req: Request, res: Response ): Promise<void> {
                   try {
                       // Execute Store Methods for Data Search.
                       const allPost: IPost[] = await PostStore.all();
                       
                       // Response Success.
                       return response.success(req, res, allPost, 200);

                   } catch (err) {
                       // Response Error.
                       return response.error(req, res, err, 500);
                   }
                }


   static async getPost( req: Request, res: Response ): Promise<void> {
                    try {
                        // Capture Parameters and Execute Data Search Methods.
                        const { id } = req.params;
                        const post: IPost | null = await PostStore.get(id);
                        
                        // Validate if there is a Found Data.
                        if ( !post ) {
                            let err: string = `El ID del Post no es correcto`
                            return response.notFound(req, res, err, 404);
                        }
                        
                        // Response Success.
                        return response.success(req, res, post, 200);

                    } catch (err) { 
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }

                }


   static async updatePost( req: Request, res: Response ): Promise<void> {
                    try {
                        // Capture data and execute update methods.
                        const { id } = req.params;
                        const updatePost: IPost = req.body;
                        const post: IPost | null = await PostStore.update(id, updatePost);

                        // Validate if there is a Found Data.
                        if ( !post ) {
                            let err: string = `No se a podido actualizar el registro. El ID del Post no es correcto`
                            return response.notFound(req, res, err, 404);
                        }

                        // Response Success.
                        return response.success(req, res, post, 200);

                    } catch (err) {
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }
                }


   static async deletePost( req: Request, res: Response ): Promise<void> {
                    try {
                        // Capture data and execute delete methods.
                        const { id } = req.params;
                        const deletedPost: IPost | null = await PostStore.delete(id);

                        // Validate if there is a Found Data.
                        if ( !deletedPost ) {
                            let err: string = `No se a podido eliminar el registro. El ID del Post no es correcto`
                            return response.notFound(req, res, err, 404);
                        }

                        // Response Success.
                        return response.success(req, res, deletedPost, 200);
                        
                    } catch (err) {
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }
                }

}
