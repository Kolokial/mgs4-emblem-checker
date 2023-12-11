import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { GameDataInputComponent } from './game-data-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DurationComponent } from '../helpers/duration/duration.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    DurationComponent,
  ],
  declarations: [GameDataInputComponent],
  exports: [GameDataInputComponent],
})
export class GameDataInputModule {}
