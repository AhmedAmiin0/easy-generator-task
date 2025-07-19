import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '@/modules/auth/auth.module';
import { UsersModule } from '@/modules/users/users.module';
import { QuotesModule } from '@/modules/quotes/quotes.module';
import { JwtCoreModule } from './core/jwt/jwt.module';
import appConfig from './core/config/config';
import databaseConfig from './core/database/database.config';
import apiNinjasConfig from './core/api-ninjas/api-ninjas.config';
import { DatabaseModule } from './core/database';
import jwtConfig from './core/jwt/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, jwtConfig, apiNinjasConfig],
    }),
    DatabaseModule,
    JwtCoreModule,
    UsersModule,
    AuthModule,
    QuotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
