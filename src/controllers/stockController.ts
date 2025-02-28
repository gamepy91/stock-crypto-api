import express, { Request, Response } from 'express';
import { getStockPrice } from '../services/stockService';

const router = express.Router();

router.get('/:symbol', async (req: Request, res: Response) => {
    try {
        const { symbol } = req.params;
        const price = await getStockPrice(symbol);
        res.json({ symbol, price });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;