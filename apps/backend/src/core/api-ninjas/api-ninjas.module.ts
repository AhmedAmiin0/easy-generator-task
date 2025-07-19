import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ApiNinjasService } from './api-ninjas.service';
import apiNinjasConfig from './api-ninjas.config';

@Module({
  imports: [
    ConfigModule.forFeature(apiNinjasConfig),
    HttpModule,
  ],
  providers: [ApiNinjasService],
  exports: [ApiNinjasService],
})
export class ApiNinjasModule {} 