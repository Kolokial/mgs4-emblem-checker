import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenEmblemComponent } from './chicken-emblem.component';
import { GameDataService } from '../../game-data-service/game-data.service';
import { BehaviorSubject } from 'rxjs';

describe('ChickenEmblemComponent', () => {
  let component: ChickenEmblemComponent;
  let fixture: ComponentFixture<ChickenEmblemComponent>;
  let gameDataServiceSpy: jasmine.SpyObj<GameDataService>;
  let gameDataService: GameDataService;

  const alertPhases = new BehaviorSubject(150);
  //TODO: Change this value to 30 hours
  const totalPlayTime = new BehaviorSubject('00:00:01');
  const continues = new BehaviorSubject(50);
  const kills = new BehaviorSubject(500);
  const recoveryItemsUsed = new BehaviorSubject(50);

  beforeEach(async () => {
    gameDataServiceSpy = jasmine.createSpyObj('GameDataService', ['getObservable']);
    gameDataServiceSpy.getObservable.and.returnValue(new BehaviorSubject(12).asObservable());
    gameDataServiceSpy.getObservable.withArgs('Alert Phases').and.returnValue(alertPhases.asObservable());
    gameDataServiceSpy.getObservable.withArgs('Total Kills').and.returnValue(kills.asObservable());
    gameDataServiceSpy.getObservable.withArgs('Continues').and.returnValue(continues.asObservable());
    gameDataServiceSpy.getObservable
      .withArgs('LIFE Recovery Items Used')
      .and.returnValue(recoveryItemsUsed.asObservable());
    gameDataServiceSpy.getObservable.withArgs('Total Play Time').and.returnValue(totalPlayTime.asObservable());

    await TestBed.configureTestingModule({
      imports: [ChickenEmblemComponent],
      providers: [{ provide: GameDataService, useValue: gameDataServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ChickenEmblemComponent);
    component = fixture.componentInstance;
    gameDataService = TestBed.inject(GameDataService);
    fixture.detectChanges();
  });

  it('should display an image when certain conditions are met', () => {
    alertPhases.next(500);
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Alert Phases');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Total Kills');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Continues');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('LIFE Recovery Items Used');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Total Play Time');
    expect(component.emblemDisplay).toBeTrue();
  });

  it('should not display an image when certain conditions are met', () => {
    alertPhases.next(10);

    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Alert Phases');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Total Kills');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Continues');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('LIFE Recovery Items Used');
    expect(gameDataServiceSpy.getObservable).toHaveBeenCalledWith('Total Play Time');
    expect(component.emblemDisplay).toBeFalse();
  });
});
