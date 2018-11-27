import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInvitacionDetailComponent } from './cliente-invitacion-detail.component';

describe('ClienteInvitacionDetailComponent', () => {
  let component: ClienteInvitacionDetailComponent;
  let fixture: ComponentFixture<ClienteInvitacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInvitacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInvitacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
