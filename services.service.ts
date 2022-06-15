import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=aea3b2d4a7034efa9ea9d8be70ad2d9e";

  techApiUrl="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=aea3b2d4a7034efa9ea9d8be70ad2d9e";
head():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

tech():Observable<any>
{
  return this._http.get(this.techApiUrl);
}
}


