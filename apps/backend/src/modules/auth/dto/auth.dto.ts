import { UserDocument } from '@/modules/users/user.schema';
import { 
    UserResponseDto, 
    AuthResponseDto as IAuthResponseDto, 
    LogoutResponseDto, 
    JwtPayloadDto 
} from '@easy-generator/types';

export class UserResponseDtoFactory {
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

export class AuthResponseDtoFactory {
    static fromUserDocument(user: UserDocument, tokenResponse: { token: string, expiresIn: number }): IAuthResponseDto {
        return {
            user: UserResponseDtoFactory.fromUserDocument(user),
            token: tokenResponse.token,
            expiresIn: tokenResponse.expiresIn,
        };
    }
}

// Re-export the types for convenience
export { UserResponseDto, IAuthResponseDto as AuthResponseDto, LogoutResponseDto, JwtPayloadDto };