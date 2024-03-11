import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatGridListModule, MatIconModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class AppHomeModule { }
