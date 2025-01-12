import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './User.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() body: { email: string; password: string ;name:string}) {
        return this.userService.register(body.email, body.password,body.name);
    }

    @Post('login')
    async login(@Body() body: { email: string; password: string,role:string }) {
        if (!body.email || !body.password) {
            throw new BadRequestException('Email and password are required').message;
        }
        return this.userService.login(body.email, body.password);
    }
}

