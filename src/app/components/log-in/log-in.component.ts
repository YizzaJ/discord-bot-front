import { Component } from '@angular/core';
import { AuthConfigService } from 'src/app/services/auth-config/auth-config.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {


  constructor(private authService: AuthConfigService) { }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


}
