import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private BASE_URL = 'https://openweathermap.org/?';

  /**En el constructor inyectamos un objeto de tipo HttpClient, esto nos ayuda a realizar las peticiones HTTP */
  constructor(
    private httpClient : HttpClient
  ) { console.log('Servicio HTTP'); }








  
// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

// export class WeatherService {

//   apiKey = '96217705e91f697372ede69c69448b11';
//   URI: string ='';

  

//   constructor(private httpClient: HttpClient) {
//     this.URI = 'https://www.el-tiempo.net/api/json/v2/home{this.apiKey}'

//    }

   getWeather(cityName: string, countryCode:string){
      return this.httpClient.get('${this.URI},${cityName},${countryCode}')
    }
 }