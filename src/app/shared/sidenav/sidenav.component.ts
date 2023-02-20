import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showAddProvider = false;
  showMaxNews = false;
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) { }

  changeContent(option: String) {
    switch (option) {
      case "provider":
      this.showAddProvider = true;
      this.showMaxNews = false;
        break;
      case "max-news":
      this.showAddProvider = false;
      this.showMaxNews = true;
        break;
      default:

        break;
    }
  }



}
