import express from 'express';
import cookieSession from 'cookie-session';
//todo delete
import 'reflect-metadata';

import './controllers/loginController';
import './controllers/RootController';
import {AppRouter} from "./AppRouter";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['dfgwetrvbrtbed']}));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});