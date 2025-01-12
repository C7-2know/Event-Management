import { Module,forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schemas/User.schema';
import { UserService } from './User.service';
import { UserController } from './User.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthModule } from '../admin/auth/aut.module';


@Module({
    imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), AuthModule,
     PassportModule, JwtModule.register({ secret: process.env.JWT_SECRET || 'SECRET_KEY', signOptions: { expiresIn: '1h' }, }), 
    
    ], 
    providers: [UserService, JwtStrategy],
    controllers: [UserController],
    exports: [MongooseModule],
    
})
export class UserModule {}

