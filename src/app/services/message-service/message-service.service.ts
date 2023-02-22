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

  addProvider(message: string) {
    return this.http.post('http://localhost:9999/add-provider', message);
  }

  setPublicMax(message: string) {
    return this.http.post('http://localhost:9999/max-public', message);
  }

  setPrivateMax(message: string) {
    return this.http.post('http://localhost:9999/max-private', message);
  }
}
