// IMPORT MODULES
import { Router } from 'express';

// IMPORT CONTROLLER
import { UserController } from './controller';


export class UserRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', UserController.allUser);
        this.router.get('/:id', UserController.getUser);
        this.router.post('/', UserController.addUser);
        this.router.put('/:id', UserController.updateUser);
        this.router.delete('/:id', UserController.deleteUser);
    }

} 

const userRoutes = new UserRoutes();

export default userRoutes.router;