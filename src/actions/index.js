import axios from 'axios';
import API_KEY from '../api/openWeatherApi';

const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';

export var fetchWeather = (cityName) => {
	console.log('API', API_KEY);
	const url = `${BASE_URL}&q=${cityName},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request

	}
}