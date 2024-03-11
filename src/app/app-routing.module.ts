import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { RecoveryComponent } from './users/recovery/recovery.component';
import { HomeComponent } from './app-home/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent,  pathMatch: 'full' },
  { path: 'recovery', component: RecoveryComponent,  pathMatch: 'full' },
  { path: 'home', component: HomeComponent,  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
