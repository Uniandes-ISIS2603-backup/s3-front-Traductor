import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePagosComponent } from './cliente-pagos.component';

describe('ClientePagosComponent', () => {
  let component: ClientePagosComponent;
  let fixture: ComponentFixture<ClientePagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
