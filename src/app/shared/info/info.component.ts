import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  name = "";
  image = "";
  userID = "";
  discriminator = "0000";

  ngOnInit(): void {

    const storedName = localStorage.getItem('name');
    const storedImage = localStorage.getItem('image');
    const storedDiscriminator = localStorage.getItem('discriminator');
    const storedUserID = localStorage.getItem('userID');

    if (storedName && storedImage && storedDiscriminator && storedUserID) {

      this.name = storedName;
      this.image = storedImage;
      this.discriminator = storedDiscriminator;
      this.userID = storedUserID;
    }

  }
}
