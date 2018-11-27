import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddInvitacionComponent } from './cliente-add-invitacion.component';

describe('ClienteAddInvitacionComponent', () => {
  let component: ClienteAddInvitacionComponent;
  let fixture: ComponentFixture<ClienteAddInvitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddInvitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
