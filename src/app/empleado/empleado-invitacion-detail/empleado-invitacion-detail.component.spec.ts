import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoInvitacionDetailComponent } from './empleado-invitacion-detail.component';

describe('EmpleadoInvitacionDetailComponent', () => {
  let component: EmpleadoInvitacionDetailComponent;
  let fixture: ComponentFixture<EmpleadoInvitacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoInvitacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoInvitacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
