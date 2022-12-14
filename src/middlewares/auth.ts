import jwt from  'jsonwebtoken';
import Configs from '../config/configs';

class AuthVerify {
    
    validate(req: any, res: any, next: any) {
        
        let token = req.headers['x-access-token'];

        if(token){

            jwt.verify(token, Configs.secret, (err: any, decoded: any) => {

                if(err){
                    return res.status(403).send({
                        success: false,
                        message: '403 - invalid token'
                    });
                } else {
                    next();
                }
            });

        }else{

            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            });

        }
    }
}

export default new AuthVerify();