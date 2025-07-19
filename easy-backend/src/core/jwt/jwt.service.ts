import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '@/modules/users/user.schema';
import { JwtPayloadDto } from '@/modules/auth/dto';

export interface TokenResponse {
    token: string;
    expiresIn: number;
}

@Injectable()
export class TokenService {
    constructor(private jwtService: JwtService) { }

    async generateTokens(user: UserDocument): Promise<TokenResponse> {
        const payload: JwtPayloadDto = { sub: user._id, ...user.toObject() };

        const token = await this.jwtService.signAsync(payload);

        return {
            token,
            expiresIn: 7 * 24 * 60 * 60, // 7 days in seconds
        };
    }
} 