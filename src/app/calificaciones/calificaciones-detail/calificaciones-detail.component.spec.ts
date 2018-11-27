import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesDetailComponent } from './calificaciones-detail.component';

describe('CalificacionesDetailComponent', () => {
  let component: CalificacionesDetailComponent;
  let fixture: ComponentFixture<CalificacionesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
