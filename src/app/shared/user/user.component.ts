import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() name = 'NotiBot';
  @Input() image = 'assets/images/Logo.png';
  @Input() discriminator = '0000';
}
