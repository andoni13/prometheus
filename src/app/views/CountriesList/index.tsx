import * as React from 'react';
import PubSub from 'pubsub-js';
import {getQueryParam} from '../../services/utils/url';
import {fetchData} from '../../services/httpClient';
import {API_ERROR, CLEAR_ERROR} from 'app/services/Error/constants';

const CountriesList = (): JSX.Element => {
	const region = getQueryParam('region');

	const init = () => {
		return () => {
			PubSub.publish(API_ERROR, CLEAR_ERROR);
		};
	};

	const fetchCountries = () => {
		fetchData(`${process.env.COUNTRIES_API_BASE_URL}region/${region}`).then(
			(response: []) => console.log(response)
		);
	};

	React.useEffect(init, []);

	React.useEffect(fetchCountries, []);

	return <span>{region}</span>;
};

export default CountriesList;
