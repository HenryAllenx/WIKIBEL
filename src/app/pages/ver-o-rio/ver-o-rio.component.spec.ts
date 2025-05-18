import { ComponentFixture, TestBed } from '@angular/core/testing';

import  VerORioComponent from './ver-o-rio.component';

describe('VerORioComponent', () => {
  let component: VerORioComponent;
  let fixture: ComponentFixture<VerORioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerORioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerORioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
