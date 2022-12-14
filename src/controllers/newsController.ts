import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import NewsServices from '../database/services/newsService.';
import Helper from '../utils/helper';

class NewsController {

    async getAll(req: Request, res: Response) {
        NewsServices.getAll()
            .then(news => Helper.sendResponse(res, StatusCodes.OK, news))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error));

    }
    async getById(req: Request, res: Response) {
        const _id = req.params.id;

        NewsServices.getById(_id)
            .then(news => Helper.sendResponse(res, StatusCodes.OK, news))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error));
    }

    async create(req: Request, res: Response) {
        const newNews = req.body;

        NewsServices.create(newNews)
            .then(news => Helper.sendResponse(res, StatusCodes.CREATED, news, 'Notícia cadastrada com sucesso!'))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error));
    }

    async uploadImage(req: Request, res: Response) {

        try {
            res.status(200).json({message: 'Arquivo enviado com sucesso'});
        } catch(error) {
            res.status(500).json({error: error});
        }
    }

    async update(req: Request, res: Response) {
        const newNews = req.body;
        const _id = req.params.id;

        NewsServices.update(_id, newNews)
            .then(news => Helper.sendResponse(res, StatusCodes.ACCEPTED, news, 'Notícia atualizada com sucesso!'))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error));
    }

    async delete(req: Request, res: Response) {
        const _id = req.params.id;

        NewsServices.delete(_id)
            .then(() => Helper.sendResponse(res, StatusCodes.OK, 'Notícia excluída com sucesso!'))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error));
    }

}

export default new NewsController;