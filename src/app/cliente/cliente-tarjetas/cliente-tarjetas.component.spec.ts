import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTarjetasComponent } from './cliente-tarjetas.component';

describe('ClienteTarjetasComponent', () => {
  let component: ClienteTarjetasComponent;
  let fixture: ComponentFixture<ClienteTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
