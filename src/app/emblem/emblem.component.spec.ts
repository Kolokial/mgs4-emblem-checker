import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmblemComponent } from './emblem.component';

describe('EmblemComponent', () => {
  let component: EmblemComponent;
  let fixture: ComponentFixture<EmblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
