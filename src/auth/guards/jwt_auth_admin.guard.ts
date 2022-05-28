import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthAdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const headers = req.headers.authorization;
      const bearer = headers.split(' ')[0];
      const token = headers.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException();
      }

      const admin = this.jwtService.verify(token);

      if (!admin.approved) {
        throw new UnauthorizedException();
      }

      req.admin = admin;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
