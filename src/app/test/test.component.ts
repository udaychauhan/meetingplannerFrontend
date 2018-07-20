import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, NgZone, ViewContainerRef } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

import { Subject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { MeetingService } from '../meeting.service';
@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events = [];
  clickedDate: Date;

  constructor(private cd: ChangeDetectorRef, private _route: ActivatedRoute, private router: Router
    , public toastr: ToastsManager, public httpService: HttpServiceService,public meetingService: MeetingService, vcr: ViewContainerRef, private httpClient: HttpClient) {
    this.toastr.setRootViewContainerRef(vcr);

  }


  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): any {
  //  this.events = this.meetingService.getAllEvents();
    this.cd.detectChanges();
    this.refresh.next();
  }//load events end

  activeDayIsOpen: boolean = true;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  redirectToAddMeeting() : any {
    
    setTimeout(() => {
      this.router.navigate(['/testMeetingAdd']);
    }, 1000);
  }


}