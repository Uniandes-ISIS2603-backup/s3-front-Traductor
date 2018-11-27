import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionEditComponent } from './invitacion-edit.component';

describe('InvitacionEditComponent', () => {
  let component: InvitacionEditComponent;
  let fixture: ComponentFixture<InvitacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
