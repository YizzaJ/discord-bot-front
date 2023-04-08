import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    return this.http.post('http://localhost:8080/topiclist/', message);
  }

  async getProviders(serverID:string): Promise<any> {
    const url = 'http://localhost:9999/providers/' + serverID + '/complete/';
    try {
      const response = await this.http.get(url).toPromise();
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getServers(userID:string): Promise<any> {
    const url = 'http://localhost:9999/servers/' + userID ;
    try {
      const response = await this.http.get(url).toPromise();
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async addProvider(serverID: string, message: string): Promise<any> {
    const url = 'http://localhost:9999/providers/' + serverID + "/";
    try {
      const response = await this.http.post(url, message).toPromise();
      console.log(response);
      return response;
    } catch (err:any) {
      console.log("Error .")
      console.log(err.error);
      console.error(err);
      console.log("Error .")
      throw err;
    }
  }

  async modifyProvider(serverID: string, message: string): Promise<any> {
    const url = 'http://localhost:9999/providers/' + serverID + "/";
    try {
      const response = await this.http.put(url, message).toPromise();
      console.log(response);
      return response;
    } catch (err:any) {
      console.log("Error .")
      console.log(err.error);
      console.error(err);
      console.log("Error .")
      throw err;
    }
  }
  
  async removeProvider(serverID : string, provider : string) {
    console.log(serverID)
    console.log(provider)

    return this.http.post('http://localhost:9999/providers/remove/' + serverID + "/", provider).toPromise();
  }

  setPublicMax(message: string) {
    return this.http.post('http://localhost:9999/max-public/', message);
  }

  setPrivateMax(message: string) {
    return this.http.post('http://localhost:9999/max-private/', message);
  }
}
