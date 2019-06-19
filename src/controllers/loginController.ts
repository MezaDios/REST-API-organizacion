import model from '../models/userModel';
import { Request, Response } from 'express';

class LoginCtrl {

    login = async (req: Request, res: Response) => {
        const users = await model.find(req.body);

        if (users.length == 0) {
            res.json({
                logged: false
            });
        } else {
            res.json({
                logged: true
            });
        }
    }

}

const loginCtrl = new LoginCtrl();

export default loginCtrl;