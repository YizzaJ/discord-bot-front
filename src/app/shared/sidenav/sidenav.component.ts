import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showAddProvider = false;
  showMaxNews = false;
  showManagement = false;
  name = "";
  image = "";
  userID = "";
  discriminator = "0000";
  serverID = "1059854853721030719";


  code = '';
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });
  

  constructor(
    private _formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private readonly router: Router,
    private readonly authService: AuthenticationService) { 

  }

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      this.authService.exchangeCodeForToken(code)
        .then(async token => {
          localStorage.setItem('discordToken', token); 

          const userInfo = await this.authService.getUserInfo(token);
          this.saveUserInfo(userInfo);
        })
        .catch(error => {
          console.error('Error intercambiando código por token', error);
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
        });
      } else {
        console.error('No se recibió el código de autorización de Discord');
        this.router.navigateByUrl('/error'); // En caso de que no se reciba el código, redirigimos al usuario a una página de error
      }
    }

  saveUserInfo(userInfo: any) {
    this.name = userInfo.username;
    this.image = "https://cdn.discordapp.com/avatars/" + userInfo.id + "/" + userInfo.avatar + ".png";
    this.discriminator = userInfo.discriminator;
    this.userID = userInfo.id;

    localStorage.setItem('name', this.name);
    localStorage.setItem('image', this.image);
    localStorage.setItem('discriminator', this.discriminator);
    localStorage.setItem('userID', this.userID);
  }




  changeContent(option: String) {
    switch (option) {
      case "provider":
        this.showAddProvider = true;
        this.showMaxNews = false;
        this.showManagement = false;
        break;

      case "max-news":
        this.showAddProvider = false;
        this.showMaxNews = true;
        this.showManagement = false;
        break;

      case "manage-providers":
        this.showAddProvider = false;
        this.showMaxNews = false;
        this.showManagement = true;
        break;

      default:

        break;
    }
  }



}
