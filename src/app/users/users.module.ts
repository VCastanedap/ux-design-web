import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryComponent } from './recovery/recovery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignUpComponent, RecoveryComponent],
  exports: [LoginComponent, SignUpComponent, RecoveryComponent]
})
export class UsersModule { }
