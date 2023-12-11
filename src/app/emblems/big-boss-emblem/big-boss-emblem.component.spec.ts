import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBossEmblemComponent } from './big-boss-emblem.component';

describe('BigBossEmblemComponent', () => {
  let component: BigBossEmblemComponent;
  let fixture: ComponentFixture<BigBossEmblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigBossEmblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigBossEmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
