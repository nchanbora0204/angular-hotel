import { Component,EventEmitter,Output,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
 
 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  @Output() closeLogin = new EventEmitter<void>();

  constructor(private fbuilder: FormBuilder) {
    this.form = this.fbuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value).subscribe( 
        res => {
          this.close();
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
        },
       
      );
    }
  }

  close() {
    this.closeLogin.emit();
  }
  
}
