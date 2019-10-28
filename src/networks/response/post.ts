// IMPORTS MODULES
import { Request, Response } from 'express';

// IMPORT MODEL
import { IPost } from '../../components/post/model';


export class response {

    constructor(){}

    static success( req: Request, res: Response, post: IPost | IPost[], status: number = 200 ) {
        res.status(status).json({
            ok: true,
            data: post
        })
    }


    static notFound( req: Request, res: Response, err: string, status: number = 404 ) {
         res.status(status).json({
            ok: false,
            err
        })
    }


    static error( req: Request, res: Response, err: Error, status: number = 500 ) {
        res.status(status).json({
            ok: false,
            err
        })
    }

}