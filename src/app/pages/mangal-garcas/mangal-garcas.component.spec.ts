import { ComponentFixture, TestBed } from '@angular/core/testing';

import MangalGarcasComponent from './mangal-garcas.component';

describe('MangalGarcasComponent', () => {
  let component: MangalGarcasComponent;
  let fixture: ComponentFixture<MangalGarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangalGarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangalGarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
