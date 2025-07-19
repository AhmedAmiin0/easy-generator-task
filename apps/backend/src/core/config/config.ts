import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
    port: parseInt(process.env.PORT as string, 10) || 3001,
    globalPrefix: process.env.GLOBAL_PREFIX || 'api',
    corsOrigins: process.env.CORS_ORIGINS ? 
        process.env.CORS_ORIGINS.split(',') : 
        ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173'],
    appName: process.env.APP_NAME || 'Easy Generator API',
    appVersion: process.env.APP_VERSION || '1.0.0',
}));