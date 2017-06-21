import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

// Not a class component
// no methods needed, this can be a plain functional component
export default (props) => {
	return (
		<div>
			<Sparklines data={props.data}>
	  			<SparklinesLine color={props.color} />
	  			<SparklinesReferenceLine type='mean' color="#333333" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}

//helper method
//helper method not associated with the component - because it's a stateless function
function average(data){
	return _.round(_.sum(data) / data.length);
}