import express from 'express';
import stockController from './controllers/stockController';
import cryptoController from './controllers/cryptoController';
import { connectRedis } from './utils/cache';

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

connectRedis();

app.use('/stock', stockController);
app.use('/crypto', cryptoController);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;