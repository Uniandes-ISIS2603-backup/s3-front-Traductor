import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditInvitacionComponent } from './cliente-edit-invitacion.component';

describe('ClienteEditInvitacionComponent', () => {
  let component: ClienteEditInvitacionComponent;
  let fixture: ComponentFixture<ClienteEditInvitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEditInvitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
