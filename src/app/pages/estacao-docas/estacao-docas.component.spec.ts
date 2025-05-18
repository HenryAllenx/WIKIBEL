import { ComponentFixture, TestBed } from '@angular/core/testing';

import  EstacaoDocasComponent  from './estacao-docas.component';

describe('EstacaoDocasComponent', () => {
  let component: EstacaoDocasComponent;
  let fixture: ComponentFixture<EstacaoDocasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstacaoDocasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacaoDocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
