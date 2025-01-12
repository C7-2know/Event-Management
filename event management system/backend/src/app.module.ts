import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './User/User.module';
import { EvmModule } from './evm/evm.module';
import { AuthModule } from './admin/auth/aut.module';
import { AdminModule } from './admin/admin.module';
import { EventModule } from './Events/events.module'; // Import EventModule
import { ReservationModule } from './Reservation/Reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env
    MongooseModule.forRoot(process.env.DB_URI),  // Ensure DB_URI is correct
    UserModule,
    EvmModule,
    AuthModule,
    AdminModule,
    ReservationModule,
    EventModule,  // Add EventModule here
  ],
})
export class AppModule {}
