import { Component, Inject } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {

    readonly authUrl: string;
  
    constructor( @Inject(AuthenticationService) private auth : AuthenticationService) {
      this.authUrl = this.auth.getAuthUrl();
    }

    login(): void {
      window.location.href = this.authUrl;
    }
  }
  
