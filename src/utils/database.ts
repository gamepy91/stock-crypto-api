import mongoose from 'mongoose';

export async function connectMongoDB() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/stockcrypto';
    
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}