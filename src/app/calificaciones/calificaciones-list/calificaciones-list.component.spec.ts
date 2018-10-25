import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { CalificacionesListComponent } from './calificaciones-list.component';
import { CalificacionesService } from '../calificaciones.service';
import { Calificacion } from '../calificaciones';

describe('CalificacionListComponent', () => {
  let component: CalificacionesListComponent;
  let fixture: ComponentFixture<CalificacionesListComponent>;
  const calificaciones: Calificacion[] = require('../../../assets/calificaciones.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, CalificacionesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesListComponent);
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
      expect(component.calificaciones[0].id).toEqual(calificaciones[0].id);
      expect(component.calificaciones[calificaciones.length - 1].id).toEqual(calificaciones[calificaciones.length - 1].id);
  });
});
