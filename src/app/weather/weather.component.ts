import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  WeatherData:any; //Tiempo 

  constructor() { }

  ngOnInit(): void {

    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);

  }

  /**Como puedo hacer para poner la ciudad que quiero, o geolocalizador*/
  /**Se recoje la información de la API */
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  // https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=ede02ee26440df0a3d8824ed2031f3a5
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=malaga&appid=53b9ff3723f93dd1692f0d002308a674')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

     let data = JSON.parse('{"coord":{"lon":-4.4203,"lat":36.7202},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":290.55,"feels_like":290.25,"temp_min":288.09,"temp_max":294.95,"pressure":1014,"humidity":73},"visibility":10000,"wind":{"speed":2.57,"deg":300},"clouds":{"all":0},"dt":1650267361,"sys":{"type":2,"id":2010336,"country":"ES","sunrise":1650260388,"sunset":1650308032},"timezone":7200,"id":2514256,"name":"Málaga","cod":200}');
     this.setWeatherData(data);
  }

  /**Se introducen los datos de la API con los formatos necesarios */
  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
