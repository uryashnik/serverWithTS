import {NextFunction, Request, Response} from 'express';
import {get, controller, use, post, bodyValidator} from './decorators';
import {router} from '../routes/loginRoutes';

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('Request was made!');
    next();
}

@controller('/auth')
export default class LoginController {
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`
                    <form method="POST">
                        <div>
                            <label>Email</label>
                            <input name="email" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password"/>
                        </div>
                        <button>Submit</button>
                    </form>
                `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response): void {
        const {email, password} = req.body;

        if (email === 'my@gmail.com' && password === '111') {
            req.session = {loggedIn: true};
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response): void {
        req.session = undefined;
        res.redirect('/');
    }
}
