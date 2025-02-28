import axios from 'axios';
import { getCache, setCache } from '../utils/cache';

export async function getStockPrice(symbol: string): Promise<number | null> {
    const cacheKey = `stock_${symbol}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) return cachedData;

    try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
        const response = await axios.get(url);
        const price = response.data.chart.result[0].meta.regularMarketPrice;

        await setCache(cacheKey, price, 300); // Cache for 5 minutes
        return price;
    } catch (error) {
        throw new Error('Failed to fetch stock data');
    }
}