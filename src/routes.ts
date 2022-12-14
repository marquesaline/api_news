import { Router } from 'express';
import NewsController from './controllers/newsController';
import AuthToken from './middlewares/tokenGenerator';
import AuthVerify from './middlewares/auth';
import uploads from './middlewares/upload';

const router = Router();

router.get('/news', AuthVerify.validate, NewsController.getAll);

router.get('/news/:id', AuthVerify.validate, NewsController.getById);

router.post('/news', AuthVerify.validate, NewsController.create);

router.post('/uploads', uploads.single('file'), NewsController.uploadImage);

router.put('/news/:id', AuthVerify.validate, NewsController.update);

router.delete('/news/:id', AuthVerify.validate, NewsController.delete);

router.post('/auth', AuthToken.auth)


export default router;