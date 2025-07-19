import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, Observable } from 'rxjs';
import { ExternalQuoteResponse } from '@easy-generator/types';

@Injectable()
export class ApiNinjasService {
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor(
        private configService: ConfigService,
        private httpService: HttpService,
    ) {
        const config = this.configService.get('apiNinjas');
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl;
    }

    getRandomQuote(): Observable<ExternalQuoteResponse> {

        return this.httpService.get<ExternalQuoteResponse>(`${this.baseUrl}/quotes`, {
            headers: {
                'X-Api-Key': this.apiKey,
            },
        }).pipe(
            map(res => res.data)
        );

    }
}