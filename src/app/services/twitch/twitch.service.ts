import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



const headers = new HttpHeaders({
    'Client-ID': 'v7nd0v609fiboigla8f0yda8nslg0y',
    Accept: 'application/vnd.twitchtv.v5+json'
})
const httpOptions = {
  headers
}
@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  twitchUrl = 'https://api.twitch.tv/kraken/'


  getTopGames() {
    return this.http.get(`${this.twitchUrl}games/top`, httpOptions);
  }
  getStreams(gameId: string) {
    if(!gameId){
      return this.http.get(`${this.twitchUrl}streams/`, httpOptions);
    }
    return this.http.get(`${this.twitchUrl}streams/?game=${gameId}`, httpOptions);
  }
  getStream(id: string) {
    return this.http.get(`${this.twitchUrl}streams/${id}`, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
