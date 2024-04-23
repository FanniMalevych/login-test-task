import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('signUp')
    signUp(@Body() authDto: AuthDTO) {
        return this.authService.signUp(authDto.email, authDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signIn')
    signIn(@Body() authDto: AuthDTO) {
        return this.authService.signIn(authDto.email, authDto.password);
    }

}