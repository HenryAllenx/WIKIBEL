import { ComponentFixture, TestBed } from '@angular/core/testing';

import VerRotasComponent  from './ver-rotas.component';

describe('VerRotasComponent', () => {
  let component: VerRotasComponent;
  let fixture: ComponentFixture<VerRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerRotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
