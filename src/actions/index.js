import axios from 'axios';
import API_KEY from '../api/openWeatherApi';

const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';

export var fetchWeather = (cityName) => {
	
	const url = `${BASE_URL}&q=${cityName},us`;
	const request = axios.get(url);

	//ASYNC PROMISE REDUX-PROMISE
	//middleware stops action until promise is resolved 
	//and then provides the result as an object
	return {
		type: FETCH_WEATHER,
		payload: request

	}
}