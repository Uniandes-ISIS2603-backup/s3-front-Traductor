import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaDetailComponent } from './propuesta-detail.component';

describe('PropuestaDetailComponent', () => {
  let component: PropuestaDetailComponent;
  let fixture: ComponentFixture<PropuestaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
