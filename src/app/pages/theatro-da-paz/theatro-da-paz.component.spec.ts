import { ComponentFixture, TestBed } from '@angular/core/testing';

import  TheatroDaPazComponent  from './theatro-da-paz.component';

describe('TheatroDaPazComponent', () => {
  let component: TheatroDaPazComponent;
  let fixture: ComponentFixture<TheatroDaPazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatroDaPazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatroDaPazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
