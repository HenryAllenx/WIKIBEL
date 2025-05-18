import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PracaBatistaComponent  from './praca-batista.component';

describe('PracaBatistaComponent', () => {
  let component: PracaBatistaComponent;
  let fixture: ComponentFixture<PracaBatistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracaBatistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracaBatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
