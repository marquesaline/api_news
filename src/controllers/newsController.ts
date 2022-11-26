import { Request, Response } from 'express';
import httpStatus from 'http-status';
import NewsServices from '../database/services/newsService.';
import Helper from '../utils/helper';

class NewsController {

    sendResponse = (res: Response, statusCode: any, data?: any, message?: string) => {
        res.status(statusCode).json({message: message, result: data});
    }

    async getAll(req: Request, res: Response) {
        NewsServices.getAll()
            .then(news => Helper.sendResponse(res, httpStatus[200], news))
            .catch(error => Helper.sendResponse(res, httpStatus[500], error));

    }
    async getById(req: Request, res: Response) {
        const _id = req.params.id;

        NewsServices.getById(_id)
            .then(news => Helper.sendResponse(res, httpStatus[200], news))
            .catch(error => Helper.sendResponse(res, httpStatus[500], error));
    }

    async create(req: Request, res: Response) {
        const newNews = req.body;

        NewsServices.create(newNews)
            .then(news => Helper.sendResponse(res, httpStatus[201], news, 'Notícia cadastrada com sucesso!'))
            .catch(error => Helper.sendResponse(res, httpStatus[500], error));
    }

    async update(req: Request, res: Response) {
        const newNews = req.body;
        const _id = req.params.id;

        NewsServices.update(_id, newNews)
            .then(news => Helper.sendResponse(res, httpStatus[202], news, 'Notícia atualizada com sucesso!'))
            .catch(error => Helper.sendResponse(res, httpStatus[500], error));
    }

    async delete(req: Request, res: Response) {
        const _id = req.params.id;

        NewsServices.delete(_id)
            .then(() => Helper.sendResponse(res, httpStatus[200], 'Notícia excluída com sucesso!'))
            .catch(error => Helper.sendResponse(res, httpStatus[500], error));
    }

}

export default new NewsController;