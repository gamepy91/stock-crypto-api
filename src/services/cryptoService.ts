import axios from 'axios';
import { getCache, setCache } from '../utils/cache';

export async function getCryptoPrice(symbol: string): Promise<number | null> {
    const formattedSymbol = symbol.toUpperCase();
    const cacheKey = `crypto_${formattedSymbol}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) return cachedData;

    try {
        const url = `https://api.binance.com/api/v3/ticker/price?symbol=${formattedSymbol}USDT`;
        const response = await axios.get(url);
        const price = response.data?.price ? parseFloat(response.data.price) : null;

        if (price !== null) await setCache(cacheKey, price, 60);
        return price;
    } catch (error) {
        throw new Error('Failed to fetch crypto data');
    }
}