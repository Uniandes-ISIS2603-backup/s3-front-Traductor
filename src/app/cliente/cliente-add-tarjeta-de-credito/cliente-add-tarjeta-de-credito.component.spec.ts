import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddTarjetaDeCreditoComponent } from './cliente-add-tarjeta-de-credito.component';

describe('ClienteAddTarjetaDeCreditoComponent', () => {
  let component: ClienteAddTarjetaDeCreditoComponent;
  let fixture: ComponentFixture<ClienteAddTarjetaDeCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddTarjetaDeCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddTarjetaDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
