import express, { Request, Response } from 'express';
import { getCryptoPrice } from '../services/cryptoService';

const router = express.Router();

router.get('/:symbol', async (req: Request, res: Response) => {
    try {
        const symbol = req.params.symbol.toLowerCase();
        const price = await getCryptoPrice(symbol);
        res.json({ symbol, price });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;