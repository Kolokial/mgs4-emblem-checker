import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDataInputComponent } from './game-data-input.component';

describe('GameDataInputComponent', () => {
  let component: GameDataInputComponent;
  let fixture: ComponentFixture<GameDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDataInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
