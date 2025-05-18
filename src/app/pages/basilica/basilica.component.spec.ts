import { ComponentFixture, TestBed } from '@angular/core/testing';

import  BasilicaComponent  from './basilica.component';

describe('BasilicaComponent', () => {
  let component: BasilicaComponent;
  let fixture: ComponentFixture<BasilicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasilicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasilicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
