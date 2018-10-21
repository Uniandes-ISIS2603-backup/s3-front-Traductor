import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { TarjetasListComponent } from './tarjetas-list.component';
import { TarjetaDeCreditoService } from '../tarjeta-de-credito.service';
import { TarjetaDeCredito } from '../tarjetaDeCredito';

describe('TarjetasListComponent', () => {
  let component: TarjetasListComponent;
  let fixture: ComponentFixture<TarjetasListComponent>;
  const tarjetas: TarjetaDeCredito[] = require('../../../assets/tarjetas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, TarjetaDeCreditoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of tarjetas', () => {
    component.tarjetas = tarjetas;
    expect(component.tarjetas.length).toEqual(tarjetas.length);
  });

  it('a tarjeta should be a tarjeta (first and last)', () => {
    component.tarjetas = tarjetas;
    //revisar todos los pagos
    expect(component.tarjetas[0].idTarjeta).toEqual(tarjetas[0].idTarjeta);
    expect(component.tarjetas[tarjetas.length - 1].idTarjeta).toEqual(tarjetas[tarjetas.length - 1].idTarjeta);
  });
});
