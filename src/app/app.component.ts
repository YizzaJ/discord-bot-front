import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageButtonComponent } from './components/message-button/message-button.component';
import { AuthenticationService } from './services/authentication.service';
var red = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'discord-bot';
  constred = false;
  constructor(
    private readonly authService: AuthenticationService,
    private router: Router) {


  }
  ngOnInit(): void {
    // console.log("INIT" + this.authService.getAlreadyRedirected());
    // if (!this.authService.getAlreadyRedirected()){
    //   console.log("REDIRECCUIBANISSS");
    //   red = true;

    //   window.location.href = this.authService.getAuthUrl();
    // }
  }

}
