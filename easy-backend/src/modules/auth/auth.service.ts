import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { UserDocument } from '@/modules/users/user.schema';
import { UserRepository } from '@/modules/users/repositories/user.repository';
import { LoginDto, SignupDto, AuthResponseDto } from '@/modules/auth/dto';
import { TokenService } from '@/core/jwt/jwt.service';
import { PasswordUtil } from '@/core/utils/password.util';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private tokenService: TokenService,
    ) { }

    async signup(signupDto: SignupDto): Promise<AuthResponseDto> {
        const { email, name, password } = signupDto;

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }

        const hashedPassword = await PasswordUtil.hash(password);

        const savedUser = await this.userRepository.create({
            email,
            name,
            password: hashedPassword,
        });

        const tokens = await this.tokenService.generateTokens(savedUser);

        return AuthResponseDto.fromUserDocument(savedUser, tokens);
    }

    async login(loginDto: LoginDto): Promise<AuthResponseDto> {
        const { email, password } = loginDto;

        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await PasswordUtil.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const tokens = await this.tokenService.generateTokens(user);

        return AuthResponseDto.fromUserDocument(user, tokens);
    }



    async validateUser(userId: string): Promise<UserDocument> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return user;
    }
} 