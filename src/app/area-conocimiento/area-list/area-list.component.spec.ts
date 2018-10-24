import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { AreaListComponent } from './area-list.component';
import { AreaService } from '../area.service';
import { Area } from '../area';

describe('CalificacionListComponent', () => {
  let component: AreaListComponent;
  let fixture: ComponentFixture<AreaListComponent>;
  const areas: Area[] = require('../../../assets/areas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, AreaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of califications', () => {
      component.areas = areas;
      expect(component.areas.length).toEqual(areas.length);
  });

  it('a client should be a client (first and last)', () => {
      component.areas = areas;
      //revisar todas las calificaciones
      expect(component.areas[0].area).toEqual(areas[0].area);
      expect(component.clientes[areas.length - 1].area).toEqual(areas[areas.length - 1].area);
  });
});
