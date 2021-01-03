import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "cdda71cd9d88cbf3506b1825fe50f491";


export const fetchWeather = async (query) => {
    const {data} = await (axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
            
        }
    }));

    return data; 
} 