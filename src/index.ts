// IMPORT MODULES
import { Server } from './server';
import dotenv from 'dotenv';


// INITIALIZATIONS
const app: Server = new Server();
dotenv.config();


// DATABASE CONNECTION
import db from './database'
db();


// SERVER START
app.start();