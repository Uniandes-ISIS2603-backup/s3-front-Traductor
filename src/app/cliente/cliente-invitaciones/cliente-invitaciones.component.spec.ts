import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInvitacionesComponent } from './cliente-invitaciones.component';

describe('ClienteInvitacionesComponent', () => {
  let component: ClienteInvitacionesComponent;
  let fixture: ComponentFixture<ClienteInvitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInvitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInvitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
