import { ComponentFixture, TestBed } from '@angular/core/testing';

import  CasaJanelasComponent  from './casa-janelas.component';

describe('CasaJanelasComponent', () => {
  let component: CasaJanelasComponent;
  let fixture: ComponentFixture<CasaJanelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaJanelasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaJanelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
