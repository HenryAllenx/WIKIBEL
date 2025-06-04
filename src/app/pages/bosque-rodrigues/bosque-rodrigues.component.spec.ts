import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BosqueRodriguesComponent } from './bosque-rodrigues.component';

describe('BosqueRodriguesComponent', () => {
  let component: BosqueRodriguesComponent;
  let fixture: ComponentFixture<BosqueRodriguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BosqueRodriguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BosqueRodriguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
