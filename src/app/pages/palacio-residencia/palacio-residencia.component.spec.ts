import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PalacioResidenciaComponent  from './palacio-residencia.component';

describe('PalacioResidenciaComponent', () => {
  let component: PalacioResidenciaComponent;
  let fixture: ComponentFixture<PalacioResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalacioResidenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalacioResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
