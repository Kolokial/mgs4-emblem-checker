import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../../game-data-service/game-data.service';

@Component({
  selector: 'puma-emblem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../base-emblem.component.html',
  styleUrl: './puma-emblem.component.scss',
})
export class PumaEmblemComponent {
  public emblemImageSrc: string = "url('assets/emblems/puma.png')";

  private alerts: number;
  private continues: number;
  private kills: number;

  constructor(private _gameDataService: GameDataService) {}

  public get emblemDisplay(): boolean {
    return this.alerts >= 75 && this.kills >= 250 && this.continues >= 25;
  }

  ngOnInit() {
    this._gameDataService
      .getObservable('Alert Phases')
      .subscribe((x) => (this.alerts = x as number));
    this._gameDataService.getObservable('Total Kills').subscribe((x) => (this.kills = x as number));
    this._gameDataService
      .getObservable('Continues')
      .subscribe((x) => (this.continues = x as number));
  }
}
