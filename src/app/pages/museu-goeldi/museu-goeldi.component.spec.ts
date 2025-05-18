import { ComponentFixture, TestBed } from '@angular/core/testing';

import  MuseuGoeldiComponent  from './museu-goeldi.component';

describe('MuseuGoeldiComponent', () => {
  let component: MuseuGoeldiComponent;
  let fixture: ComponentFixture<MuseuGoeldiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseuGoeldiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseuGoeldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
