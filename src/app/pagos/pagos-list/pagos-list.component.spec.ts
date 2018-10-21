import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { PagosListComponent } from './pagos-list.component';
import { PagosService } from '../pagos.service';
import { Pagos } from '../pagos'; 

describe('PagosListComponent', () => {
  let component: PagosListComponent;
  let fixture: ComponentFixture<PagosListComponent>;
  const pagos: Pagos[] = require('../../../assets/pagos.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, PagosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a list of pagos', () => {
    component.pagos = pagos;
    expect(component.pagos.length).toEqual(pagos.length);
  });

  it('a pago should be a pago (first and last)', () => {
    component.pagos = pagos;
    //revisar todos los pagos
    expect(component.pagos[0].idTransaccion).toEqual(pagos[0].idTransaccion);
    expect(component.pagos[pagos.length - 1].idTransaccion).toEqual(pagos[pagos.length - 1].idTransaccion);
  });
});
