import { ComponentFixture, TestBed } from '@angular/core/testing';

import  IgrejaSeComponent  from './igreja-se.component';

describe('IgrejaSeComponent', () => {
  let component: IgrejaSeComponent;
  let fixture: ComponentFixture<IgrejaSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgrejaSeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgrejaSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
