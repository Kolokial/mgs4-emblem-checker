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
  @Input() emblemDisplay: boolean = false;

  constructor() {}
}
