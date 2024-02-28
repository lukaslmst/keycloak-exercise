import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.css']
})
export class DisplayinfoComponent {

  userinfo: any;

  constructor(private httpClient: HttpClient) {
    this.getUserInfo()
  }

  getUserInfo() {
    const token = localStorage.getItem('token');

    this.httpClient.get('https://auth.htl-leonding.ac.at/realms/htl-leonding/protocol/openid-connect/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(
      response => {
         this.userinfo = response;
        console.log('Userinfo:', response);

      },
      error => {
        console.error('Fehler beim Abrufen der Userinfo:', error);
      }
    );

  }


}
