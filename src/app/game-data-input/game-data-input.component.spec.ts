import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDataInputComponent } from './game-data-input.component';
import { GameDataInputModule } from './game-data-input.module';

describe('GameDataInputComponent', () => {
  let component: GameDataInputComponent;
  let fixture: ComponentFixture<GameDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDataInputModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GameDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
