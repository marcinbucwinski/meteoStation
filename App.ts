export class App {
    opwApiKey='b5a7d2e16150cb009fef3c81f7c6cf80';
    city: HTMLInputElement;
    cityName: string;
    
    
    constructor(){
        this.start();
    }

    start(){
        document.getElementById('button').addEventListener('click', this.getCityName);
    }

    getCityName(){
        this.city = <HTMLInputElement>document.getElementById('input');
        this.cityName=String(this.city);
        this.saveData(this.cityName);
        this.getCityInfo(this.cityName);
    }

    async getCityInfo(city: string): Promise<any>{
        const weather = await this.getWeather(city);
    }

    async getWeather(city: string): Promise<any>{
        const openWeatherUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any){
        localStorage.setItem('cityName', data);
    }

    getData(){
        const data = localStorage.getItem('cityName');
        if (data){
            return data;
        } else {
            return {};
        }
    }


}

const app=new App();
