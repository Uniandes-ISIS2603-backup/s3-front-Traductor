import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { IdiomasListComponent } from './idiomas-list.component';
import { IdiomasService } from '../idiomas.service';
import { Idioma } from '../idiomas';

describe('idiomaListComponent', () => {
  let component: IdiomasListComponent;
  let fixture: ComponentFixture<IdiomasListComponent>;
  const idiomas: Idioma[] = require('../../../assets/idiomas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, IdiomasService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasListComponent);
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
      expect(component.idiomas[idiomas.length - 1].id).toEqual(idiomas[idiomas.length - 1].id);
  });
});
