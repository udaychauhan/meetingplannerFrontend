import 'flatpickr/dist/flatpickr.css';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpServiceService } from './http-service.service';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css'; // you may need to adjust the css import depending on your build tool
import { MeetingcontrollerComponent } from './meetingcontroller/meetingcontroller.component';
import { MeetingService } from './meeting.service';
import { AlluserComponent } from './alluser/alluser.component';
import { EditmeetingComponent } from './editmeeting/editmeeting.component';
import { UsercalendarComponent } from './usercalendar/usercalendar.component';
import { AddmeetingComponent } from './addmeeting/addmeeting.component';

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    HomeComponent,
    TestComponent,
    MeetingcontrollerComponent,
    AlluserComponent,
    EditmeetingComponent,
    UsercalendarComponent,
    AddmeetingComponent,
    
  ],
  imports: [
    CommonModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    BrowserModule,CalendarModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),BrowserAnimationsModule,
    RouterModule.forRoot([
      
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'',redirectTo:'login',pathMatch:'full'}, 
      {path:'forgotpassword',component:ForgotpasswordComponent},
      {path:'changepassword/:changePasswordToken',component:ChangepasswordComponent},
      {path:'home',component:HomeComponent},
      {path:'usercalendar',component:UsercalendarComponent},
      {path:'addMeeting',component:AddmeetingComponent},
      {path:'editMeeting',component:EditmeetingComponent},
      {path:'alluser',component:AlluserComponent},
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }
      ])
  ],
  providers: [HttpServiceService,MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
