import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PracaWaldermarComponent  from './praca-waldermar.component';

describe('PracaWaldermarComponent', () => {
  let component: PracaWaldermarComponent;
  let fixture: ComponentFixture<PracaWaldermarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracaWaldermarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracaWaldermarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
