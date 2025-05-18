import { ComponentFixture, TestBed } from '@angular/core/testing';

import  IgrejaMercesComponent  from './igreja-merces.component';

describe('IgrejaMercesComponent', () => {
  let component: IgrejaMercesComponent;
  let fixture: ComponentFixture<IgrejaMercesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgrejaMercesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgrejaMercesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
