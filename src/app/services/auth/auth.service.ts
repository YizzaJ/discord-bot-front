import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
  });

  constructor(private httpClient: HttpClient, private oauthService: OAuthService) { }

  getConfig(guildId: string) {
    const url = `${this.apiUrl}/config/${guildId}`;
    return this.httpClient.get(url, { headers: this.headers });
  }

  setConfig(guildId: string, config: any) {
    const url = `${this.apiUrl}/config/${guildId}`;
    return this.httpClient.post(url, config, { headers: this.headers });
  }
}
