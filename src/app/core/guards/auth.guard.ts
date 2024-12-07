import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of, take } from 'rxjs';
import { UserModule } from '../../user/user.module';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isLoggedIn()) {
    router.navigate(['user']);   
  };
 
  return true;

};
export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.getUser().pipe(
    map((user) => {
      if (user && authService.hasRole('admin')) {
        return true;
      } else {
        router.navigate(['user']); // Điều hướng nếu không có quyền
        return false;
      }
    }),
    catchError((error) => {
      // Xử lý lỗi, đảm bảo Observable hoàn tất
      router.navigate(['/user']);
      return of(false);
    }),
    take(1) // Đảm bảo Observable hoàn tất sau lần đầu tiên
  );
};


