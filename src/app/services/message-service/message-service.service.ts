import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    return this.http.post('http://localhost:8080/topiclist', message);
  }

  async getProviders(serverID:string): Promise<any> {
    const url = 'http://localhost:9999/' + serverID + '/providers';
    try {
      const response = await this.http.get(url).toPromise();
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  getProviders2(serverID:string) {
    return this.http.get<any[]>('http://localhost:9999/' + serverID + '/providers');
  }

  addServer(serverID: string, message: string) {
    return this.http.post('http://localhost:9999/add-server/' + serverID, message);
  }

  addProvider(serverID: string, message: string) {
    return this.http.post('http://localhost:9999/add-provider/' + serverID, message);
  }

  modifyProvider(serverID : string,  message: string) {
    console.log(serverID)
    return this.http.post('http://localhost:9999/modify-provider/' + serverID, message);
  }

  removeProvider(serverID : string, provider : string) {
    console.log(serverID)
    console.log(provider)
    return this.http.post('http://localhost:9999/remove-provider/' + serverID + "/" + provider, null);
  }

  setPublicMax(message: string) {
    return this.http.post('http://localhost:9999/max-public', message);
  }

  setPrivateMax(message: string) {
    return this.http.post('http://localhost:9999/max-private', message);
  }
}
