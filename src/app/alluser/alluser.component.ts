import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SocketServiceService } from '../socket-service.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css'],
  providers: [SocketServiceService]
})

export class AlluserComponent implements OnInit {
  public authToken: string;
  public userName: string;
  public userId: string;
  public admin : string;
  public allUserList;

  constructor(private _route: ActivatedRoute, private router: Router
    , public httpService: HttpServiceService, public toastr: ToastsManager,
    vcr: ViewContainerRef, public socketService: SocketServiceService) {

    this.toastr.setRootViewContainerRef(vcr);
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
       //this.socketService.disconnectSocket();
      }
    });

  }


  ngOnInit() {
    this.authToken = Cookie.get('authToken');
    let userInfo = this.httpService.getUserInfoFromLocalstorage();
    this.userName = userInfo.firstName + " " + userInfo.lastName;
    this.userId = userInfo.userId;
    this.admin = userInfo.admin;
    this.checkStatus();
    if(this.admin === 'admin'){
      this.userName = this.userName + "-admin";
    }
    this.getAllUser();
  }

  public checkStatus: any = () => {
    if (this.authToken === undefined || this.authToken === '' || this.authToken === null
     || this.admin != 'admin') {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }//end check status

  public getAllUser() : any {
    this.httpService.getAllUsers(this.authToken).subscribe(
      data => {
        let error = data.error;
        let message = data.message;
        let result = data.data;
        if(error){
          this.toastr.error(message, 'Fail!!');
          console.log(data);
          this.allUserList = [];
        }else{
          //this.toastr.success("Got all users.", 'Success!');
          this.allUserList = result;
          // for(let user of this.allUserList){
          //   console.log(user.firstName);
          // }
          console.log(result);
        }
      },
      error => {
          this.toastr.error(error.message, 'Oops!');
      }
    );
   
  }
  //get all users end

  public goToUserCalendar : any = (user) =>{
    console.log(JSON.stringify(user));
    setTimeout(()=>{
      this.router.navigate(['/usercalendar'],{ queryParams: { 'adminId': this.userId , 
      'userId':user.userId}});

    },2000);
    
  }
  //goToUserCalendar end
    


}
