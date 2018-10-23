import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { CalificacionListComponent } from './calificacion-list.component';
import { CalificacionService } from '../calificacion.service';
import { calificacion } from '../calificacion';

describe('CalificacionListComponent', () => {
  let component: CalificacionListComponent;
  let fixture: ComponentFixture<CalificacionListComponent>;
  const calificaciones: Calificacion[] = require('../../../assets/calificaciones.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, CalificacionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of califications', () => {
      component.calificaciones = calificaciones;
      expect(component.calificaciones.length).toEqual(calificaciones.length);
  });

  it('a client should be a client (first and last)', () => {
      component.calificaciones = calificaciones;
      //revisar todas las calificaciones
      expect(component.calificaciones[0].idEmpleado).toEqual(calificaciones[0].idEmpleado);
      expect(component.clientes[calificaciones.length - 1].idEmpleado).toEqual(calificaciones[calificaciones.length - 1].idEmpleado);
  });
});
