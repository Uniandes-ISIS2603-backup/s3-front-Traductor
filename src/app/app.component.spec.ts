import { TestBed, async } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { PropuestaListComponent } from './propuesta/propuesta-list/propuesta-list.component';
import { PagosListComponent } from './pagos/pagos-list/pagos-list.component';
import { TarjetasListComponent } from './tarjeta-de-credito/tarjetas-list/tarjetas-list.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule ],
      providers: [{provide: APP_BASE_HREF, useValue: ''} ],
      declarations: [
        ClienteListComponent,
        PropuestaListComponent,
        PagosListComponent,
        TarjetasListComponent,
        AppComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 's3-Prometeus-Traductor'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('s3-Prometeus-Traductor');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to s3-Prometeus-Traductor!');
  }));

  it('should render titles in the navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#clientesTag').textContent).toContain('Clientes');
    expect(compiled.querySelector('#propuestasTag').textContent).toContain('Propuestas');
    expect(compiled.querySelector('#tarjetasTag').textContent).toContain('Tarjetas de Credito');
    expect(compiled.querySelector('#pagosTag').textContent).toContain('Pagos');
  }));
});
