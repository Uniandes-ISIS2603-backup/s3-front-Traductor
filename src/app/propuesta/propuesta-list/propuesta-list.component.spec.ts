import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { PropuestaListComponent } from './propuesta-list.component';
import { PropuestaService } from '../propuesta.service';
import { Propuesta } from '../propuesta';

describe('PropuestaListComponent', () => {
  let component: PropuestaListComponent;
  let fixture: ComponentFixture<PropuestaListComponent>;
  const propuestas: Propuesta[] = require('../../../assets/propuestas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, PropuestaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a list of propuestas', () => {
    component.propuestas = propuestas;
    expect(component.propuestas.length).toEqual(propuestas.length);
  });

  it('a propuesta should be a propuesta (first and last)', () => {
    component.propuestas = propuestas;
    //revisar todos los pagos
    expect(component.propuestas[0].propuestaId).toEqual(propuestas[0].propuestaId);
    expect(component.propuestas[propuestas.length - 1].propuestaId).toEqual(propuestas[propuestas.length - 1].propuestaId);
  });
});
