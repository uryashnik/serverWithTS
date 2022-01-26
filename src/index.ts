import express from 'express';
import {router} from './routes/loginRoutes';
import cookieSession from 'cookie-session';
//todo delete
import 'reflect-metadata';

import './controllers/loginController';
import {router as controllerRouter} from './controllers/decorators/controller'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['dfgwetrvbrtbed']}));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});