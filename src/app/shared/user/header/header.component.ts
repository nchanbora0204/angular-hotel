import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoginVisible = false;

toggleLogin() {
  this.isLoginVisible = !this.isLoginVisible;
}
}
