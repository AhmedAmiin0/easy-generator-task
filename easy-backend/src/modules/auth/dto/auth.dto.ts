import { UserDocument } from '@/modules/users/user.schema';

export class UserResponseDto {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;

    static fromUserDocument(user: UserDocument): UserResponseDto {
        return {
            id: (user._id as any).toString(),
            email: user.email,
            name: user.name,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
        };
    }
}

export class AuthResponseDto {
    user: UserResponseDto;
    token: string;
    expiresIn: number;

    static fromUserDocument(user: UserDocument, tokenResponse: { token: string, expiresIn: number }): AuthResponseDto {
        return {
            user: UserResponseDto.fromUserDocument(user),
            token: tokenResponse.token,
            expiresIn: tokenResponse.expiresIn,
        };
    }
}

export class LogoutResponseDto {
    message: string;
    success: boolean;
}
export class JwtPayloadDto {
    sub: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}