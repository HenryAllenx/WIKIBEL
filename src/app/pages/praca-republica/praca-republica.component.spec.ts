import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PracaRepublicaComponent from './praca-republica.component';

describe('PracaRepublicaComponent', () => {
  let component: PracaRepublicaComponent;
  let fixture: ComponentFixture<PracaRepublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracaRepublicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracaRepublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
