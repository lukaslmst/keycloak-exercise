import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {
  }

  login() {
    this.authService.getToken(this.username, this.password).subscribe(
      response => {
        const authToken = response.access_token;
        console.log("Bearer: " + authToken);
        localStorage.setItem('token', authToken);

      },
      error => {
        console.error('Fehler beim Abrufen des Tokens:', error);
      }
    );
    this.router.navigate(['app-displayinfo']);
  }
}
