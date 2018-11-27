import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEditPropuestaComponent } from './empleado-edit-propuesta.component';

describe('EmpleadoEditPropuestaComponent', () => {
  let component: EmpleadoEditPropuestaComponent;
  let fixture: ComponentFixture<EmpleadoEditPropuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoEditPropuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoEditPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
