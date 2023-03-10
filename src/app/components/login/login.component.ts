import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {
    readonly authUrl: string;
  
    constructor(private readonly authService: AuthenticationService) {
      this.authUrl = authService.getAuthUrl();
    }
  }
  
