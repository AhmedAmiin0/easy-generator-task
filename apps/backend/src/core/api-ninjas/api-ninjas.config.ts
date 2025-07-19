import { registerAs } from '@nestjs/config';

export default registerAs('apiNinjas', () => ({
    apiKey: process.env.API_NINJAS_KEY || 'rdVzGZVS3DTJ1fo39m6qjA==zG5KnNS2w26Re83a',
    baseUrl: process.env.API_NINJAS_BASE_URL || 'https://api.api-ninjas.com/v1',
})); 