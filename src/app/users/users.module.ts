import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignUpComponent ],
  exports: [LoginComponent, SignUpComponent ]
})
export class UsersModule { }
