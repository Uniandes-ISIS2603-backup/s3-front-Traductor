import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaListComponent } from './propuesta-list.component';

describe('PropuestaListComponent', () => {
  let component: PropuestaListComponent;
  let fixture: ComponentFixture<PropuestaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaListComponent ]
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
});
