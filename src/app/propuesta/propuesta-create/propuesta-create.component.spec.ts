import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaCreateComponent } from './propuesta-create.component';

describe('PropuestaCreateComponent', () => {
  let component: PropuestaCreateComponent;
  let fixture: ComponentFixture<PropuestaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
