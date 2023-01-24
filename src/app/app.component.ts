import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/Weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  public weatherData!: WeatherData;
  public city: string = 'chennai';

  ngOnInit(): void {
    this.getWeatherData(this.city);


  }
  onSubmit() {
    this.getWeatherData(this.city);
  }
  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
        }
      });
  }
  title = 'WeatherApp';


}
