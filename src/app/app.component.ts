import { Component } from '@angular/core';
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
    private readonly authService: AuthenticationService) {


  }
  ngOnInit(): void {
  }

}
