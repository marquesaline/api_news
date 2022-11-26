
import { Response } from 'express';

class Helper {
    sendResponse = (res: Response, statusCode: any, data?: any, message?: string) => {
        res.status(statusCode).json({message: message, result: data});
    }
}

export default new Helper;