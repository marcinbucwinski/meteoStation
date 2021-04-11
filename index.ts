import { App } from './App'; 


class StartApp{
city: HTMLInputElement;

constructor(){
    this.start();
}

start(){
    document.getElementById('button').addEventListener('click', this.getCityName);
}


getCityName(){
    this.city = document.getElementById('#input');
    return 
}
}
const startApp = new StartApp();