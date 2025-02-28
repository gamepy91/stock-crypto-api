import Redis from 'ioredis';

const redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: Number(process.env.REDIS_PORT) || 6379,
});

export async function setCache(key: string, value: any, ttl: number = 300) {
    await redis.set(key, JSON.stringify(value), 'EX', ttl);
}

export async function getCache(key: string): Promise<any | null> {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
}

export async function connectRedis() {
    redis.on('connect', () => console.log('Connected to Redis'));
    redis.on('error', (err) => console.error('Redis error:', err));
}

export default redis;