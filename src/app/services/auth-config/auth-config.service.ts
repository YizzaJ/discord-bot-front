import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'https://discord.com/api/oauth2/authorize',
  redirectUri: window.location.origin + '/login',
  clientId: '1059824005953097738',
  scope: 'identify guilds',
  responseType: 'token',
  showDebugInformation: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }
}


