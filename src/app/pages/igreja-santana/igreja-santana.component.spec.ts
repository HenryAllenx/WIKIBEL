import { ComponentFixture, TestBed } from '@angular/core/testing';

import  IgrejaSantanaComponent  from './igreja-santana.component';

describe('IgrejaSantanaComponent', () => {
  let component: IgrejaSantanaComponent;
  let fixture: ComponentFixture<IgrejaSantanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgrejaSantanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgrejaSantanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
