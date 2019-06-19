import model from '../models/userModel';
import { Request, Response } from 'express';

class LoginCtrl {

    createUser = async (req: Request, res: Response) => {
        const user = await new model(req.body);
        await user.save();
    }

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