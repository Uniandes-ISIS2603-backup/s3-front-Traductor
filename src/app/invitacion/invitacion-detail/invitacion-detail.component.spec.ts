import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionDetailComponent } from './invitacion-detail.component';

describe('InvitacionDetailComponent', () => {
  let component: InvitacionDetailComponent;
  let fixture: ComponentFixture<InvitacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
