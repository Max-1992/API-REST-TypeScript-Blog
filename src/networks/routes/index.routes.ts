// IMPORT MODULES
import { Application } from 'express';

// ROUTES VIEWS
import  HomeRoutes from '../../components/home/network';

// ROUTES API
import  PostRoutes  from '../../components/post/network';
import  UserRoutes  from '../../components/user/network';


export class Routes {

    constructor( server: Application ) {
        // Views
        server.use('/', HomeRoutes );

        // Api
        server.use('/api/post', PostRoutes);
        server.use('/api/user', UserRoutes);
    }

}