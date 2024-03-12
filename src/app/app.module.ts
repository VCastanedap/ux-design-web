import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AppHomeModule } from './app-home/app-home.module';
import { PuzzlesModule } from './crear-puzzles/puzzles.module';
import { PuzzleModule } from './puzzle/puzzle.module';
import { RecoveryModule } from './users/recovery/recovery.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AppHomeModule,
    PuzzlesModule,
    PuzzleModule,
    RecoveryModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
