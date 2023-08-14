import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';

  
  @Injectable()
  export class UserGuard implements CanActivate {

    constructor(
      private jwtService: JwtService,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      console.log('canActivate function');
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: process.env.JWT_SECRET
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        
        // const user = await this.usersService.findOne(payload.id);
        // if (!user) { throw new NotFoundException('User Id does not exist!'); } 
        request['user'] = payload;
        //request['authId'] = payload.id;
          
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }

    
  }