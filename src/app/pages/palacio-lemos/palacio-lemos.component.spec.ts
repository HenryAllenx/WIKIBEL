import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PalacioLemosComponent  from './palacio-lemos.component';

describe('PalacioLemosComponent', () => {
  let component: PalacioLemosComponent;
  let fixture: ComponentFixture<PalacioLemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalacioLemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalacioLemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
