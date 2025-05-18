import { ComponentFixture, TestBed } from '@angular/core/testing';

import ParisNAmericaComponent  from './paris-n-america.component';

describe('ParisNAmericaComponent', () => {
  let component: ParisNAmericaComponent;
  let fixture: ComponentFixture<ParisNAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParisNAmericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisNAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
