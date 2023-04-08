import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly discordAuthUrl = 'https://discord.com/api/oauth2/authorize';
  private readonly discordTokenUrl = 'https://discord.com/api/oauth2/token';
  private readonly discordApiUrl = 'https://discord.com/api';
  private readonly redirectUri = 'http://localhost:4200/home'; 
  private readonly clientId = '1059824005953097738'; 
  private readonly clientSecret = '0m4cVKWMp4VaaTN-73b_shRh4SjpmAnD'; 

  alreadyRedirected = false;

  constructor(private readonly http: HttpClient) { }

  getAlreadyRedirected(): boolean{
    return this.alreadyRedirected;
  }

  getAuthUrl(): string {
    const params = new HttpParams()
      .set('client_id', this.clientId)
      .set('redirect_uri', this.redirectUri)
      .set('response_type', 'code')
      .set('scope', 'identify guilds');
      console.log("REDIRECT" + this.alreadyRedirected)
      this.alreadyRedirected = true;
    return `${this.discordAuthUrl}?${params.toString()}`;
  }

  exchangeCodeForToken(code: string): Promise<string> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const params = new HttpParams()
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri);
      console.log("CODIGO" + code)
    
    return this.http.post<any>(this.discordTokenUrl, params.toString(), { headers })
      .toPromise()
      .then(response => response.access_token)
      .catch(error => {
        console.error('Error intercambiando código por token', error);
        throw error;
      });
  }


  async getUserInfo(accessToken: string): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    });
  
    const url = `${this.discordApiUrl}/users/@me`;
    try {
      const response = await this.http.get(url, { headers }).toPromise();
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getUserServers(accessToken: string): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    });
  
    const url = `${this.discordApiUrl}/users/@me/guilds`;
    try {
      const response = await this.http.get(url, { headers }).toPromise();
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
