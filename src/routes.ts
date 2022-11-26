import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({version: '0.0.1'})
});

export default router;