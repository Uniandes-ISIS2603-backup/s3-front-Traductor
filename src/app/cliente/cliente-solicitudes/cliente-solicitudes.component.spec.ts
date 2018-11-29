import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSolicitudesComponent } from './cliente-solicitudes.component';

describe('ClienteSolicitudesComponent', () => {
  let component: ClienteSolicitudesComponent;
  let fixture: ComponentFixture<ClienteSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
