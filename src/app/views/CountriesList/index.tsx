import * as React from 'react';
import PubSub from 'pubsub-js';
import SortableList from '../../components/UI/SortableList';
import {getQueryParam} from '../../services/utils/url';
import {fetchData} from '../../services/httpClient';
import {API_ERROR, CLEAR_ERROR} from 'app/services/Error/constants';
import {LIST_ITEMS} from 'app/views/CountriesList/constants';
import style from './CountriesList.module.styl';

const CountriesList = (): JSX.Element => {
	const region = getQueryParam('region');
	const [countries, setCountries] = React.useState([]);

	const init = () => {
		return () => {
			PubSub.publish(API_ERROR, CLEAR_ERROR);
		};
	};

	const fetchCountries = () => {
		fetchData(`${process.env.COUNTRIES_API_BASE_URL}region/${region}`).then(
			(response: []) => setCountries(response)
		);
	};

	React.useEffect(init, []);
	React.useEffect(fetchCountries, []);

	return (
		<div className={style.countries}>
			<SortableList items={countries} listItems={LIST_ITEMS} title={region} />
		</div>
	);
};

export default CountriesList;
