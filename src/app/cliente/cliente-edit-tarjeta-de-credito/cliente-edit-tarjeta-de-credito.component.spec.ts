import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditTarjetaDeCreditoComponent } from './cliente-edit-tarjeta-de-credito.component';

describe('ClienteEditTarjetaDeCreditoComponent', () => {
  let component: ClienteEditTarjetaDeCreditoComponent;
  let fixture: ComponentFixture<ClienteEditTarjetaDeCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEditTarjetaDeCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditTarjetaDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
