import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameDataInputModule } from './game-data-input/game-data-input.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChickenEmblemComponent } from './emblems/chicken-emblem/chicken-emblem.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    GameDataInputModule,
    RouterOutlet,
    ChickenEmblemComponent,
    MatDividerModule,
    MatGridListModule,
  ],
})
export class AppModule {}
