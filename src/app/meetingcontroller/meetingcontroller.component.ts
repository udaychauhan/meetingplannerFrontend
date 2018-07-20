import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { CalendarEvent } from 'angular-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-meetingcontroller',
  templateUrl: './meetingcontroller.component.html',
  styleUrls: ['./meetingcontroller.component.css']
})
export class MeetingcontrollerComponent implements OnInit {

  constructor(private meetingCOntroller : MeetingService, private _route: ActivatedRoute, private router: Router
  ) { }
  adminName = 'dummy-admin';
  adminId = 'dummy-id';
  userId = 'dummy-userId';
  userName = 'dummy-username';
  where = '';
  purpose = '';
  date = '';
  time = '';

  ngOnInit() {
  }

  addMeeting() : any {
    console.log(this.where + this.purpose+this.date);
    let data = {
      adminName : this.adminName,
      where : this.where,
      purpose : this.purpose,
      date : this.date
    }
   // this.meetingCOntroller.addToEvents(data);
    setTimeout(() => {
      this.router.navigate(['/test']);
    }, 1000);
  }
}
