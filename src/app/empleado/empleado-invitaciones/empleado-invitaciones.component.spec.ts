import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoInvitacionesComponent } from './empleado-invitaciones.component';

describe('EmpleadoInvitacionesComponent', () => {
  let component: EmpleadoInvitacionesComponent;
  let fixture: ComponentFixture<EmpleadoInvitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoInvitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoInvitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
