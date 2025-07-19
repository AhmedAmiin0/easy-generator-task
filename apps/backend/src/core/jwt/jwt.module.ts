import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import jwtConfig from './jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(jwtConfig)],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') as string,
        signOptions: { 
          expiresIn: configService.get('JWT_EXPIRES_IN') || '1h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtService],
  exports: [JwtModule],
})
export class JwtCoreModule { }