import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { IGameDataFormMetaData } from './IGameDataFormControls';

export class GameDataFormGroup extends FormGroup {
  constructor() {
    super(GameDataFormGroup.buildGameDataForm());
  }

  private static formMetaData: IGameDataFormMetaData = {
    'Total Play Time': {
      formControl: new FormControl<string>('00:00:00'),
      gameDataInputType: 'duration',
    },
    Continues: {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Alert Phases': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Total Kills': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'LIFE Recovery Items Used': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Weapon Types Acquired': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Flashbacks Viewed': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Special Items': {
      formControl: new FormControl<boolean>(false),
      gameDataInputType: 'boolean',
    },
    'CQC Uses': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    Headshots: {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Knife Kills/Knockouts': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Wall Press Time': {
      formControl: new FormControl<string>('00:00:00'),
      gameDataInputType: 'duration',
    },
    'Sideways Rolls': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Forward Rolls': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Crawling Time': {
      formControl: new FormControl<string>('00:00:00'),
      gameDataInputType: 'duration',
    },
    'Crouch Walking Time': {
      formControl: new FormControl<string>('00:00:00'),
      gameDataInputType: 'duration',
    },
    'Time in Cardboard Box/Drum': {
      formControl: new FormControl<string>('00:00:00'),
      gameDataInputType: 'duration',
    },
    'Combat Highs': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Weapons/Items Acquired': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Total Drebin Points from Sales': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
    'Current Drebin Points': {
      formControl: new FormControl<number>(0),
      gameDataInputType: 'number',
    },
  };

  public static buildGameDataForm(): any {
    let formControls: any = {};
    Object.entries(GameDataFormGroup.formMetaData).map((entry) => {
      const name = entry[0];
      const object = entry[1];

      formControls[name] = object.formControl;
    });
    return formControls;
  }

  public static durationValidation(control: AbstractControl): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
      }
      return {
        test: false,
      };
    };
  }
}
