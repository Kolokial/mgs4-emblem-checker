import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../../game-data-service/game-data.service';

@Component({
  selector: 'big-boss-emblem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../base-emblem.component.html',
  styleUrl: './big-boss-emblem.component.scss',
})
export class BigBossEmblemComponent {
  public emblemImageSrc: string = "url('assets/emblems/big-boss.png')";

  private alerts: number;
  private continues: number;
  private kills: number;
  private recoveryItemsUsed: number;
  private totalPlayTime: string;

  constructor(private _gameDataService: GameDataService) {}

  public get emblemDisplay(): boolean {
    return (
      this.totalPlayTime === '00:00:01' &&
      this.alerts >= 150 &&
      this.kills >= 500 &&
      this.continues >= 50 &&
      this.recoveryItemsUsed >= 50
    );
  }

  ngOnInit() {
    this._gameDataService
      .getObservable('Alert Phases')
      .subscribe((x) => (this.alerts = x as number));
    this._gameDataService.getObservable('Total Kills').subscribe((x) => (this.kills = x as number));
    this._gameDataService
      .getObservable('Continues')
      .subscribe((x) => (this.continues = x as number));
    this._gameDataService
      .getObservable('LIFE Recovery Items Used')
      .subscribe((x) => (this.recoveryItemsUsed = x as number));
    this._gameDataService
      .getObservable('Total Play Time')
      .subscribe((x) => (this.totalPlayTime = x as string));
  }
}
