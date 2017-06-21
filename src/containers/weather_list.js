import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart_component';
import GoogleMap from '../components/map_component';


export class WeatherList extends Component {

	constructor(props){
		super(props);
		//this.renderWeather = this.renderWeather(this);
	}

	renderWeather(cityData){
		let temp = cityData.list.map( (item) => {
			return item.main.temp;
		});

		let humidity = cityData.list.map( item => item.main.humidity );

		let pressure = cityData.list.map( (item) => {
			return item.main.pressure;
		});

		let {lon, lat} = cityData.city.coord;


		return (
			<tr key={cityData.city.id}>
				<td className="map-wrapper">
					<GoogleMap lat={lat} lng={lon}  />
				</td>
				<td>
					<Chart data={temp} className="chart_component" color="#86c5da" units="K" />
					
				</td>
				<td>
					<Chart data={pressure} className="chart_component" color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidity} className="chart_component" color="black" units="%" />
				</td>
			</tr>
		);
	}

	render(){
		console.log('props weather:::', this.props.weather);
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>

			</table>
		);
	}

}


//export default connect( (state) => state)(WeatherList);

// alternate es6
// with destructuring
function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);