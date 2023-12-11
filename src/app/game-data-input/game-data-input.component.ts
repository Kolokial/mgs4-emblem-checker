import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { IGameDataFormMetaData } from './IGameDataFormControls';
import { GameDataService } from '../game-data-service/game-data.service';
import { Difficulty } from './DifficultyEnums';
import { KeyValue } from '@angular/common';
import { Duration } from '../helpers/duration/duration.component';

@Component({
  selector: 'game-data-input',
  standalone: false,
  templateUrl: './game-data-input.component.html',
  styleUrl: './game-data-input.component.scss',
})
export class GameDataInputComponent {
  public difficulties = Difficulty;
  public form: FormGroup<IGameDataFormMetaData> = new FormGroup<IGameDataFormMetaData>({
    Difficulty: new FormControl<Difficulty>(Difficulty.LiquidEasy),
    'Total Play Time': new FormControl<string>(''),
    Continues: new FormControl<number>(0),
    'Alert Phases': new FormControl<number>(0),
    'Total Kills': new FormControl<number>(0),
    'LIFE Recovery Items Used': new FormControl<number>(0),
    'Weapon Types Acquired': new FormControl<number>(0),
    'Flashbacks Viewed': new FormControl<number>(0),
    'Special Items': new FormControl<boolean>(false),
    'CQC Uses': new FormControl<number>(0),
    Headshots: new FormControl<number>(0),
    'Knife Kills/Knockouts': new FormControl<number>(0),
    'Wall Press Time': new FormControl<string>('00:00:00'),
    'Sideways Rolls': new FormControl<number>(0),
    'Forward Rolls': new FormControl<number>(0),
    'Crawling Time': new FormControl<string>('00:00:00'),
    'Crouch Walking Time': new FormControl<string>('00:00:00'),
    'Time in Cardboard Box/Drum': new FormControl<string>('00:00:00'),
    'Combat Highs': new FormControl<number>(0),
    'Weapons/Items Acquired': new FormControl<number>(0),
    'Total Drebin Points from Sales': new FormControl<number>(0),
    'Current Drebin Points': new FormControl<number>(0),
  });

  public get totalPlayTimeControl(): FormControl<string | null> {
    return this.form.controls['Total Play Time'];
  }

  constructor(private _gameDataService: GameDataService) {}

  ngOnInit() {
    Object.entries(this.form.controls).forEach((entry) => {
      const key: string = entry[0];
      const control: FormControl<number | string | boolean> = entry[1];
      this._gameDataService.addObservable(key, control.valueChanges);
    });
  }

  originalOrder = (a: KeyValue<string, Difficulty>, b: KeyValue<string, Difficulty>) => 0;
}
