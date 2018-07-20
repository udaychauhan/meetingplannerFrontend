import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class MeetingService {

  public baseUrl ='http://meetingplannerapi.udaychauhan.info/api/v1/meeting';
  //'http://localhost:8080/api/v1/meeting';
  constructor(private _http: HttpClient) {
     console.log('meeting service called');
  }
  events : any[] = []

  // mountAllEvents():any{
     
  //   let data = [{
  //     title: 'Editable event',
  //     color: colors.yellow,
  //     start: new Date(),
  //     actions: [
  //       {
  //         label: '<i class="fa fa-fw fa-pencil"></i>',
  //         onClick: ({ event }: { event: any }): void => {
  //           console.log('Edit event', event);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Deletable event',
  //     color: colors.blue,
  //     start: new Date(),
  //     actions: [
  //       {
  //         label: '<i class="fa fa-fw fa-times"></i>',
  //         onClick: ({ event }: { event: any }): void => {
  //           this.events = this.events.filter(iEvent => iEvent !== event);
  //           console.log('Event deleted', event);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Non editable and deletable event',
  //     color: colors.red,
  //     start: new Date()
  //   }
  //   ];
  //   for (let d of data) {
  //     this.events.push(d);
  //   }

  //   return this.events;
  // }

  // getAllEvents():any{
    
  //   return this.events;
  // }

  // addToEvents(value):any{
  //   let data = {
  //     title: `${value.where} ${value.purpose} ${value.adminName}`,
  //     color: colors.yellow,
  //     //start should be javascrupt date object use new Date(valueFromPicker.date)
  //     start: new Date(value.date),
  //   }
  //   this.events.push(data);
  // }

  // removeEvents(index):any{
  //   this.events.splice(index,1);
  // }

  //-- rest service methods
  public getAllMeetingForUserId(userData): any {
    let myResponse = this._http.post(this.baseUrl + '/getAllMeetingsForUser', userData);
    return myResponse;
  }

  public addMeeting(data):any{
    let myResponse = this._http.post(this.baseUrl + '/addMeeting', data);
    return myResponse;
  
  }

  public deleteMeeting(data):any{
    let myResponse = this._http.post(this.baseUrl + '/deleteMeeting', data);
    return myResponse;
  }

  public updateMeeting(data):any{
    let myResponse = this._http.post(this.baseUrl + '/updateMeeting', data);
    return myResponse;
  }

  public getMeetingByMeetingId(data):any{
    let myResponse = this._http.post(this.baseUrl + '/getMeetingByMeetingId', data);
    return myResponse;
  }

}
