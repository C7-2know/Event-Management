import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards,Headers } from '@nestjs/common';
import { ReservationService } from './Reservation.service';
import { CreateReservationDto, UpdateReservationDto } from './dto/reservation.dto';
import { JwtAuthGuard } from '../admin/auth/guards/jwt-auth.guard';
import { AuthService } from 'src/admin/auth/auth.service';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService,
    private readonly authService: AuthService
  ) {}
  

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto, @Headers('authorization') authHeader: string) {
    const user = await this.authService.decodeToken(authHeader.split(' ')[1]);
    console.log("decoded user", user);
    if (!user){
      return "Unauthorized";
    }
    createReservationDto.userId = user.sub;
    return this.reservationService.create(createReservationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.reservationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationService.update(id, updateReservationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(id);
  }
}
