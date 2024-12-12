import { Component, effect, inject, Injector, NgModule, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/common.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoginVisible = false;
  isRegisterVisible = false;
   authService = inject(AuthService);
  user!: User;
  isLoggedIn = false;
  injector = inject(Injector);

toggleLogin() {
  this.isLoginVisible = !this.isLoginVisible;
}

toggleRegister() {
  this.isRegisterVisible = !this.isRegisterVisible;

}


ngOnInit(): void {
  this.authService.me().subscribe({
    next:(response) => {
      console.log(response);
      if (response.data) {
        this.user = response.data;
      }
    }
  });

  effect(
    () => {
            this.isLoggedIn = this.authService.isLoggedIn();
          },
          {injector: this.injector} 
);

}

logout(){
  this.authService.logout();

};
}
