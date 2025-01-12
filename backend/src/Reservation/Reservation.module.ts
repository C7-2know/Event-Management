import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationController } from './Reservation.controller';
import { ReservationService } from './Reservation.service';
import { Reservation, ReservationSchema } from './Reservation.schema';
import { AuthModule } from 'src/admin/auth/aut.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reservation.name, schema: ReservationSchema }]),
    AuthModule, // Add AuthModule here
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}