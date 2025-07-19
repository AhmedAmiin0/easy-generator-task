import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production-must-be-32-chars-minimum',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    port: parseInt(process.env.PORT || '3001', 10),
    globalPrefix: process.env.GLOBAL_PREFIX || 'api',
    corsOrigins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['http://localhost:3000', 'http://localhost:5173'],
    appName: process.env.APP_NAME || 'Easy Auth API',
    appVersion: process.env.APP_VERSION || '1.0.0',

}));