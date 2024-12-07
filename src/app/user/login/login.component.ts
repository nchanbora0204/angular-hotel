import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() closeLogin = new EventEmitter<void>();

  close() {
    this.closeLogin.emit();
  }
  
}
