import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameDataInputModule } from './game-data-input/game-data-input.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmblemComponent } from './emblem/emblem.component';

@NgModule({
  imports: [BrowserModule, CommonModule, GameDataInputModule, EmblemComponent, RouterOutlet],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
