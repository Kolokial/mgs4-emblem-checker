import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { IGameDataFormMetaData } from './IGameDataFormControls';
import { GameDataService } from '../game-data-service/game-data.service';

@Component({
  selector: 'game-data-input',
  standalone: false,
  templateUrl: './game-data-input.component.html',
  styleUrl: './game-data-input.component.scss',
})
export class GameDataInputComponent {
  constructor(private _gameDataService: GameDataService) {}
  @Output() public totalPlayTime: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup<IGameDataFormMetaData> = new FormGroup<IGameDataFormMetaData>({
    'Total Play Time': new FormControl<string>('00:00:00', this.durationValidation()),
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
    'Wall Press Time': new FormControl<string>('00:00:00', this.durationValidation()),
    'Sideways Rolls': new FormControl<number>(0),
    'Forward Rolls': new FormControl<number>(0),
    'Crawling Time': new FormControl<string>('00:00:00', this.durationValidation()),
    'Crouch Walking Time': new FormControl<string>('00:00:00', this.durationValidation()),
    'Time in Cardboard Box/Drum': new FormControl<string>('00:00:00', this.durationValidation()),
    'Combat Highs': new FormControl<number>(0),
    'Weapons/Items Acquired': new FormControl<number>(0),
    'Total Drebin Points from Sales': new FormControl<number>(0),
    'Current Drebin Points': new FormControl<number>(0),
  });

  public get totalPlayTimeControl(): FormControl<string | null> {
    return this.form.controls['Total Play Time'];
  }

  ngOnInit() {
    Object.entries(this.form.controls).forEach((entry) => {
      const key: string = entry[0];
      const control: FormControl<number | string | boolean> = entry[1];
      this._gameDataService.addGameDataObservable(key, control.valueChanges);
    });
  }

  insertColonForDuration(control: FormControl<string | null>): void {
    const currentValue = control.value;

    if (currentValue == null) {
      control.reset();
    }

    if (currentValue?.match('^\\d{2,}$') || currentValue?.match('^\\d+:\\d{2}$')) {
      control.setValue(`${currentValue}:`);
    }
  }

  private durationValidation(): ValidatorFn {
    return (control: AbstractControl) => {
      //TODO: Validate minutes and seconds aren't above 59
      if (control == null) {
        return null;
      }
      const value: string = control.value;
      if (value.match('^\\d+:\\d{2}:\\d{2}$')) {
        return null;
      }
      return {
        test: false,
      };
    };
  }
}
