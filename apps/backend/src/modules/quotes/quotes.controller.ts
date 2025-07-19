import { Controller, Get, UseGuards, Request, Query, ParseBoolPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { QuotesService } from './quotes.service';
import { JwtAuthGuard } from '@/core/jwt/guards/jwt-auth.guard';
import { QuoteResponseDto } from './dto';

@ApiTags('Quotes')
@Controller('quotes')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get User Quote',
    description: 'Get the user\'s existing quote from database, or fetch and save a new one if none exists. Requires JWT authentication.' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Quote retrieved or created successfully',
    type: QuoteResponseDto
  })
  @ApiUnauthorizedResponse({ 
    description: 'Unauthorized - Valid JWT token required' 
  })
  @ApiResponse({ 
    status: 503, 
    description: 'Service Unavailable - External API error' 
  })
  async getUserQuote(@Query('refresh', ParseBoolPipe) refresh: boolean, @Request() req: any): Promise<QuoteResponseDto> {
    const userId = req.user.id;
    return this.quotesService.getOrCreateUserQuote(userId, refresh);
  }
} 