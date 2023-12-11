import { FormControl } from '@angular/forms';
import { Difficulty } from './DifficultyEnums';

export type IGameDataFormMetaData = {
  Difficulty: FormControl<Difficulty>;
  'Total Play Time': FormControl<string>;
  Continues: FormControl<number>;
  'Alert Phases': FormControl<number>;
  'Total Kills': FormControl<number>;
  'LIFE Recovery Items Used': FormControl<number>;
  'Weapon Types Acquired': FormControl<number>;
  'Flashbacks Viewed': FormControl<number>;
  'Special Items': FormControl<boolean>;
  'CQC Uses': FormControl<number>;
  Headshots: FormControl<number>;
  'Knife Kills/Knockouts': FormControl<number>;
  'Wall Press Time': FormControl<string>;
  'Sideways Rolls': FormControl<number>;
  'Forward Rolls': FormControl<number>;
  'Crawling Time': FormControl<string>;
  'Crouch Walking Time': FormControl<string>;
  'Time in Cardboard Box/Drum': FormControl<string>;
  'Combat Highs': FormControl<number>;
  'Weapons/Items Acquired': FormControl<number>;
  'Total Drebin Points from Sales': FormControl<number>;
  'Current Drebin Points': FormControl<number>;
};

export type FormControlInfo<T> = {
  formControl: FormControl<T>;
  gameDataInputType: 'number' | 'duration' | 'boolean';
};
