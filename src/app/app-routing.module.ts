import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { authGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: '/user',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
