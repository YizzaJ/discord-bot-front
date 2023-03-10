import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) {}



  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log("TOKEN" + code)
    if (code) {
      this.authService.exchangeCodeForToken(code)
        .then(token => {
          localStorage.setItem('discordToken', token); // Almacenamos el token de acceso en el almacenamiento local para su uso posterior
          console.log("TOKEN" + token)
          console.log(this.authService.getUserInfo(token))
          this.router.navigateByUrl('/configurar-bot'); // Redirigimos al usuario a la página de configuración del bot
        })
        .catch(error => {
          console.error('Error intercambiando código por token', error);
        });
      } else {
        console.error('No se recibió el código de autorización de Discord');
        this.router.navigateByUrl('/error'); // En caso de que no se reciba el código, redirigimos al usuario a una página de error
      }
    }
  }
  