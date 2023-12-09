import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../game-data-service/game-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'emblem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emblem.component.html',
  styleUrl: './emblem.component.scss',
})
export class EmblemComponent {
  @Input() emblemImageSrc: string = '';
  public emblemDisplay: boolean = false;

  constructor(private _gameDataService: GameDataService) {}

  ngOnInit() {
    const observable = this._gameDataService.getGameDataObservable('Total Play Time') as Observable<string>;

    observable.subscribe((x) => {
      if (x === '00:00:01') {
        this.emblemDisplay = true;
      } else {
        this.emblemDisplay = false;
      }
    });
  }
}
