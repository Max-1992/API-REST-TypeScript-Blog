// IMPORT MODULES
import { Router } from 'express';

// IMPORT CONTROLLER
import { PostController } from './controller';


export class PostRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', PostController.allPost);
        this.router.get('/:id', PostController.getPost);
        this.router.post('/', PostController.addPost);
        this.router.put('/:id', PostController.updatePost);
        this.router.delete('/:id', PostController.deletePost);
    }

} 

const postRoutes = new PostRoutes();

export default postRoutes.router;