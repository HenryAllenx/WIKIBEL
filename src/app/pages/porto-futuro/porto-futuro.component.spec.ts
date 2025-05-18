import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PortoFuturoComponent  from './porto-futuro.component';

describe('PortoFuturoComponent', () => {
  let component: PortoFuturoComponent;
  let fixture: ComponentFixture<PortoFuturoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortoFuturoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortoFuturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
