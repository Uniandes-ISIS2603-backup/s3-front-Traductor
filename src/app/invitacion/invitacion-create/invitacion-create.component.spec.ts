import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionCreateComponent } from './invitacion-create.component';

describe('InvitacionCreateComponent', () => {
  let component: InvitacionCreateComponent;
  let fixture: ComponentFixture<InvitacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
