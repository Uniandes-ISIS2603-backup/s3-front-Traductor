import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { IdiomaListComponent } from './idioma-list.component';
import { IdiomaService } from '../idioma.service';
import { Idioma } from '../idioma';

describe('idiomaListComponent', () => {
  let component: IdiomaListComponent;
  let fixture: ComponentFixture<IdiomaListComponent>;
  const idiomas: Idioma[] = require('../../../assets/idiomas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, IdiomaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of idioms', () => {
      component.idiomas = idiomas;
      expect(component.idiomas.length).toEqual(idiomas.length);
  });

  it('a client should be a client (first and last)', () => {
      component.idiomas = idiomas;
      //revisar todas las idiomas
      expect(component.idiomas[0].id).toEqual(idiomas[0].id);
      expect(component.idiomas[idiomas.length - 1].idEmpleado).toEqual(idiomas[idiomas.length - 1].id);
  });
});
