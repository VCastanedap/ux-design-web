import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  
  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  redirectToRecovery(): void {
    this.router.navigate(['/recovery']);
  }


  passwordFormControl = new FormControl('', [
      Validators.required, 
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ]
  );

  matcher = new MyErrorStateMatcher();

}