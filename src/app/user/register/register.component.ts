import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() closeRegister = new EventEmitter<void>();
  form: FormGroup;
  
   router = inject(Router);
   authService = inject(AuthService);
  constructor(private fbuilder: FormBuilder) {
    this.form = this.fbuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });

  }
  close() {
    this.closeRegister.emit();
  }
  onSubmit() {
    console.log(this.form.value);
    if(this.form.valid) {
      this.authService.register(this.form.value).subscribe(
        res => {
          this.close();
          this.router.navigate(['']);
        },  )
  }}
}
