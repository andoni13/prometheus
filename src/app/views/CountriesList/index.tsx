import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Navbar from '../../components/UI/Navbar';
import {getQueryParam} from '../../services/utils/url';

const CountriesList = ({history}: RouteComponentProps): JSX.Element => {
	const goBack = () => {
		history.goBack();
	};

	const title = getQueryParam('region');

	return <Navbar goBack={goBack} page={title} />;
};

export default CountriesList;
