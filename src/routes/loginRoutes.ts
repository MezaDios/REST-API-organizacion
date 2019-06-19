import { Router } from 'express';

import loginCtrl from '../controllers/loginController';

class LoginRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config(): void {

        this.router.post('/', loginCtrl.login);
    }

}

const loginRoutes = new LoginRoutes();

export default loginRoutes.router;