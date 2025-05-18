import { ComponentFixture, TestBed } from '@angular/core/testing';

import  VerOPesoComponent  from './ver-o-peso.component';

describe('VerOPesoComponent', () => {
  let component: VerOPesoComponent;
  let fixture: ComponentFixture<VerOPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerOPesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerOPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
