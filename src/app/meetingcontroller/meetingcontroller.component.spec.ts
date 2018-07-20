import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcontrollerComponent } from './meetingcontroller.component';

describe('MeetingcontrollerComponent', () => {
  let component: MeetingcontrollerComponent;
  let fixture: ComponentFixture<MeetingcontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingcontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
