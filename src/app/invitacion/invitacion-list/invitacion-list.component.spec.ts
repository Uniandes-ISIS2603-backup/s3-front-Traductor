import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionListComponent } from './invitacion-list.component';

describe('InvitacionListComponent', () => {
  let component: InvitacionListComponent;
  let fixture: ComponentFixture<InvitacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
