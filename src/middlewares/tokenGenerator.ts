import { NextFunction, Request , Response} from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_AUTH } from '../config/env';

class AuthToken {

    async auth(req: Request, res: Response, next: NextFunction) {

        if(req.body.user === 'aline') {
            let payload = {
                iat: new Date().getSeconds(),
                exp: new Date().setMinutes(30),
                username: "aline"
            }

            let token = jwt.sign(payload, SECRET_AUTH);
            console.log(token)

            res.status(200).json({auth: true, token: token});

            return;
        } else {
            res.status(500).json({message: 'Login inválido!'});
            return;
        }
    }
}

export default new AuthToken;

