// src/auth/auth.service.ts
// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}z
 

  async validateAdmin(admin: any, password: string): Promise<boolean> {
    return bcrypt.compare(password, admin.password)&& admin.role=='admin';
  }

  async generateToken(admin: any): Promise<string> {
    const payload = { sub: admin.adminId, email: admin.email, role: admin.role };
    return this.jwtService.sign(payload);
  }

  async decodeToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      error
    }
  }
  
}

