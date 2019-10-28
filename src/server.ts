// IMPORT MODULES
import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// ROUTER
import { Routes } from './networks/routes/index.routes';



export class Server {

    app: Application;
    routes: Routes
    
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes = new Routes(this.app);
        this.staticFiles();
    }

    // Global System Settings
    settings(){}


    // Middlewares using our system
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded( {extended:false} ));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }


    // Static File Folder Settings
    staticFiles(){
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    
    // Start the server
    start(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on PORT: ${process.env.PORT}`)
        });
    }
}

