import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaEmblemComponent } from './puma-emblem.component';

describe('PumaEmblemComponent', () => {
  let component: PumaEmblemComponent;
  let fixture: ComponentFixture<PumaEmblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumaEmblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PumaEmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
