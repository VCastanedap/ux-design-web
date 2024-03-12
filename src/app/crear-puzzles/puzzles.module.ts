import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [PuzzlesComponent]
})
export class PuzzlesModule { }
