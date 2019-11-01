// IMPORT MODULES
import { Request, Response } from 'express';

// IMPORT RESPONSE
import { response } from '../../networks/response/user';

// IMPORT STORE
import { UserStore } from './store';

// IMPORT MODEL
import { IUser } from './model';


export class UserController {

    constructor() {}

   static async addUser( req: Request, res: Response ): Promise<Response> {
                   try {
                       // Capture Data and Execute Store Methods.
                       const userData: IUser = req.body;
                       const newUser: IUser = await UserStore.add(userData);
                        
                       // Response Success.
                       return response.success(req, res, newUser, 201);
                       
                   } catch (err) {
                       // Response Error.
                       return response.error(req, res, err, 500);
                   }
                }


   static async allUser( req: Request, res: Response ): Promise<Response> {
                   try {
                       // Execute Store Methods for Data Search.
                       const allUser: IUser[] = await UserStore.all();
                       
                       // Response Success.
                       return response.success(req, res, allUser, 200);

                   } catch (err) {
                       // Response Error.
                       return response.error(req, res, err, 500);
                   }
                }


   static async getUser( req: Request, res: Response ): Promise<Response> {
                    try {
                        // Capture Parameters and Execute Data Search Methods.
                        const { id } = req.params;
                        const user: IUser | null = await UserStore.get(id);
                        
                        // Validate if there is a Found Data.
                        if ( !user ) {
                            let err: string = `El ID del Usuario no es correcto`
                            return response.notFound(req, res, err, 404);
                        }
                        
                        // Response Success.
                        return response.success(req, res, user, 200);

                    } catch (err) { 
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }

                }


   static async updateUser( req: Request, res: Response ): Promise<Response> {
                    try {
                        // Capture data and execute update methods.
                        const { id } = req.params;
                        const updateUser: IUser = req.body;
                        const user: IUser | null = await UserStore.update(id, updateUser);

                        // Validate if there is a Found Data.
                        if ( !user ) {
                            let err: string = `No se a podido actualizar el registro. El ID del Usuario no es correcto`
                            return response.notFound(req, res, err, 404);
                        }

                        // Response Success.
                        return response.success(req, res, user, 200);

                    } catch (err) {
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }
                }


   static async deleteUser( req: Request, res: Response ): Promise<Response> {
                    try {
                        // Capture data and execute delete methods.
                        const { id } = req.params;
                        const deletedUser: IUser | null = await UserStore.delete(id);

                        // Validate if there is a Found Data.
                        if ( !deletedUser ) {
                            let err: string = `No se a podido eliminar el registro. El ID del Usuario no es correcto`
                            return response.notFound(req, res, err, 404);
                        }

                        // Response Success.
                        return response.success(req, res, deletedUser, 200);
                        
                    } catch (err) {
                        // Response Error.
                        return response.error(req, res, err, 500);
                    }
                }

}
