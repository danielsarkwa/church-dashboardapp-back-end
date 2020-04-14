import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('/signin')
    signin() {
        return 'on sign in route';
    }

    @Post('/resetPassword')
    resetPassword() {
        return 'password change route';
    }
}
