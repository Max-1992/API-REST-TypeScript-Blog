// IMPORT MODULES
import { Router, Request, Response } from 'express';

class HomeRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

   routes(){
        this.router.get('/', ( req: Request, res: Response ) => {
            res.send('Api: /api/post');
        })
    }

}

const homeRoutes = new HomeRoutes();

export default homeRoutes.router;
