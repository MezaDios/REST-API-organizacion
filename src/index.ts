import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import newRoutes from './routes/newRoutes';
import loginRoutes from './routes/loginRoutes';
import mongoose from './database';

class Server {

    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        mongoose;
    }

    private config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use('/api/news', newRoutes);
        this.app.use('/api/login', loginRoutes);
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();

