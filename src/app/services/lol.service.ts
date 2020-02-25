import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LolService {

  private APIKEY = 'RGAPI-8c864712-eca0-4a9b-b157-87804cd185a9'
  private EUN1Url = 'https://eun1.api.riotgames.com'
  private EuropeUrl = 'europe.api.riotgames.com'

  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private http: HttpClient) { }

  getFreeRotationChamps() {
    console.log(this.http)
    return this.http.get(this.EUN1Url + '/lol/platform/v3/champion-rotations?api_key=' + this.APIKEY);
  }

}