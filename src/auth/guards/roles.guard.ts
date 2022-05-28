// import {
//   CanActivate,
//   ExecutionContext,
//   ForbiddenException,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';
// import { Observable } from 'rxjs';
// import { User } from 'src/users/users.model';
// import { ROLES_KEY } from '../roles_auth.decorator';
//
// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private jwtService: JwtService, private reflector: Reflector) {}
//
//   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     try {
//       const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()]);
//       if (!requiredRoles) {
//         return true;
//       }
//
//       const req = context.switchToHttp().getRequest();
//       const headers = req.headers.authorization;
//       const bearer = headers.split(' ')[0];
//       const token = headers.split(' ')[1];
//
//       if (bearer !== 'Bearer' || !token) {
//         throw new UnauthorizedException();
//       }
//
//       const user: User = this.jwtService.verify(token);
//       req.user = user;
//
//       return user.roles.some((role) => requiredRoles.includes(role.value));
//     } catch (error) {
//       throw new ForbiddenException();
//     }
//   }
// }
