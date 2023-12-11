import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../../game-data-service/game-data.service';
import { Difficulty } from '../../game-data-input/DifficultyEnums';

@Component({
  selector: 'chicken-emblem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../base-emblem.component.html',
  styleUrl: './chicken-emblem.component.scss',
})
export class ChickenEmblemComponent {
  public emblemImageSrc: string = "url('assets/emblems/chicken.png')";

  private alerts: number;
  private continues: number;
  private difficulty: Difficulty;
  private kills: number;
  private recoveryItemsUsed: number;
  private totalPlayTime: string;
  private specialItems: boolean;

  constructor(private _gameDataService: GameDataService) {}

  public get emblemDisplay(): boolean {
    return (
      this.alerts === 0 &&
      this.difficulty === Difficulty.BigBossExtreme &&
      this.kills === 0 &&
      this.recoveryItemsUsed === 0 &&
      this.totalPlayTime === '00:00:00' &&
      this.continues === 0 &&
      this.specialItems === false
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
    this._gameDataService
      .getObservable('Special Items')
      .subscribe((x) => (this.specialItems = x as boolean));
  }
}
