import { city } from './index';
export class App {
    opwApiKey='b5a7d2e16150cb009fef3c81f7c6cf80';
    constructor(){
        this.getCityInfo(this.city);
    }

    async getCityInfo(city: string){
        const weather = await this.getWeather(city);
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any>{
        const openWeatherUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData(){
        const data = localStorage.getItem('weatherData');
        if (data){
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}