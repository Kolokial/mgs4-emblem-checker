import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  private gameData: Map<string, Observable<string | number | boolean>> = new Map<
    string,
    Observable<string | number | boolean>
  >();

  constructor() {}

  public addObservable(key: string, value: Observable<string | number | boolean>) {
    if (!this.gameData.has(key)) {
      this.gameData.set(key, value);
    }
  }

  public getObservable(key: string): Observable<string | number | boolean> {
    if (!this.gameData.has(key)) {
      console.error(`Cannot find "${key}" in GameData.`);
    }
    return this.gameData.get(key);
  }
}
