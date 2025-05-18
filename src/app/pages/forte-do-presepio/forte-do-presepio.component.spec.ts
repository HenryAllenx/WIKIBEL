import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ForteDoPresepioComponent  from './forte-do-presepio.component';

describe('ForteDoPresepioComponent', () => {
  let component: ForteDoPresepioComponent;
  let fixture: ComponentFixture<ForteDoPresepioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForteDoPresepioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForteDoPresepioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
