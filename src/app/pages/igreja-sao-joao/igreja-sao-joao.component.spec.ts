import { ComponentFixture, TestBed } from '@angular/core/testing';

import  IgrejaSaoJoaoComponent  from './igreja-sao-joao.component';

describe('IgrejaSaoJoaoComponent', () => {
  let component: IgrejaSaoJoaoComponent;
  let fixture: ComponentFixture<IgrejaSaoJoaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgrejaSaoJoaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgrejaSaoJoaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
