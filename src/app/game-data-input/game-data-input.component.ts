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
    'Total Play Time': new FormControl<string>(null),
    Continues: new FormControl<number>(null),
    'Alert Phases': new FormControl<number>(null),
    'Total Kills': new FormControl<number>(null),
    'LIFE Recovery Items Used': new FormControl<number>(null),
    'Weapon Types Acquired': new FormControl<number>(null),
    'Flashbacks Viewed': new FormControl<number>(null),
    'Special Items': new FormControl<boolean>(false),
    'CQC Uses': new FormControl<number>(null),
    Headshots: new FormControl<number>(null),
    'Knife Kills/Knockouts': new FormControl<number>(null),
    'Wall Press Time': new FormControl<string>(null),
    'Sideways Rolls': new FormControl<number>(null),
    'Forward Rolls': new FormControl<number>(null),
    'Crawling Time': new FormControl<string>(null),
    'Crouch Walking Time': new FormControl<string>(null),
    'Time in Cardboard Box/Drum': new FormControl<string>(null),
    'Combat Highs': new FormControl<number>(null),
    'Weapons/Items Acquired': new FormControl<number>(null),
    'Total Drebin Points from Sales': new FormControl<number>(null),
    'Current Drebin Points': new FormControl<number>(null),
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
