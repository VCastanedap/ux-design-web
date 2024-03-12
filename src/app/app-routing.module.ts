import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { RecoveryComponent } from './users/recovery/recovery.component';
import { HomeComponent } from './app-home/home/home.component';
import { PuzzlesComponent } from './crear-puzzles/puzzles/puzzles.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección de la ruta vacía a /home
  { path: 'login', component: LoginComponent,  pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent,  pathMatch: 'full' },
  { path: 'recovery', component: RecoveryComponent,  pathMatch: 'full' },
  { path: 'home', component: HomeComponent,  pathMatch: 'full' },
  { path: 'puzzle', component: PuzzlesComponent,  pathMatch: 'full' },
  { path: 'crearpuzzle', component: PuzzleComponent,  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
