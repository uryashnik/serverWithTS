import {NextFunction, Request, Response} from 'express';
import {get, controller, use} from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Access is denied');
}

@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response): void {
        if (req.session && req.session.loggedIn) {
            res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/auth/logout">logout</a>
            </div>
      `);
        } else {
            res.send(`
            <div>
                <div>You are NOT logged in</div>
                <a href="/auth/login">login</a>
            </div>
        `);
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response): void {
        res.send('Welcome to protected route, logged user');
    }
}
