import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mgs-emblem-checker';

  public totalPlayTime: string = '00:00:00';

  public updateTotalPlayTime(totalPlayTime: string) {
    this.totalPlayTime = totalPlayTime;
  }

  public get displayChickenEmblem(): boolean {
    return this.totalPlayTime === '00:00:01';
  }
}
