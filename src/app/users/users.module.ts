import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoveryComponent } from './recovery/recovery.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatGridListModule, MatIconModule, FormsModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignUpComponent, RecoveryComponent],
  exports: [LoginComponent, SignUpComponent, RecoveryComponent]
})
export class UsersModule { }

