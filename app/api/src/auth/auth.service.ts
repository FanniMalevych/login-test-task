import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(email: string, pass: string) {
        const user = await this.usersService.validateCredentials({
            email,
            password: pass,
        });
        if (!user) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };
        return {
            user,
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async signUp(email: string, password: string) {
        const user = await this.usersService.create({
            email,
            password
        });
        if (!user) {
            throw new InternalServerErrorException();
        }
        const payload = { sub: user.id, email: user.email };
        delete user.password;
        return {
            user,
            accessToken: await this.jwtService.signAsync(payload),
        }
    }
}