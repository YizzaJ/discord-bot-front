import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
selector: 'app-log-in2',
templateUrl: './log-in2.component.html',
styleUrls: ['./log-in2.component.css']
})
export class Login2Component {
oauthUrl = 'https://discord.com/api/oauth2/authorize?client_id=1059824005953097738&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&response_type=code&scope=identify';
loginDisplay = 'none';
greeting = 'Hoi!';

// constructor(private route: ActivatedRoute) { }

// ngOnInit() {
//   const code = this.route.snapshot.queryParamMap.get('code');
//   console.log('Code value:', code);
// }


// constructor(private http: HttpClient) {
//   const fragment = new URLSearchParams(window.location.hash);
//   console.log(fragment);
//   const code = fragment.get('code');

//   if (!code) {
//     this.loginDisplay = 'block';
//     return;
//   }
  
//   const params = new URLSearchParams();
//   params.append('grant_type', 'authorization_code');
//   params.append('client_id', '1059824005953097738'); // Replace with your client ID
//   params.append('client_secret', 'YOUR_CLIENT_SECRET'); // Replace with your client secret
//   params.append('code', code);
//   params.append('redirect_uri', 'http://localhost:4200/'); // Replace with your redirect URI
//   console.log(params);
  
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/x-www-form-urlencoded'
//   });
  
//   this.http.post<any>('https://discord.com/api/oauth2/token', params.toString(), { headers })
//     .subscribe({
//       next: response => {
//         const accessToken = response.access_token;
//         const tokenType = response.token_type;
  
//         this.http.get<any>('https://discord.com/api/users/@me', {
//           headers: {
//             'Authorization': `${tokenType} ${accessToken}`
//           }
//         }).subscribe({
//           next: response => {
//             const { username, discriminator } = response;
//             this.greeting += ` ${username}#${discriminator}`;
//           },
//           error: error => console.error(error)
//         });
//       },
//       error: error => console.error(error)
//     });

//   }
}
